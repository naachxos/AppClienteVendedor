<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // Nombre de usuario de MySQL
$password = ""; // Contraseña de MySQL (deja en blanco si no hay contraseña)
$database = "appportafolio"; // Nombre de la base de datos creada

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

/////Consulta obtener los posts db////
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

