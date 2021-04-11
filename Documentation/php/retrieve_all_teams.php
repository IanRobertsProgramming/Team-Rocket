<?php
$userID = $_COOKIE['PkmUserID'];

$conn = new mysqli("hopper.wlu.ca", "", "", "rocket");

    $stmt = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");

    $stmt->bind_param("ss", $user, $pass); 
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

?>
