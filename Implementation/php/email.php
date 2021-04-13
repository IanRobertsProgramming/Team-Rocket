<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require_once __DIR__ . '/PHPMailer-master/src/Exception.php';
    require_once __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer-master/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->isSMTP();

    $to = $_POST['email'];
    $ver_code = rand(00000000, 99999999);
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "tls";
    $mail->Port = 587;
    $mail->Host = "smtp.gmail.com";
    $mail->Username = "team2021rocket@gmail.com";
    $mail->Password = "Team@rocket2021";

    $mail->setFrom('team2021rocket@gmail.com', 'Team Rocket');
    $mail->addAddress($to);

    $mail->IsHTML(true);
    $mail->Subject = "Forgot Username/Password";
    $mail->Body = 'User has forgotten username/password. Use the provided verification code to set a new password.' . "<br>" . 'Verification Code: ' . $ver_code;

    if ($mail->send()){
        //$username = 'rocket';
        //$password = 'Rocket_7';
        //$conn = new mysqli("hopper.wlu.ca", $username, $password, "rocket");
        //$stmt = $conn->prepare("INSERT INTO user (password) VALUES (?) WHERE email=?");
        //$stmt->bind_param("ss", $ver_code, $to);
        //$stmt->execute();
        //$conn->close();
        echo 'Email sent.';
    } else {
        echo 'Email not sent.';
    }
?>