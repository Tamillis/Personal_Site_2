<?php 

class API {
    public static function respond($json, $code = 200) {
        http_response_code($code);
        echo json_encode($json);
        exit;
    }
}