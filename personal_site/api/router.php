<?php
require 'SessionAuth.php';
require 'API.php';
require "Auth_Controller.php";
require "PEDD_Powers_Controller.php";

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$parts = explode('/', trim($path, '/'));
//the path pattern is /API/{CONTROLLER}/{ACTION}/{PARAM}?{QUERY}
//this schema doesn't have a null controller return, i.e. an endpoints that is just /api/, other than the error page which will be reached by this being null
$controller = array_key_exists(1, $parts) ? $parts[1] : null;
$action = array_key_exists(2, $parts) ? $parts[2] : "index";    //defaults to index, meaning omitted action is the sme as /api/controller/index

//process the parameter, such as an id or a string key, and the query into a handy array
$paramAndQuery = array_key_exists(3, $parts) ? explode("?", $parts[3]) : null;
$param = !is_null($paramAndQuery) && array_key_exists(0, $paramAndQuery) ? urldecode($paramAndQuery[0]) : null;
$queries = !is_null($paramAndQuery) && array_key_exists(1, $paramAndQuery) ? explode("&", $paramAndQuery[1]) : null;

$root = str_replace('\\', '/', $_SERVER["DOCUMENT_ROOT"]);
$fullPath = $root . $path;

log_msg("resolving $fullPath");

//this is a JSON api so just setting this header now
header('Content-Type: application/json');

// do routing
if (is_null($controller)) generalErrorResponse($path, $controller, $action, $param, $queries);



switch ($controller) {
    case 'powers':
        log_msg("Serving powers.");

        $powersController = new PowersController();
        switch ($action) {
            case 'index':
                $powersController->index($param);
                break;
            default:
                log_err("Invalid action $action", 404);
                API::respond(["error" => "Invalid action $action"], 400);
                break;
        }

        break;

    case 'auth':
        log_msg("Serving auth");
        $authController = new AuthController();
        switch ($action) {
            case 'login':
                $authController->login();
                break;
            case 'logout':
                $authController->logout();
                break;
            case 'check':
                $authController->check();
                break;
            default:
                log_err("Invalid action $action", 404);
                API::respond(["error" => "Invalid action $action"], 400);
                break;
        }

    default:
        log_err("No such file or directory", 404);
        http_response_code(404);
        generalErrorResponse($path, $controller, $action, $param, $queries);
        break;
}

function generalErrorResponse($path, $controller, $action, $param, $queries)
{
    $arr = array(
        "msg" => "No controller / action found for your query.",
        "path" => $path,
        "controller" => $controller,
        "action" => $action,
        "param" => $param,
        "queries" => $queries
    );
    return API::respond($arr, 404);
}

//apparently PHP logger requires this in a router in order to print to the output
function log_msg($msg, $status_code = 200)
{
    log_to_output($msg, "php://stdout", $status_code);
}

function log_err($msg, $status_code = 500)
{
    log_to_output($msg, "php://stderr", $status_code);
}

function log_to_output($msg, $loc, $status_code)
{
    global $path;
    file_put_contents($loc, "LOG - [$status_code] $path - $msg\n");
}
