<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: *");
	header("Access-Control-Allow-Headers: *");
	header("Cache-control: no-cache");
	header("Content-type:text/event-stream");
	ob_start();
	$oldtime = filemtime("data.txt");
	$newtime = $oldtime;
	while(true)
	{
		clearstatcache();
		$newtime = filemtime("data.txt");
		if($newtime > $oldtime)
		{
			$contents = file_get_contents("data.txt");
			echo "event:myevent\n";
			echo "retry:10\n";
			echo "data:".$contents."\n\n";
			ob_flush();
			flush();
			$oldtime = $newtime;
		}
	}
?>