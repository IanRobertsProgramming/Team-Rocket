<?php
    $id1 = $_POST['id1'];
    $id2 = $_POST['id2'];
    $id3 = $_POST['id3'];
    $id4 = $_POST['id4'];
    $id5 = $_POST['id5'];
    $id6 = $_POST['id6'];

    $conn = new mysqli("hopper.wlu.ca", "rocket", "Rocket_7", "rocket");

    $stmt = $conn->prepare("SELECT poke_name FROM pokemon WHERE poke_id IN (?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("iiiiii", $id1, $id2, $id3, $id4, $id5, $id6); 
    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
?>