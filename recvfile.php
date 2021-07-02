<?php
	header("Access-Control-Allow-Origin: *");
	extract($_POST);
	move_uploaded_file($_FILES['file']['tmp_name'], $_FILES['file']['name']);
	$file = fopen("data.txt", "w");
	fwrite($file, $user.",", (strlen($user)+1));
	fwrite($file, $friend.",", (strlen($friend)+1));
	$path = "";
	if($_FILES['file']['type'] == "image/jpeg")
	{
		fwrite($file, "image,", 6);
	}
	else if($_FILES['file']['type'] == "video/mp4")
	{
		fwrite($file, "video,", 6);
	}
	else
	{
		fwrite($file, "file,", 5);
	}
	$path = $_FILES['file']['name'];
	fwrite($file, $path, strlen($path));
	fclose($file);
	echo "Successful";
?>