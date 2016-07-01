<?php

require "connection.php";

header('Access-Control-Allow-Origin: *');

if($connection->connect_error)
{
    echo $connection->connect_error;
}

$method = $_SERVER['REQUEST_METHOD'];
$accept = $_SERVER['HTTP_ACCEPT'];
$data = array();
$offsetData = array();
$result = "";

switch($method)
{
    case "POST":
        
            /*if(checkPost())
            {*/
                http_response_code(201);

                $date = date("Y-m-d");

                $connection->query("INSERT INTO avoider(nickname, score, date)
                                VALUES('".$_POST['nickname']."',".$_POST['score'].",CAST('".$date."' AS DATE))");
                
        echo $date;
        
        if($connection->affected_rows > 0)
                {
                    echo json_encode(["succes"=> true]);
                }
                else
                    http_response_code(400);
            /*}
            else
            {
                http_response_code(400);
            }*/

        break;
    case "GET":

        if(isset($_GET['name']) && !empty($_GET['name']))
        {
            $result = $connection->query("SELECT * FROM avoider WHERE nickname='".$_GET['name']."' ORDER BY score DESC");
            echo $connection->error;
        }

            
        else if(isset($_GET['nicknames']))
            $result = $connection->query("SELECT DISTINCT nickname FROM avoider");
            
        else
            $result = $connection->query("SELECT * FROM avoider ORDER BY score DESC");

        while ($score = $result->fetch_assoc())
        {
            $data[] = $score;
        }


        header("Content-type: application/json");
        echo json_encode($data);

        break;
}

/*function checkPost()
{
    echo $_POST['score'];
    
    if(!isset($_POST['nickname']) || !isset($_POST['score']))
        return false;
    elseif(empty($_POST['nickname']) || empty($_POST['score']))
        return false;
    
    return true;
}*/