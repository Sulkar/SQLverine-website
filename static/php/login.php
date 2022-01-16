<?php

session_start();
 
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$username = $password = "";

$data = json_decode(file_get_contents('php://input'), true);
$username = $data["name"];
$password = $data["password"];

$sql = "SELECT * FROM users WHERE username = :username";

$results = array();
$results['loggedin'] = 0;
							   
if($stmt = $pdo->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":username", $username, PDO::PARAM_STR);
            
            // Set parameters
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // Check if username exists, if yes then verify password
                if($stmt->rowCount() == 1){
					
                    if($row = $stmt->fetch()){
                        $hashed_password = $row["password"];

                        if(password_verify($password, $hashed_password)) {
                            
							$results['loggedin'] = 1;
							$results['id'] = $row['id'];
							$results['username'] = $row['username'];
							$results['codes'] = $row["codes"];	
							$results['db_count'] = $row["db_count"];							
							$results['max_file_size'] = $row["max_file_size"];
   
                            $_SESSION["loggedin"] = $results['loggedin'];
							$_SESSION["username"] = $results['username'];
							$_SESSION['codes'] = $results['codes'];
							$_SESSION['id'] = $results['id'];
							$_SESSION['db_count'] = $results['db_count'];
							$_SESSION['max_file_size'] = $results["max_file_size"];
                                                              
                        } else{
                            // Password is not valid, display a generic error message
                            $login_err = "Benutzername oder Password ist falsch!";
                        }
                    }
                } else{
                    // Username doesn't exist, display a generic error message
                    $login_err = "Benutzername oder Password ist falsch!";
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }

            // Close statement
            unset($stmt);
        }
		
	/*if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
		echo 1;
	}else{
		echo 0;
	}*/
	
	echo json_encode($results);


?>