<?php

class SessionAuth {
    private $username;
    private $passwordHash;

    // Start the session and initialize the class
    public function __construct() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Load credentials from settings.json
        $this->loadCredentials();
    }

    // Load credentials from settings.json
    private function loadCredentials() {
        //manually load local .env
        $env = file_get_contents(__DIR__."/.env");
        $lines = explode("\n",$env);
        foreach($lines as $line){
            preg_match("/([^#]+)\=(.*)/",$line,$matches);
            if(isset($matches[2])){ putenv(trim($line)); }
        }

        if (getenv('USERNAME') == null || getenv('PASSWORD_HASH') == null) {
            throw new Exception('Invalid settings file. Missing username or passwordHash.');
        }

        $this->username = getenv('USERNAME');
        $this->passwordHash = getenv('PASSWORD_HASH');
    }

    // Log in a user
    public function login($username, $password) {
        if ($username === $this->username && password_verify($password, $this->passwordHash)) {
            $_SESSION['authenticated'] = true;
            $_SESSION['username'] = $username;
            return true;
        }

        return false;
    }

    // Log out the current user
    public function logout() {
        session_unset();
        session_destroy();
    }

    // Check if the user is authenticated
    public function isAuthenticated() {
        return isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true;
    }

    // Get the current username
    public function getUsername() {
        return $_SESSION['username'] ?? null;
    }
}