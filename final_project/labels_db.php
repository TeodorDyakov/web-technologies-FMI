<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=annotation_tool", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  header('Content-Type: application/json');

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $imgId = $_GET["imgId"];
    $sql = "SELECT * FROM LABEL WHERE imgId = '" . $imgId . "'";
    $rows = array();

    $query = $conn->query($sql) or die("failed!");
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
      $rows[] = $row;
    }
    echo json_encode($rows);
  } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = json_decode(file_get_contents('php://input'), true);
    
    $imgId = $data["imgId"];
    $x = $data["X"];
    $y = $data["Y"];
    $label_text = $data["label"];
    // echo $imgId;

    $sql = "INSERT INTO label (id, text, x, y, imgId) 
    VALUES (NULL, '{$label_text}', '{$x}', '{$y}', '{$imgId}')";
    echo $sql;
    $query = $conn->query($sql) or die("failed!");
  }
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
