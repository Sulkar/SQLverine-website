<?php

session_start();

$results = array();
$results['loggedin'] = 0;

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === 1){
	$results['loggedin'] = $_SESSION["loggedin"];
	$results['username'] = $_SESSION["username"];
	$results['database_folder'] = $_SESSION['database_folder'];
	$results['id'] = $_SESSION['id'];
	$results['db_count'] = $_SESSION['db_count'];
	$results['codes'] = $_SESSION['codes'];
	echo json_encode($results);
}else{
	echo json_encode($results);
}

?>