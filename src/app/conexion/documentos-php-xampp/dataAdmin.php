<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'conexion.php';
$query = "select rut_admin, password from administrador";
if($is_query_run = mysqli_query($conn, $query)){
	$userData = [];
	while($query_executed = mysqli_fetch_assoc($is_query_run)){
		$userData[] = $query_executed;
	}
	}
	else {
		echo "Error al Ejecutar!!";
	}
	echo json_encode($userData);
