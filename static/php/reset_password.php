<?php
// Initialize the session
session_start();

$result = 0;

// Check if the user is logged in, otherwise redirect to login page
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1) {
 
    // Include config file
    require_once "config.php";
    
    $data = json_decode(file_get_contents('php://input'), true);
    $user_id = $_SESSION['id'];
    $new_password = $data["new_password"]; 
    $param_password = password_hash($new_password, PASSWORD_DEFAULT);

    try{
        $sql = "UPDATE users SET password = :password WHERE id = :id";

        $stmt = $pdo->prepare($sql);
        // Bind variables to the prepared statement as parameters
        $stmt->bindParam(":password", $param_password, PDO::PARAM_STR);
        $stmt->bindParam(":id", $user_id, PDO::PARAM_INT);

        // Attempt to execute the prepared statement
        $stmt->execute();
        if($stmt->rowCount() > 0){
            //update
            $result = 1;
        }	
    }catch (Exception $e){	
        echo $e;
    }
    
    echo $result;
    
} else {
    echo $result;
}
?>
