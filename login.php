<?php
	header("Access-Control-Allow-Origin: *");
	extract($_POST);
	$users = json_decode(file_get_contents("users.json"), true);
	if(isset($users[$usr]))
	{
		if($users[$usr] == $pwd)
		{
			echo "1";
		}
		else
		{
			echo "Incorrect password";
		}
	}
	else
	{
		echo "User does not exist";
	}
?>