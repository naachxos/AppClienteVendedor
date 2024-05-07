<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "appportafolio"; 

$conn = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Error en el intento de Conexion..".$conn->connect_error);
}
echo "Conectado!!... Entregando Datos => ";

