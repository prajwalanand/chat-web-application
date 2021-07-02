<?php
	header("Access-Control-Allow-Origin: *");
	extract($_POST);
	$users = json_decode(file_get_contents("users.json"), true);

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
	//echo "Connected successfully";

	/*if(isset($users[$usr]))
	{
		echo "User already exists";
	}
	else
	{
		//$users[$usr] = $pwd;
		//$file = fopen("users.json", "w");
		//$str = json_encode($users);
		//fwrite($file, $str, strlen($str));
		//fclose($file);
		
		copy("default.jpg", $usr.".jpg");
		echo "1";
	}*/
	$sql = "insert into users (username, password) values ('".$usr."', MD5('".$pwd."'));";

	if (mysqli_query($conn, $sql)) {
		//echo "New record created successfully";
		copy("default.jpg", $usr.".jpg");
		echo "1";
	} 
	else {
		echo "Error: user already exists";
	}
	mysqli_close($conn);
?>