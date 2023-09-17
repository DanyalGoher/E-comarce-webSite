<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "24hours";

$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con)
{
    echo "not connected";
}

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$pass =  $_POST["password"];

$sql = "INSERT INTO `signup`( `fname`, `lname`, `email`, `password`) 
VALUES ('$fname','$lname','$email','$pass')";

$result = mysqli_query($con, $sql);


if($result)
{
    echo "Acount Registered.";

}
else{
    echo "Acount not registered succesfully....!";
}
?>