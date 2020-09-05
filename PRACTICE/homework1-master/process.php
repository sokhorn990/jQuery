<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Homework 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">    
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php 
    if(isset($_POST['login'])) {
        $username​​ ​= $_POST['username'];
        $password​= $_POST['password'];
        if($username == "" && $password == ""){
    ?>  
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
               <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Fields Cannot Empty!</strong> You should fill in all the fields.
                </div> 
                <form action="index.php">
                    <input type="submit" value="Go Back" class="btn btn-primary form-control" name="back">
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
        }elseif($username === "admin" && $password ==="password"){
            ?>
            <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Login Success!!!</strong> Congratulation you have done a great job.
                        </div> 
                        <form action="index.php">
                            <input type="submit" value="Log Out" class="btn btn-primary form-control" name="back">
                        </form>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
            <?php
        }else{
           ?>
           <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>You don't have account yet!!!</strong> Please register.
                        </div> 
                        <form action="register_form.php">
                            <input type="submit" value="Register" class="btn btn-primary form-control" name="back">
                        </form>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
           <?php 
        }
    }else{
        header("Location: http://localhost:8080/2020/WEP-A/homework1/register_form.php");
        die();
    }
    ?>
<body>
