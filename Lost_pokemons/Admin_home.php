<?php
 include 'connection.php';
//  session_start();

 if(!isset($_SESSION["username"]))
 {
    header("location:login.php");
 }
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>This the Admin Home </h1><?php  echo $_SESSION["username"]?>
    <br><br>
    <?php
    mysqli_select_db($data,"user");
//here u select the data you want to retrieve from the db
$result = mysqli_query($data, "select * from login;");
$json_response = array();

// fetch data in array format
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    // Fetch data of Fname Column and store in array of row_array
    $row_array['user_id'] = $row['user_id'];
    $row_array['username'] = $row['username'];
    $row_array['password'] = $row['password'];
    $row_array['usertype']= $row['usertype'];


    //push the values in the array
    array_push($json_response, $row_array);
}

echo json_encode($json_response);

?>


    <br> <br>

    <a href="logout.php">Logout</a>
</body>
</html>