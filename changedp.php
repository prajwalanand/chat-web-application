<?php
	header("Access-Control-Allow-Origin: *");
	header("Cache-control: no-cache");
	extract($_POST);
	move_uploaded_file($_FILES['file']['tmp_name'], $user.".jpg");
	echo "Successful";
?>