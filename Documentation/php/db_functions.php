<?php
    $servername = "hopper.wlu.ca";
    $username = "";
    $password = "";
    $dbname = "rocket";

    function addUser($name, $pass, $email) {
        return "INSERT INTO user values ('', ".$name. ", ".$pass.", ".$email.", 0)";
    }

    function query($sql) {
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
        else echo "Connected successfully";

        if ($conn->query($sql) === TRUE) {
            echo "Insert successfully";
        } else {
            echo "Insertion Error: " . $conn->error;
        }
        $conn->close();
    }


?>

