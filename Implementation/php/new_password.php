<?php 

    $ver_code = $_POST['ver_code'];
    $new_pass = $_POST['new_pass'];
    $confirm_pass = $_POST['confirm_pass'];

    $username = 'rocket';
    $password = 'Rocket_7';

    $conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");

    $stmt = $conn->prepare("SELECT * FROM user WHERE password=?");

    $stmt->bind_param("s", $ver_code); 
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if ($user) {
            if ($user['password'] == $ver_code) {
                $stmt = $conn->prepare("UPDATE user SET password=? WHERE password=?");
                $stmt->bind_param("ss", $new_pass, $ver_code);
                $stmt->execute();
                $conn->close();
                echo 'Password successfully changed';
            }
        }
    } else {
        echo 'False';
    }

?>