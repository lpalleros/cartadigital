<?php 
include("db.php");

$idPlato = $_POST["plato"];
$consulta = $baseDeDatos->prepare("DELETE FROM platos WHERE id_plato=$idPlato");

$consulta->execute();
?>