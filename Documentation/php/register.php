<?php
    $email = $_POST['email'];
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $num = 0;

    $conn = new mysqli("hopper.wlu.ca", "rocket", "Rocket_7", "rocket");

    $stmt = $conn->prepare("INSERT INTO user (username, password, email, numTeams) VALUES (?,?,?,?)");
    $stmt->bind_param("sssi", $user, $pass, $email, $num); 
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    if ($result) {
        echo 'Inserted';
    } else {
        echo 'An error has occured';
    }
?>
