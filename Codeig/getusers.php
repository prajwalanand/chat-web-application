<?php
	header("Access-Control-Allow-Origin: *");
	//$users = array_keys(json_decode(file_get_contents("users.json"), true));
	//echo implode(",", $users);
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "login";
    $users="";
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "select username from users;";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0)
	{
		$s=0;
		 while($row = mysqli_fetch_assoc($result)) 
		 {
			$users=$users.$row["username"];
			if($s<mysqli_num_rows($result)-1)
			{
				$users=$users.",";
				$s=$s+1;
			}
		}
		echo $users;
	}
	else
	{
		echo "Incorrect password";
	}
	mysqli_close($conn);
?>