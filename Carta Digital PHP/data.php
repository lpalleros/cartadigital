<?php 
include_once("db.php");

    $consulta = $baseDeDatos->prepare('SELECT * FROM platos');
    $consulta->execute();
    $platos = $consulta->fetchAll(PDO::FETCH_ASSOC);

?>
