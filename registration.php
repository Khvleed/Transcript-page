<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$firstName = $_POST['firstName'];
$surname = $_POST['surname'];
$otherNames = $_POST['otherNames'];
$regNo = $_POST['regNo'];
$email = $_POST['email'];
$dateOfBirth = $_POST['dateOfBirth'];
$stateOfOrigin = $_POST['stateOfOrigin'];
$address = $_POST['address'];
$phoneNumber = $_POST['phoneNumber'];
$yearOfAdmission = $_POST['yearOfAdmission'];
$gender = $_POST['gender'];
$faculty = $_POST['faculty'];
$department = $_POST['department'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO students (firstName, surname, otherNames, regNo, email, dateOfBirth, stateOfOrigin, address, phoneNumber, yearOfAdmission, gender, faculty, department) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssssss", $firstName, $surname, $otherNames, $regNo, $email, $dateOfBirth, $stateOfOrigin, $address, $phoneNumber, $yearOfAdmission, $gender, $faculty, $department);

// Execute the statement
if ($stmt->execute()) {
  // Redirect to successful.html
  header("Location: successful.html");
  exit();
} else {
  echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
