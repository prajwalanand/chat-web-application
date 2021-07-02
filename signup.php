<?php
	header("Access-Control-Allow-Origin: *");
	extract($_POST);
	$users = json_decode(file_get_contents("users.json"), true);
	if(isset($users[$usr]))
	{
		echo "User already exists";
	}
	else
	{
		$users[$usr] = $pwd;
		$file = fopen("users.json", "w");
		$str = json_encode($users);
		fwrite($file, $str, strlen($str));
		fclose($file);
		copy("default.jpg", $usr.".jpg");
		echo "1";
	}
?>