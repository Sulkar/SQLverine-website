<?php

session_start();
 
$result = 0;

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1) {
	
	// Include config file
	require_once "config.php";

	$data = json_decode(file_get_contents('php://input'), true);
	$code = $data["code"];
	$user_id = $_SESSION['id'];
	$db_name = $data["db_name"];

	// Define variables and initialize with empty values
	/*$code = "2001";
	$user_id = 2;
	$db_name = "tester.db";*/

	$title = "";
	$info = "";
	$url = "";

	function deleteCode(){
		global $pdo, $result, $code, $user_id, $db_name, $title, $info, $url;
		try {
			//try to update db of code
			$sql_update = "DELETE FROM codes WHERE (db_name = :db_name AND user_id = :user_id) OR (code = :code AND user_id = :user_id)";

			$stmt = $pdo->prepare($sql_update);
			// Bind variables to the prepared statement as parameters
			$stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
			$stmt->bindParam(":db_name", $db_name, PDO::PARAM_STR);
			$stmt->bindParam(":code", $code, PDO::PARAM_STR);
		 
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
	
	function updateCode(){
		global $pdo, $result, $code, $user_id, $db_name, $title, $info, $url;
		try {
			//try to update db of code
			$sql_update = "UPDATE codes SET db_name = :db_name WHERE user_id = :user_id AND code = :code";

			$stmt = $pdo->prepare($sql_update);
			// Bind variables to the prepared statement as parameters
			$stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
			$stmt->bindParam(":code", $code, PDO::PARAM_STR);
			$stmt->bindParam(":db_name", $db_name, PDO::PARAM_STR);
		 
			// Attempt to execute the prepared statement
			$stmt->execute();
			if($stmt->rowCount() > 0){
				//update
				$result = 1;
			}	
		}catch (Exception $e){	
			echo $e;
		}
	}

	function insertCode(){
		global $pdo, $result, $code, $user_id, $db_name, $title, $info, $url;
		try{
			
			$sql_insert = "INSERT INTO codes (code, title, info, url, db_name, user_id) VALUES (:code, :title, :info, :url, :db_name, :user_id)";

			$stmt = $pdo->prepare($sql_insert);
			// Bind variables to the prepared statement as parameters
			$stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
			$stmt->bindParam(":code", $code, PDO::PARAM_STR);
			$stmt->bindParam(":db_name", $db_name, PDO::PARAM_STR);				
			$stmt->bindParam(":title", $title, PDO::PARAM_STR);
			$stmt->bindParam(":info", $info, PDO::PARAM_STR);
			$stmt->bindParam(":url", $url, PDO::PARAM_STR);

			$stmt->execute();
			if($stmt->rowCount() > 0){
				//insert
				$result = 2;
			}
		}catch (Exception $e){	
			echo $e;
		}
	}

	//updateCode();
	deleteCode();

	if($code != "Codes"){
		insertCode();
	}
	

	unset($stmt);
	echo $result;

} else {
    echo $result;
}
?>