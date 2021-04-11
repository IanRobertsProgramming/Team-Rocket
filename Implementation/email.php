<?php 

if (isset($_POST['submit'])) {
    $to = $_POST['email']; 
    $subject = 'Verification Code';
    $message = 'User has forgotten username/password. Use the link below and the provided verification code to set a new password.';
    $from = "teamrocket@gmail.com";
    $headers = "From:" . $from;

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent";
    }
    else {
        echo "Could not send email";
    }
}

?>