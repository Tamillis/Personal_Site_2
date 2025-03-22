<?php
// Includes
require 'SessionAuth.php';
require 'API.php';

//all responses will be JSON so setting that now
header('Content-Type: application/json');

// Initialize the session authentication
try {
    $auth = new SessionAuth();
} catch (Exception $ex) {
    API::respond(['error' => $ex->getMessage()], 500);
}

// Define the path to the JSON file
$jsonFile = '../src/assets/pedd/pedd-powers.json';

// Protect appropraite CRUD operations with authentication
function checkAuthentication() {
    global $auth;
    if (!$auth->isAuthenticated()) API::respond(['error' => 'Unauthorized. Please log in.'], 401);
}

// Function to read the JSON file
function readData() {
    global $jsonFile;
    // Check if the file exists
    if (!file_exists($jsonFile)) {
        // Attempt to create the file if it doesn't exist
        $successful = file_put_contents($jsonFile, json_encode([]));
        if (!$successful) API::respond(['error' => 'Unable to create JSON file. Check permissions.'], 500);
    }

    $data = file_get_contents($jsonFile);
    //Check if the file is readable too
    if (!is_readable($jsonFile)) API::respond(['error' => 'Unable to read JSON file. Check permissions.'], 500);

    return json_decode($data, true);
}

// Function to write data to the JSON file
function writeData($data) {
    //always check authentication before writing
    checkAuthentication();

    global $jsonFile;
    $successful = file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
    // Check if the file is writable too
    if (!is_writable($jsonFile) || !$successful) API::respond(['error' => 'Unable to write to JSON file. Check permissions.'], 500);
}

function getArrayElementWithName($arr, $name) {
    foreach($arr as $el) {
        if(isset($el['name']) && $el['name'] == $name){
            return $el;
        }
    }
    return false;
}

//adds in element, and makes sure it is ordered by name
function addArrayElement(&$arr, $el) {
    array_push($arr, $el);
    usort($arr, function($a, $b) {
        return strnatcmp($a['name'], $b['name']);
    });
}

// WARN: this seems like a long-winded way of doing this
// removes element with given name from passed in array
function removeArrayElementWithName(&$arr, $name) {
    $i = 0;
    $n = -1;
    foreach($arr as $el) {
        if(isset($el['name']) && $el['name'] == $name){
            $n = $i;
        }
        $i++;
    }

    if($n == -1) return false;
    array_splice($arr, $n, 1);
    return true;
}

function checkArrayHasName($arr, $name) : void {
    if(!getArrayElementWithName($arr, $name)) API::respond(['error' => 'Record with this name doesn\'t exist'], 409);
}

function checkArrayDoesntHaveName($arr, $name) : void {
    if(getArrayElementWithName($arr, $name)) API::respond(['error' => 'Record with this name already exists'], 409);
}

function getInput() {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['name'])) API::respond(['error' => 'Name is required'], 400);
    return $input;
}

// Handle CRUD operations based on the request method
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Read operation
        API::respond(readData());
        break;

    case 'POST':
        // Create operation
        $input = getInput();
        $data = readData();
        checkArrayDoesntHaveName($data, $input['name']);
        addArrayElement($data, $input);
        writeData($data);
        API::respond(['message' => "Record {$input['name']} created successfully"]);
        break;

    case 'PUT':
        // Update operation
        $input = getInput();
        $data = readData();
        checkArrayHasName($data, $input['name']);
        removeArrayElementWithName($data, $input['name']);
        addArrayElement($data, $input);
        writeData($data);
        API::respond(['message' => "Record {$input['name']} updated successfully"]);
        break;

    case 'DELETE':
        // Delete operation
        $input = getInput();
        $data = readData();
        checkArrayHasName($data, $input['name']);
        removeArrayElementWithName($data, $input['name']);
        writeData($data);
        API::respond(['message' => "Record {$input['name']} deleted successfully"]);
        break;

    default:
        API::respond(['error' => 'Method not allowed'], 405);
        break;
}