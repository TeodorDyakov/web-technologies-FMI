<?php
 $config = parse_ini_file('config/config.ini', true);

 $host = $config['db']['host'];
 $username = $config['db']['user'];
 $password = $config['db']['password'];

try {
  //create the connection to db
  $conn = new PDO("mysql:host=$host;dbname=annotation_tool", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  //set the content-type for http response
  header('Content-Type: application/json');

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    //if get request, return all labels of the image with the given id
    //the imgId is a request paramemer from a GET request
    $imgId = $_GET["imgId"];
    // $imgId = basename($imgId);

    $sql = "SELECT * FROM LABEL WHERE imgId = '" . $imgId . "'";
    $rows = array();

    $query = $conn->query($sql) or die("failed!");
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
      $rows[] = $row;
    }
    //print the labels as a json
    echo json_encode($rows);
  } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $imgId = $data["imgId"];
    // $imgId = basename($imgId);

    $x = $data["X"];
    $y = $data["Y"];
    $label_text = $data["label"];


    $check_if_exists = "SELECT * FROM image WHERE imgId = '" . $imgId . "'";

    $rows = array();
    $query = $conn->query($check_if_exists) or die("failed!");
    $row = $query->fetch(PDO::FETCH_ASSOC);

    if (!$row) {
      $sql = "INSERT INTO image (imgId) VALUES ('{$imgId}')";
      $query = $conn->query($sql) or die("failed!");
    }

    $sql = "INSERT INTO label (id, text, x, y, imgId) 
    VALUES (NULL, '{$label_text}', '{$x}', '{$y}', '{$imgId}')";

    $query = $conn->query($sql) or die("failed!");
  }
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
