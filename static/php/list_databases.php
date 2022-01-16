<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once "config.php";

try{
	$sql = "SELECT codes.code, codes.title, codes.info, codes.url, codes.db_name, codes.user_id, users.username FROM codes JOIN users ON users.id = codes.user_id ORDER BY codes.db_name ASC";
	
	$stmt = $pdo->prepare($sql); 
	
	// Attempt to execute the prepared statement
	$stmt->execute();
	$results = $stmt->fetchAll(\PDO::FETCH_ASSOC);
	
}catch (Exception $e){	
	echo $e;	
}

// Close statement
unset($stmt);

echo json_encode($results);

?>


