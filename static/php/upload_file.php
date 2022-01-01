<?php


session_start();
 
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1) {
	
	// Include config file
	require_once "config.php";

	$uploadOk = 1;

	$database_folder = $_POST["database_folder"];
	if($database_folder == ""){
		$uploadOk = 0;
	}
	$target_dir = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/" . $database_folder . "/";
	$target_file = $target_dir . basename($_FILES["myFile"]["name"]);
	
	$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

	//count files/databases
	$files = array_diff(scandir($target_dir), array(".", ".."));
	if(count($files) >= $_SESSION['db_count']){
		$uploadOk = 2;
	}
	
	// Check file size
	if ($_FILES["myFile"]["size"] > 500000) {
	  $uploadOk = 0;
	}

	// Allow certain file formats
	if($fileType != "db") {
	  $uploadOk = 0;
	}

	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 1) {
		if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)) {
			echo $uploadOk;
		} else {
			$uploadOk = 0;
			echo $uploadOk;
		}
	} else {
		echo $uploadOk;
	}

} else {
	$uploadOk = 0;
    echo $uploadOk;
}

?>