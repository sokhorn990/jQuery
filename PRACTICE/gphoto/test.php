<?php 
   if(isset($_POST['send'])){
        $fileName=$_FILES['upload_file']['name'];
        $fileLocation=$_FILES['upload_file']['tmp_name'];
        $date=date("Y-m-d-h-s-i"); //store the date after upload picture
        mkdir('picture/'. $date); //create the folder for store picture
        move_uploaded_file($fileLocation, "picture/".$date."/".$date.$fileName);
        echo"<img src='picture/$date/$date$fileName'>";
    }

?>