<?php
	header("Access-Control-Allow-Origin: *");
	extract($_POST);
	$users = json_decode(file_get_contents("users.json"), true);
	/*if(isset($users[$usr]))
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
	}*/
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "login";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "select * from users where username='".$usr."' and password='".MD5($pwd)."';";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) == 1)
	{
		echo "1";
	}
	else
	{
		echo "Incorrect password";
	}
	mysqli_close($conn);
	/*$username=$usr;
	$password=$pwd;
	$file = fopen("C:xampp/htdocs/project/Code/login.txt", "w");
	$str = json_encode($username);
	fwrite($file, $str, strlen($str));
	fclose($file);*/
?>