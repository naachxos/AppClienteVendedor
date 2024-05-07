<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$database = "appportafolio";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM posts";
$result = $conn->query($sql);

////Resultados////////////////
if ($result->num_rows > 0) {

////Imprimir los datos de cada post de la tabla/////////////
  while($row = $result->fetch_assoc()) {
    echo "Título: " . $row["titulo"]. " - Contenido: " . $row["contenido"]. " - Autor: " . $row["autor"]. "<br>";
  }
} else {
  echo "No se encontraron posts Disponibles.";
}

/////Fin de la Conexion//////////
$conn->close();

