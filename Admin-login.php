<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// Hardcoded admin credentials for example purposes
$admin_username = 'admin';
$admin_password = 'password123';

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// Check credentials
if ($username === $admin_username && $password === $admin_password) {
    // Set session variable
    $_SESSION['admin_logged_in'] = true;
    
    // Redirect to admin page
    header("Location: admin.html");
    exit();
} else {
    // Invalid credentials
    echo "Invalid username or password.";
}
?>
