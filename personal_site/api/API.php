<?php 

class API {
    public static function respond($json, $code = 200) {
        if(!json_validate($json)) $json = json_encode($json);
        http_response_code($code);
        echo $json;
        exit;
    }
}