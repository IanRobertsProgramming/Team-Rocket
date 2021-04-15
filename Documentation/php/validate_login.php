<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $username = 'rocket';
    $password = 'Rocket_7';

    // $dbh = new PDO('mysql:host=hopper.wlu.ca;dbname=rocket', $username, $password);

    // $stmt = "SELECT * FROM user WHERE username=? AND password=?";

    // $sth = $dbh->prepare($stmt);
    // $sth->execute(array($user, $pass));
    // $count = $sth->rowCount();
    // $sth = null;
    // $dbh = null;

    // if ($count > 0) {
    //     $cookie_name = "PkmUserID";
    //     $cookie_value = $row["userID"];
    //     setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

    //     echo 'True';
    // } else {
    //     echo 'False';
    // }

    $conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");

    $stmt = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");

    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $conn->close();


    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $cookie_name = "PkmUserID";
        $cookie_value = $row["userID"];
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

        echo 'True';
    } else {
        echo 'False';
    }
?>
