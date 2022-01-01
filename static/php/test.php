<?php

	$hashed_password = password_hash("test", PASSWORD_DEFAULT);
	
	echo $hashed_password;

?>