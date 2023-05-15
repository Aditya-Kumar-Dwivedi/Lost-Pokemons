<?php

$host="localhost";
$user="root";
$password="Kumar@123";
$db="user";

session_start();


$data=mysqli_connect($host,$user,$password,$db);

if($data===false)
{
	die("connection error");
}

?>