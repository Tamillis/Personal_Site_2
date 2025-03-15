<?php

echo password_hash("pie", PASSWORD_DEFAULT);
echo "<br/>";

$obj = ["msg" => "Hello there"];

echo "The message {$obj['msg']} is in \$obj!";