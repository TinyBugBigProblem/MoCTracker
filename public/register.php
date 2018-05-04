<?php
    // Purpose of this file is register user with website

    // Database connection
    $host = "303.itpwebdev.com";
    $user = "narodits_user1";
    $pass = "Cartman#3";
    $db   = "narodits_final_project";

    // // Check username
    if(isset($_GET["user"]) || !empty($_GET["user"])){
        $username = $_GET["user"];
    }
    else{
        echo -1;
    }
    // Check password
    if(isset($_GET["pass"]) || !empty($_GET["pass"])){
        $password = $_GET["pass"];    
    }
    else{
        echo -1;
    }
    // Check email
    if(isset($_GET["email"]) || !empty($_GET["email"])){
        $email = $_GET["email"];    
    }
    else{
        echo -1;
    }
    // If all checks pass then procede to call database
    $mysqli = new mysqli($host, $user, $pass, $db);
    if (mysqli_error($mysqli)){
        // echo "Failed to connect to MySQL: " . mysqli_connect_error();
        echo -1;
        exit();
    }
    $query = "INSERT INTO users(userName, userPass, userEmail)
                VALUES('" . $username  . "', '" . $password . "', '" . $email . "');";
    
    $results = $mysqli->query($query);
    if ($results == false) {
        $mysqli->close();
        echo -1;
        //$mysqli->error;
        //exit(); Don't exit, simply close connection and display error in error div
    }
    $mysqli->close();
    echo 1;

?>