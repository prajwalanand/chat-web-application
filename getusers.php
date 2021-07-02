<?php
	header("Access-Control-Allow-Origin: *");
	$users = array_keys(json_decode(file_get_contents("users.json"), true));
	echo implode(",", $users);
?>