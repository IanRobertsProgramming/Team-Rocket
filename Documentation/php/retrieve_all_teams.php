<?php
    $userID = $_COOKIE['PkmUserID'];

    $conn = new mysqli("hopper.wlu.ca", "rocket", "Rocket_7", "rocket");

    $stmt = $conn->prepare("SELECT t.* FROM teams as t, user_teams as us WHERE us.userID=? AND t.teamsID = us.teamsID ORDER BY t.teamsID");

    $stmt->bind_param("i", $userID); 
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
?>
