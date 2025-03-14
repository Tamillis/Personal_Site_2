<?php
declare(strict_types=1);

require __DIR__ . "/Auth.php";
require __DIR__ . "/ErrorHandler.php";
require __DIR__ . "/SurveyGateway.php";
require __DIR__ . "/SurveyController.php";
require __DIR__ . "/SurveyModel.php";

const RES_LOC = 2; //where in the final URI the resource is after explode("/", it)
const RES_ENDPOINT = "surveydata"; //in case I change up the endpoint
const RES_NAME = "surveys"; //in case I change up the table name

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

$dbsettings = json_decode(file_get_contents(__DIR__ . "/dbsettings.json"), true);

//start to process response
header("Content-type: application/json; charset=UTF-8");

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$parts = array_filter(explode("/", $path));

if ($parts[RES_LOC] !== RES_ENDPOINT) {
    http_response_code(404);
    echo json_encode(["message" => "Resource ". RES_ENDPOINT . " not found in $path at position " . RES_LOC . ", found " . $parts[RES_LOC] . " instead.", "URI parts" => $parts]);
    exit;
}

[$resource, $handle] = [$parts[RES_LOC], $parts[RES_LOC + 1] ?? null];

//create database connection object
$dataSourceName = "mysql:host={$dbsettings["host"]};dbname={$dbsettings["database"]};charset=utf8";

$conn = new PDO($dataSourceName, $dbsettings["user"], $dbsettings["password"], [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false,
    PDO::ATTR_STRINGIFY_FETCHES => false
]);

//Process Request
$taskGateway = new SurveyGateway($conn, RES_NAME);
$controller = new SurveyController($taskGateway);
$controller->processRequest($_SERVER['REQUEST_METHOD'], $handle);