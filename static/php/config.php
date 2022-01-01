<?php

/* Database credentials. */
define('DB_SERVER', '');
define('DB_USERNAME', '');
define('DB_PASSWORD', '');
define('DB_NAME', '');
 
/* Attempt to connect to MySQL database */
try{
	
	$options  = array(
		PDO::MYSQL_ATTR_FOUND_ROWS   => TRUE,
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	);

    $pdo = new PDO('mysql:host=' . DB_SERVER . ';dbname=' . DB_NAME, DB_USERNAME, DB_PASSWORD, $options);

} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>