<?php
// Includes
require 'SessionAuth.php';
require 'API.php';

try {
    $auth = new SessionAuth();
} catch (Exception $ex) {
    API::respond(['error' => $ex->getMessage()], 500);
}

//all responses will be JSON so setting that now
header('Content-Type: application/json');

// Handle authentication requests
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 'login':
            $input = getInput();

            if ($auth->login($input['username'], $input['password'])) {
                API::respond(['message' => 'Login successful', 'session-username' => $auth->getUsername(), 'session-authenticated' => $auth->isAuthenticated()]);
            } else {
                http_response_code(401);
                API::respond(['error' => 'Invalid username or password'], 401);
            }
            break;
        case 'logout':
            $auth->logout();
            API::respond(['message' => 'Logout successful']);
            break;
        case 'check':
            API::respond(['authenticated' => $auth->isAuthenticated(), 'username' => $auth->getUsername()], ($auth->isAuthenticated() ? 200 : 401));
            break;
        default:
            API::respond(["error" => "Invalid action {$_GET['action']}"], 400);
            break;
    }
}

function getInput() {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['username']) || !isset($input['password'])) {
        API::respond(['error' => 'Username and password are required'], 400);
    }
    return $input;
}