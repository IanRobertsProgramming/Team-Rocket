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

$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Host = "smtp.gmail.com";
$mail->Username = "team2021rocket@gmail.com";
$mail->Password = "Team@rocket2021";

$mail->setFrom('team2021rocket@gmail.com', 'Team Rocket');
$mail->addAddress($to);

$mail->IsHTML(true);
$mail->Subject = "Testing";
$mail->Body = "User has forgotten username/password. Use the link below and the provided verification code to set a new password.";

if ($mail->send()){
    echo 'Email sent.';
} else {
    echo 'Email not sent.';
}
?>