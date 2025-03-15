<?php
require 'env.php';
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
        if (getenv('USERNAME') == null || getenv('PASSWORD_HASH') == null) {
            throw new Exception('Invalid environemnt settings. Missing username and/or passwordHash.');
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