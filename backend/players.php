<?php
	header('Access-Control-Allow-Origin: *');  
	header('Content-Type: application/json');
	require('./player.php');
		
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "reactive-football";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Problèmes de connexion: " . $conn->connect_error);
	} 

	if (isset($_GET['joueurs'])) {
		get_players_filter();
	} else {
		get_all_players();
	}

	function get_players_filter() {
		global $conn;
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM joueur WHERE jou_nom LIKE '%$_GET[joueurs]%' ";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
		// output data of each row
			$data = [];
			while($row = $result->fetch_assoc()) {
				$data[] = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			}
			echo json_encode($data);	
		}	
	}
	
	function get_all_players() {
		global $conn;
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM joueur";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
		// output data of each row
			$data = [];
			while($row = $result->fetch_assoc()) {
				$data[] = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			}
			echo json_encode($data);	
		}	
	}
?>
