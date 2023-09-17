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

$name = $_POST["name"];
$number = $_POST["number"];
$city = $_POST["city"];
$email =  $_POST["email"];
$cnic = $_POST["cnic"];
$more = $_POST["more"];

$sql = "INSERT INTO `salerinfo`( `Name`, `Mobile Number`, `City`, `Email Address`, `CNIC`, `Other INFO`) 
VALUES ('$name','$number','$city','$email','$cnic','$more')";

$result = mysqli_query($con, $sql);


if($result)
{
   echo"Your Information is Recorted Successfuly.";
}



else{
    echo "some error in DATA...!";
}
?>