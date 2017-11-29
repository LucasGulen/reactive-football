<?php
	header('Content-Type: application/json');
	require('./player.php');

	get_all_players();
	
	function get_all_players() {
		
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
		
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM joueur";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
		// output data of each row
			$data = [];
			//$player = new Player(1, "nom", "nationalite", "truc", "clubpays", 1000);
			//echo $player->club; WORKS
			while($row = $result->fetch_assoc()) {
				$data[] = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			}
			echo json_encode($data);	
		}	
	}
?>
