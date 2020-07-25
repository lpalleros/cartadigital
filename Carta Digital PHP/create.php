<?php 
//CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: OPTIONS, HEAD, GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: Application/json");

include("db.php");
//Variables tomadas de la URL enviados por método POST

$titulo = $_POST["titulo"];
$descripcion = $_POST["descripcion"];
$precio = number_format($_POST["precio"]);
$valor = number_format($_POST["id"]);

// Consulta SQL para el insert
$consulta = $baseDeDatos->prepare("INSERT into platos values (default,1,'','',0,null)");

//Último paso para ejecutar la consulta SQL
$consulta->execute();
?>