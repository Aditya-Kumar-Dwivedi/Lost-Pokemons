<?php

include 'connection.php';

if (isset($_POST["register"])){
    echo 'Hello';
    $name = mysqli_real_escape_string($data,$_POST["username"]);
    $password = md5($data,$_POST["password"]);
    $cpassword= md5($data,$_POST["cpassword"]);
    
    $select="SELECT * FROM login WHERE username='$name' && password='$password'";
    $query = mysqli_query($data,$select);

    if(my_sqli_num_rows($query)>0)
    {
        $error[]="user already exists";
    }
    else
    {
        if($password!=$cpassword)
        {$error[]="password does not match";}
        else
        {
         $insert = "INSERT INTO login(username,password) values('$name','$password')";
         mysqli_query($data,$insert);
         header("location : login.php"); 
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
    <h1>Registration form</h1>

    <?php

     if(isset($error))
      {
        foreach ($error as $error) 
        echo $error;
      }
    ?>
   <div style="background-color: grey; width: 500px; padding:10px">
    <form action="register.php" id="registration-form" method="POST">

      <label >User-Name</label>
      <input type="text" name="username" required>
      <br><br>

      <label?> Password </label>
      <input type="password" name="password" required>
      <br><br>
      <label?>Comfirm Your Password </label>
      <input type="cpassword" name="cpassword" required>
      <br><br>
      <input type="submit" value ="register">
    </form>

   </div>

</body>
</html>