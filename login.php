<?php
session_start();

$emailOrLoginID = $_POST['emailOrLoginID'];
$password = $_POST['password'];

if (empty($emailOrLoginID) || empty($password)) {
    die("Please enter both email or login ID and password.");
}

$servername = "localhost";
$username = "root";
$password = ""; // 
$dbname = "Tranxhub";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement
$sql = "SELECT * FROM users WHERE (email = ? OR regNo = ?) AND password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $emailOrLoginID, $emailOrLoginID, $password);

// Execute SQL statement
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists and password is correct
if ($result->num_rows == 1) {
    // User exists and password is correct
    $_SESSION['loggedin'] = true;
    // Redirect user to dashboard or homepage
    header("Location: dashboard.html"); // Change this to the desired destination
    exit();
} else {
    // Invalid credentials
    echo "Invalid email or login ID or password.";
}

// Close statement and database connection
$stmt->close();
$conn->close();
?>
