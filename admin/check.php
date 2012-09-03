<?php 

	session_start();

	// Check to see if both have inputted data
	if($_POST['username'] !== '' || $_POST['password'] !== '') {

		unset($_SESSION['error']);

		$_SESSION['logged_in'] = true;

		header('Location:/admin/index.php');

	} else {

		$_SESSION['error'] = 'Please enter all the required fields!';
		header('Location:/admin/login.php');

	}