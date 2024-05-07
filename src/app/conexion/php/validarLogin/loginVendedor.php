// Para el CRUD de vendedor (vendedor.php)

<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$database = "appportafolio"; 


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$rut = $request->rut;
$password = $request->password;


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


function loginVendedor($rut, $password) {
    global $conn;
    $sql = "SELECT * FROM vendedor WHERE rut = '$rut' AND password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        return true; 
    } else {
        return false; 
    }
}

?>

