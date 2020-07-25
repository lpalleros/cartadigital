<?php 
include("db.php");

$titulo = $_POST["titulo"];
$descripcion = $_POST["descripcion"];
$idPlato = $_POST["plato"];
$precio = $_POST["precio"];
$consulta = $baseDeDatos->prepare("UPDATE platos
SET titulo='$titulo', descripcion='$descripcion', precio='$precio'
WHERE id_plato=$idPlato");

$consulta->execute();
?>
