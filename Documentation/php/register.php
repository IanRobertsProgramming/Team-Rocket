<?php
    $email = $_POST['email'];
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $conn = new mysqli("hopper.wlu.ca", "rocket", "Rocket_7", "rocket");

    $stmt = $conn->prepare("INSERT INTO user (username, password, email) VALUES (?,?,?)");
    $stmt->bind_param("sss", $user, $pass, $email); 
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    if ($result) {
        echo 'Inserted';
    } else {
        echo 'An error has occured';
    }
?>
