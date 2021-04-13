<?php
    $type = $_POST['type'];

    $conn = new mysqli("hopper.wlu.ca", "", "", "rocket");


    if ($type === "name") {
        $name = $_POST['name'];

        $stmt = $conn->prepare("SELECT * FROM pokemon WHERE poke_name=?");
        $stmt->bind_param("s", $name); 

    } else {
        $id = $_POST['id'];

        $stmt = $conn->prepare("SELECT * FROM pokemon WHERE poke_id=?");
        $stmt->bind_param("i", $id);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    echo 

?>