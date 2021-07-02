<?php
	header("Access-Control-Allow-Origin: *");
	extract($_GET);
	$file = fopen("data.txt", "w");
	fwrite($file, $user.",", (strlen($user)+1));
	fwrite($file, $friend.",", (strlen($friend)+1));
	fwrite($file, "text,", 5);
	fwrite($file, $msg, strlen($msg));
	fclose($file);
	echo "Successful";
?>