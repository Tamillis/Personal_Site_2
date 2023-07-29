<?php

class Auth {
    public static function authenticate() : void {
        //check for presence of X-API-Key header
        if (empty($_SERVER["HTTP_X_API_KEY"])) {
            http_response_code(400);
            echo json_encode(["message" => "X-API-Key Header missing"]);
            exit;
        }
    
        $api_key = $_SERVER["HTTP_X_API_KEY"];
        
        $dbsettings = json_decode(file_get_contents(__DIR__ . "/dbsettings.json"), true);
        
        //authenticate
        if ($api_key !== $dbsettings["X-API-KEY"]) {
            http_response_code(401);
            echo json_encode(["message" => "X-API-Key invalid", "Api-key" => $api_key]);
            exit;
        }
    }
}