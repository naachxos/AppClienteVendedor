
<?php
//////////////////////Conexion///////////////////////////////////
$servername = "localhost";
$username = "root"; // Nombre de usuario de MySQL (root por lo general por el equipo)
$password = ""; // Contraseña de la DB MySQL (Sin Contraseña queda en blanco)
$database = "appportafolio"; // Nombre de la base de datos creada
//////////////////////Conexion///////////////////////////////////

///////////////////////Generamos la Conexion////////////////////////////
$conn = new mysqli($servername, $username, $password, $database);
///////////////////////Generamos la Conexion////////////////////////////

///////////////////////Generamos la Consulta para obtener los datos///////////////////////////


if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL 
$sql = "SELECT * FROM productos";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "Nombre del Producto: " . $row["nombre_producto"]. " - Descripción: " . $row["descripcion"]. " - Precio: " . $row["precio"]. "<br>";
  }
} else {
  echo "No se encontraron productos en la bodega.";
}

$conn->close();

