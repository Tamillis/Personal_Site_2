<?php

echo password_hash("pie", PASSWORD_DEFAULT);
echo "<br/>";

$obj = ["msg" => "Hello there"];

echo "The session status is " . session_status();
echo "<br/>";
echo PHP_SESSION_NONE;
echo "<br/>";
echo $_SESSION['authenticated'] ? "Authenticated" : "Not Authenticated";