<?php

session_start();
 
$result = 0;

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1) {
	
	// Include config file
	require_once "config.php";
	
	$data = json_decode(file_get_contents('php://input'), true);
	$db_name = $data["db_name"];
	$database_folder = $data["database_folder"];
	$user_id = $_SESSION['id'];
	
	/*$db_name = "tester.db";
	$database_folder = 2;
	$user_id = 2;*/
	
	
	function deleteCode(){
		global $pdo, $result,  $user_id, $db_name;
		try {
			//try to update db of code
			$sql_update = "DELETE FROM codes WHERE db_name = :db_name AND user_id = :user_id";

			$stmt = $pdo->prepare($sql_update);
			// Bind variables to the prepared statement as parameters
			$stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
			$stmt->bindParam(":db_name", $db_name, PDO::PARAM_STR);
		 
			// Attempt to execute the prepared statement
			$stmt->execute();
			if($stmt->rowCount() > 0){
				//delete
				$result = 3;
			}	
		}catch (Exception $e){	
			echo $e;
		}
	}

	deleteCode();
	
	$file = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/" . $database_folder . "/" . $db_name;
	unlink($file);
	
	echo $result;
} else {
    echo $result;
}

?>