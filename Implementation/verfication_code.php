<?php 

    $ver_code = $_POST['ver_code'];

    $username = 'rocket';
    $password = 'Rocket_7';

    $conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");

    $stmt = $conn->prepare("SELECT * FROM user WHERE password=?");

    $stmt->bind_param("s", $ver_code); 
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $conn->close();

    if ($result->num_rows > 0) {
        sessionStorage.setItem("key", $ver_code);
        echo 'True';
    } else {
        echo 'False';
    }

?>