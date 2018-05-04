<?php
    // Purpose of this file is to parse through all csv data gathered from congress.org
    function csvParser($file){
        $csv = file_get_contents($file);

        $arr = array_map('str_getcsv', preg_split('/\r*\n+|\r+/', $csv));
        return $arr;
    }

    // Database connection
    $host = "303.itpwebdev.com";
    $user = "narodits_user1";
    $pass = "Cartman#3";
    $db   = "narodits_final_project";

    $mysqli = new mysqli($host, $user, $pass, $db);
    if (mysqli_error($mysqli)){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    $results = false;

    // Files to read
    $legCSV = ".\csvFiles\leg.csv";
    $mocCSV = ".\csvFiles\reps.csv";

    // Headers
    // Legislation Number,	URL	Congress,	Amends Bill,	Title
    // ,	Sponsor	Date of Introduction,	Date Offered,	Date Submitted,	Date Proposed,	
    // Number of Cosponsors,	Committees,	Latest Action, Date	Latest Actio,
    // Delimiter

    $arr = csvParser($legCSV);
    foreach($arr as $row){
        print_r($row);
        if(empty($row[0])){
            $name = "NULL";
        }
        else{
            $name = "'" . str_replace("'", "", $row[0]) . "'";
        }
        if(empty($row[2])){
            $congress = "NULL";
        }
        else{
            $congress = "'" . str_replace("'", "", $row[2]) . "'";
        }
        if(empty($row[3])){
            $ammends = "NULL";
        }
        else{
            $ammends = "'" . str_replace("'", "", $row[3]) . "'";
        }
        if(empty($row[4])){
            $title = "NULL";
        }
        else{
            $title = "'" . str_replace("'", "", $row[4]) . "'";
        }
        if(empty($row[5])){
            $sponsors = "NULL";
        }
        else{
            $sponsors = "'" . str_replace("'", "", $row[5]) . "'";
        }
        if(empty($row[6])){
            $introduced = "NULL";
        }
        else{
            $introduced = "'" . str_replace("'", "", $row[6]) . "'";
        }
        if(empty($row[7])){
            $offered = "NULL";
        }
        else{
            $offered = "'" . str_replace("'", "", $row[7]) . "'";
        }
        if(empty($row[8])){
            $submitted = "NULL";
        }
        else{
            $submitted = "'" . str_replace("'", "", $row[8]) . "'";
        }
        if(empty($row[9])){
            $proposed = "NULL";
        }
        else{
            $proposed = "'" . str_replace("'", "", $row[9]) . "'";
        }
        if(empty($row[10])){
            $cosponsors = "NULL";
        }
        else{
            $cosponsors = "'" . str_replace("'", "", $row[10]) . "'";;
        }
        if(empty($row[11])){
            $committees = "NULL";
        }
        else{
            $committees = "'" . str_replace("'", "", $row[11]) . "'";
        }
        if(empty($row[12])){
            $latest_action_date = "NULL";
        }
        else{
            $latest_action_date = "'" . str_replace("'", "", $row[12]) . "'";;
        }
        if(empty($row[13])){
            $latest_action = "NULL";
        }
        else{
            $latest_action = "'" . str_replace("'", "", $row[13]) . "'";;
        }

        $legSQL = "INSERT INTO legislation(legislative_name, congress_ID, ammends_bill, legislative_title,
                                          legislation_sponsors, legislation_introduced, legislation_offered,
                                          legislation_submitted, legislation_proposed, legislation_cosponsored, 
                                          legislation_committees, legislation_latest_action_date, 
                                          legislation_latest_action)
                      VALUES(" . $name  . ", " . 1 . ", " . $ammends  . ", " . $title . ", " . $sponsors .  ", 
                           " . $introduced  . ", " . $offered  . ", " . $submitted  . ", " . $proposed . ", " . $cosponsors . ",
                           " . $committees . ", " . $latest_action_date . ", " . $latest_action . ");";

        echo "\n" . $legSQL;
        $results = $mysqli->query($legSQL);
        if ($results == false) {
            echo $mysqli->error;
;
            break;
        }
    }
    // echo ($legJSON[0]);

    // $legSQL = "INSERT INTO legislation(legislative_name, congress_ID, ammends_bill, legislative_title,
    //                                    legislation_sponsors, legislation_introduced, legislation_offered,
    //                                    legislation_submitted, legislation_cosponsored, 
    //                                    legislation_committees, legislation_latest_action_date, 
    //                                    legislation_latest_action)
    //             VALUES(" . $name . ", " . $congress . ", " . $ammends . ", " . $title . ", " . $cosponsors", 
    //                    " . $introduced . ", " . $offered . ", " . $submitted . ", " . $cosponsored
    //                      . ", " . $committees . ", " . $latest_date . ", " . $latest_action");";
    // echo $sql;
    // $results = $mysqli->query($sql);

    if ($results == false) {
        $error = "Could not add information to database";
        $mysqli->error;
        exit();
    }
// Close connection
    // $mysqli->close();

?>