<?php

$email = $_POST["Email"];
$pass =  $_POST["Password"];


//database connection

$server = "localhost";
$username = "root";
$password = "";
$dbname = "24hours";

$con = mysqli_connect($server, $username, $password, $dbname);

if($con->connect_error) {
    die("Failed to connect : " .$con->connect_error);
}
else{
    $stmt = $con->prepare("select * from signup where email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0){
        $data = $stmt_result->fetch_assoc();
        if($data["password"] === $pass){
       
            echo"use a different password";
        }
            else{
             
                $sql = "UPDATE `signup` SET `password` = '$pass' WHERE `signup`.`email` = '$email'";
                $iqyery = mysqli_query($con, $sql);
                if($iqyery){
                    echo"password updated";
                }
            }
    }
    else{
        echo"invalid email";
    }
   
   
   
   
    
}
?>