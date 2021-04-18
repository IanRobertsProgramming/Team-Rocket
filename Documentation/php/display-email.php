<?php
    $userID = $_COOKIE['PkmUserID'];

    $username = 'rocket';
    $password = 'Rocket_7';

    $conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }


    $sql = "SELECT email FROM user WHERE userID=?";
    $stmt->bind_param("s", $userID);
    $result = $conn->query($sql);
    echo $result

    $conn->close();

?>
