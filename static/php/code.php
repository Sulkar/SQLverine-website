<?php
 
// Include config file
require_once "config.php";

$result = 0;

// Define variables and initialize with empty values
$code = "";

$data = json_decode(file_get_contents('php://input'), true);
$code = $data["code"];

try{
	$sql = "SELECT db_name, url FROM codes WHERE code = :code";

	$stmt = $pdo->prepare($sql);
	// Bind variables to the prepared statement as parameters
	$stmt->bindParam(":code", $code, PDO::PARAM_STR);
 
	// Attempt to execute the prepared statement
	$stmt->execute();
	if($stmt->rowCount() == 1){			
		if($row = $stmt->fetch()){
			$result = $row["db_name"];									
		}
	}
		
}catch (Exception $e){	
	echo $e;	
}

// Close statement
unset($stmt);

echo $result;	

?>