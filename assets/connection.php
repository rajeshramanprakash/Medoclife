<?php

$servername="localhost";
$username="root";
$password="";
$dbname="medoclife";


$fun = mysqli_connect($servername,$username,$password,$dbname);
if ($fun){
    echo "Connection ok";
}
?>