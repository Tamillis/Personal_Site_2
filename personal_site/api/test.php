<?php

echo password_hash("pie", PASSWORD_DEFAULT);
echo "<br/>";

$obj = ["msg" => "Hello there"];

echo "The session status is " . session_status();
echo "<br/>";

$data = file_get_contents("pedd-powers.json");

echo $data;
echo "<br/>";

$json = json_decode($data, true);

var_dump($json);