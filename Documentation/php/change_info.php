<?php
    $userID = $_COOKIE['PkmUserID'];
    $new_info = $_POST['new_info'];
    $change = $_POST['change']

    $username = 'rocket';
    $password = 'Rocket_7';

    $conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");

    if($change == 1){
        $stmt = $conn->prepare("UPDATE user SET username=? WHERE userID=?"); #update the user's info
        $stmt->bind_param("ss", $new_info, $userID);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        echo 'True';
    }
    else if($change == 2){
        $stmt = $conn->prepare("UPDATE user SET email=? WHERE userID=?"); #update the user's info
        $stmt->bind_param("ss", $new_info, $userID);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        echo 'True';
    else {
        echo 'False';
    }
?>
