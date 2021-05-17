<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=annotation_tool", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully";
  
  $sql = "SELECT * FROM LABEL";
  $rows = array();

    $query = $conn->query($sql) or die("failed!");
while ($row = $query->fetch(PDO::FETCH_ASSOC)){
    // echo $row;
    $rows[] = $row;
}
// echo $rows;

// $data = /** whatever you're serializing **/;
header('Content-Type: application/json');
echo json_encode($rows);

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
