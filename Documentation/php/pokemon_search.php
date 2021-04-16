<?php
    $type = $_POST['type'];

    $conn = new mysqli("hopper.wlu.ca", "rocket", "Rocket_7", "rocket");


    if ($type === "name") {
        $name = $_POST['data'];

        $stmt = $conn->prepare("SELECT p.poke_id, p.evo_lvl, p.poke_name, TY.type_name, bs.*, l.location_name 
            FROM pokemon AS p, poke_type AS T, types AS TY, base_stats 
            AS bs, location AS l, poke_location AS pl WHERE p.poke_name=? AND p.poke_id = T.poke_id 
            AND T.type_id = TY.type_id AND p.poke_id = bs.poke_id AND p.poke_id = pl.poke_id 
            AND pl.location_id = l.location_id ORDER BY p.poke_name");

        $stmt->bind_param("s", $name); 

    } else {
        $id = $_POST['data'];

        $stmt = $conn->prepare("SELECT p.poke_id, p.evo_lvl, p.poke_name, TY.type_name, bs.*, l.location_name 
            FROM pokemon AS p, poke_type AS T, types AS TY, base_stats 
            AS bs, location AS l, poke_location AS pl WHERE p.poke_id=? AND p.poke_id = T.poke_id 
            AND T.type_id = TY.type_id AND p.poke_id = bs.poke_id AND p.poke_id = pl.poke_id 
            AND pl.location_id = l.location_id ORDER BY p.poke_name");

        $stmt->bind_param("i", $id);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $conn->close();

    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
?>