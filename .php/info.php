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

$email = $_POST["email"];
$Fname = $_POST["Fname"];
$Lname = $_POST["Lname"];
$Address =  $_POST["Address"];
$City = $_POST["City"];
$Postalcode = $_POST["PostalCode"];
$Phone =  $_POST["PhoneNumber"];

$sql = "INSERT INTO `userinformation`( `email`, `Fname`, `Lname`, `Address`, `City`, `postalCode`, `PhoneNumber`) 
VALUES ('$email','$Fname','$Lname','$Address','$City','$Postalcode','$Phone')";

$result = mysqli_query($con, $sql);


if($result)
{
    ?>

    <meta http-equiv = 'refresh' content = '0.5; url = http://localhost/project/shipping.html'/>
<?php
}



else{
    echo "some error in DATA...!";
}
?>