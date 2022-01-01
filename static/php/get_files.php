<?php

session_start();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1) {
	
	$user_id = $_SESSION['id'];
	 
	require_once "config.php";

	$results = array();

	$pathToFolder = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/";
	$data = json_decode(file_get_contents('php://input'), true);
	$folder = $pathToFolder . $data["database_folder"] . "/";

	//$folder = $pathToFolder . "2/";

	$results['files'] = array_diff( scandir($folder), array(".", "..") );
	$results['codes'] = [];

	$sql = "SELECT code FROM codes WHERE user_id = :user_id AND db_name = :db_name";

	foreach ($results['files'] as $file) {
		if($stmt = $pdo->prepare($sql)){
			// Bind variables to the prepared statement as parameters
			$stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
			$stmt->bindParam(":db_name", $file, PDO::PARAM_STR);
					
			// Attempt to execute the prepared statement
			if($stmt->execute()){
				if($row = $stmt->fetch()){
					$results['codes'][$file] = $row["code"];											
				}
			}
		}
	}

	echo json_encode($results);
}else {
    echo 0;
}

?>