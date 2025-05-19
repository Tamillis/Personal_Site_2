<?php

class AuthController
{
    private $auth;

    public function __construct()
    {
        try {
            $auth = new SessionAuth();
        } catch (Exception $ex) {
            API::respond(['error' => $ex->getMessage()], 500);
        }
    }

    public function login()
    {
        $input = json_decode(file_get_contents('php://input'), true);
        if (!isset($input['username']) || !isset($input['password'])) {
            API::respond(['error' => 'Username and password are required'], 400);
        }

        if ($this->auth->login($input['username'], $input['password'])) {
            API::respond(['message' => 'Login successful', 'session-username' => $this->auth->getUsername(), 'session-authenticated' => $this->auth->isAuthenticated()]);
        } else {
            http_response_code(401);
            API::respond(['error' => 'Invalid username or password'], 401);
        }
    }

    public function logout()
    {
        $this->auth->logout();
        API::respond(['message' => 'Logout successful']);
    }

    public function check()
    {
        $authenticated = $this->auth->isAuthenticated();
        $username = $this->auth->getUsername();
        $statusCode = $this->auth->isAuthenticated() ? 200 : 401;
        API::respond(['authenticated' => $authenticated, 'username' => $username], $statusCode);
    }
}
