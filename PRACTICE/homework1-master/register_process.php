<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Register Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">    
    <link rel="stylesheet" href="css/register.css">
</head>
<body>
<?php
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        if($username == "" && $password == "" && $email == "" && $message == "") {
            ?>
            <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Fields Cannot Empty!</strong> You should fill in all the fields.
                        </div> 
                        <form action="register_form.php">
                            <input type="submit" value="Back to register" class="btn btn-primary form-control" name="back">
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
                    <div class="col-2"></div>
                    <div class="col-8">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Register Success!!!</strong> Congratulation you can use the application.
                        </div> 
                        <form action="index.php">
                            <input type="submit" value="Log Out" class="btn btn-primary form-control" name="back">
                        </form>
                    </div>
                    <div class="col-2"></div>
                </div>

                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <ul class="list-group">
                            <li class="list-group-item"><b>Username: </b><?php echo $username; ?></li>
                            <li class="list-group-item"><b>Password: </b><?php echo $password; ?></li>
                            <li class="list-group-item"><b>email: </b><?php echo $email; ?></li>
                            <li class="list-group-item"><b>Message: </b><?php echo $message; ?></li>
                        </ul>
                    </div>
                    
                    <div class="col-2"></div>
                </div>
            </div>
            <?php
        }
    }else{
        header("Location: http://localhost:8080/2020/WEP-A/homework1/");
        die();
    }
?>
</body>