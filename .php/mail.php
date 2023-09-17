<?php

$email = $_POST["email"];

$to_email = "$email";
$subject = "24hours Order Verification";
$body = "Hi, Dear Customer you Place An order on 24hours.pk we want you to confirm the ORDER to conferm the order click on following link:  http://127.0.0.1:5500/final.html ";
$headers = "From: 24hours";

if (mail($to_email, $subject, $body, $headers)) {

    echo "you recived a verification mail on $email please check you inbox";
} else {
    echo "Email sending failed...";
}

?>