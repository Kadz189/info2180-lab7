<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';



$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$country = $_GET['country'];
$All = $_GET['all'];

//print_r($_GET);

if ($All == "true"){
    $stmt = $conn->query("SELECT * from countries");
} else {
    $stmt = $conn->query("SELECT * from countries where name = '$country'");
}



$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li><br>';
}
echo '</ul>';
