<?php

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$root = $_SERVER["DOCUMENT_ROOT"];
$fullPath = $root . $path;

log_msg("resolving $path $fullPath");

// do routing
switch($path) {
    case '/personal_site/api/powers':
    case '/api/powers':
        log_msg("Serving powers.");
        require $root . '/api/PEDD_Powers_Controller.php';
        break;
    
    case '/personal_site/api/auth':
    case '/api/auth':
        log_msg("Serving auth");
        require $root . '/api/Auth_Controller.php';

    default:
        log_err("No such file or directory, serving index.php", 404);
        http_response_code(404);
        require $root . '/api/index.php';
        break;
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
    file_put_contents($loc, sprintf("[%s] %s", date("H:i:s"), "[$status_code] $path - $msg"));
}
