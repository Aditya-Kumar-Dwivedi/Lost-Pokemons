<?php

include 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // echo 'Hello';
    $name = mysqli_real_escape_string($data,$_POST["username"]);
    $password = mysqli_real_escape_string($data,$_POST["password"]);
    $cpassword= mysqli_real_escape_string($data,$_POST["cpassword"]);
    
    $select="SELECT * FROM login WHERE username='$name' && password='$password'";
    $query = mysqli_query($data,$select);

    if(mysqli_num_rows($query)>0)
    { 
      echo '<script>alert("User Already Exists")</script>';
    //   header("location : logi.php"); 
    }
    else
    {
        if($password!=$cpassword)
        {$error[]="password does not match";}
        else
        {
         $insert = "INSERT INTO login(username,password) values('$name','$password')";
         mysqli_query($data,$insert);
        //  header("location : login.php"); 
        }
    }
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
    <div id="form" >
<h1>Login Form</h1>
	<br><br><br><br>
	<div style="background-color: grey; width: 500px;">
		<br><br>


		<form action="login.php" method="POST">

	<div>
		<label>username</label>
		<input type="text" name="username" placeholder="Aadi" required>
	</div>
	<br><br>

	<div>
		<label>password</label>
		<input type="password" name="password" required>
	</div>
	<br><br>

	<div>
		
		<input type="submit" value="Login">
	</div>

	</form>
	<br><br>

    <div>
        <label > Don't have an account </label>
        <a href="registration.php">Register</a>
    </div>
</div>
<div>
</body>
</html>