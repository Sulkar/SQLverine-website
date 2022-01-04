<?php

// Include config file
require_once "config.php";

$results = array();
$results["db_name"] = 0;
$results["user_id"] = 0;

// Define variables and initialize with empty values
$code = "";

$data = json_decode(file_get_contents('php://input'), true);
$code = $data["code"];

try{
	$sql = "SELECT db_name, user_id FROM codes WHERE code = :code";

	$stmt = $pdo->prepare($sql);
	// Bind variables to the prepared statement as parameters
	$stmt->bindParam(":code", $code, PDO::PARAM_STR);
 
	// Attempt to execute the prepared statement
	$stmt->execute();
	if($stmt->rowCount() == 1){			
		if($row = $stmt->fetch()){
			$results["db_name"] = $row["db_name"];
			$results["user_id"] = $row["user_id"];
		}
	}
		
}catch (Exception $e){	
	echo $e;	
}

// Close statement
unset($stmt);

echo json_encode($results);	

?>