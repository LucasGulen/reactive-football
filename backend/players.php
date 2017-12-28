<?php
	header('Access-Control-Allow-Origin: *');  
	header('Content-Type: application/json');
	require('./player.php');
	require('./favoris.php');
	require('./top.php');
	require('./statistiques.php');
	require('./statistiquesAll.php');
	require('./club.php');
		
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "reactive-football";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Probl�mes de connexion: " . $conn->connect_error);
	} 

	if (isset($_GET['joueurs'])) {
		get_players_filter();
	} else if (isset($_GET['favoris'])){
		get_favourite_players();
	} else if (isset($_GET['nbUsers'])){
		get_nbUsers();
	}else if (isset($_GET['login'], $_GET['password'])) {
		get_User();
	}else if (isset($_GET['statistiques_all'])){
		get_statistiques_all();
	}else if (isset($_GET['statistiques_club'])){
		get_statistiques_club();
	} else if (isset($_GET['statistiques_pos'])){
		get_statistiques_position();
	} else if (isset($_POST['id_utilisateur'])) {
		insert_favourites();
	} else {
		get_all_players();
	}
	
	function get_User () {
		global $conn;
	}
	
	function get_nbUsers(){
		global $conn;
		$sql="SELECT count(*) as nbUsers FROM `favoris`";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		echo json_encode($row);
	}
	
	function get_statistiques_club(){
		global $conn;
		$sql = "  SELECT   T.jou_club, T.jou_pays_club, sum(T.Choix)as NbApparition from (
		
					(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_attaquant = j.jou_id
						GROUP BY j.jou_club ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_milieu = j.jou_id
						GROUP BY j.jou_club ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_defenseur = j.jou_id
						GROUP BY j.jou_club ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_gardien = j.jou_id
						GROUP BY j.jou_club ORDER BY Choix)
						
						) as T
						GROUP BY T.jou_club
						ORDER BY NbApparition DESC
						LIMIT 5";
		$result = $conn->query($sql);
		$podium = [];
		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()){
				$club = new Club($row["jou_club"], $row["jou_pays_club"]);
				$top = new Top(1, $row["NbApparition"], $club);
				$podium[] = $top;
			}
			$stats = new StatistiquesAll($podium);
			echo json_encode($stats);
		}
	}
	
	function get_statistiques_all () {
		global $conn;
		$sql = "  SELECT T.jou_id,T.jou_nom,T.jou_nationalite, T.jou_club,T.jou_pays_club, T.jou_score, sum(T.Choix)as NbApparition from (
		
					(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_attaquant = j.jou_id
						GROUP BY j.jou_id ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_milieu = j.jou_id
						GROUP BY j.jou_id ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_defenseur = j.jou_id
						GROUP BY j.jou_id ORDER BY Choix)
					UNION all
						(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
						FROM favoris f 
						JOIN joueur j on f.fav_gardien = j.jou_id
						GROUP BY j.jou_id ORDER BY Choix)
						
						) as T
						GROUP BY T.jou_id,T.jou_nom
						ORDER BY NbApparition DESC
						LIMIT 3;";
		$result = $conn->query($sql);
		$podium = [];
		if ($result->num_rows > 0) {

			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(1, $row["NbApparition"], $player);
			$podium[] = $top;
			
			$row = $result->fetch_assoc();			
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(2, $row["NbApparition"], $player);
			$podium[] = $top;
			
			$row = $result->fetch_assoc();			
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(3, $row["NbApparition"], $player);
			$podium[] = $top;
			
			$stats = new StatistiquesAll($podium);
			echo json_encode($stats);
		}

	}
	
	function get_statistiques_position() {
		global $conn;
		$sql = "	(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
					FROM favoris f 
					JOIN joueur j on f.fav_attaquant = j.jou_id
					GROUP BY f.fav_attaquant ORDER BY Choix DESC LIMIT 3)
				UNION all
					(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
					FROM favoris f 
					JOIN joueur j on f.fav_milieu = j.jou_id
					GROUP BY f.fav_milieu ORDER BY Choix DESC LIMIT 3)
				UNION all
					(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
					FROM favoris f 
					JOIN joueur j on f.fav_defenseur = j.jou_id
					GROUP BY f.fav_defenseur ORDER BY Choix DESC LIMIT 3)
				UNION all
					(SELECT COUNT(*) as Choix, j.jou_id, j.jou_nom, j.jou_nationalite, j.jou_club, j.jou_pays_club, j.jou_score 
					FROM favoris f 
					JOIN joueur j on f.fav_gardien = j.jou_id
					GROUP BY f.fav_gardien ORDER BY Choix DESC LIMIT 3) ";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
		// output data of each row
		
			// Attaquants
			$attaquants = [];
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(1, $row["Choix"], $player);
			$attaquants[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(2, $row["Choix"], $player);
			$attaquants[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(3, $row["Choix"], $player);
			$attaquants[] = $top;
			
			// milieux
			$milieux = [];
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(1, $row["Choix"], $player);
			$milieux[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(2, $row["Choix"], $player);
			$milieux[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(3, $row["Choix"], $player);
			$milieux[] = $top;
			
			// defenseurs
			$defenseurs = [];
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(1, $row["Choix"], $player);
			$defenseurs[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(2, $row["Choix"], $player);
			$defenseurs[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(3, $row["Choix"], $player);
			$defenseurs[] = $top;
			
			// gardiens
			$gardiens = [];
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(1, $row["Choix"], $player);
			$gardiens[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(2, $row["Choix"], $player);
			$gardiens[] = $top;
			
			$row = $result->fetch_assoc();
			$player = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$top = new Top(3, $row["Choix"], $player);
			$gardiens[] = $top;

			$data = new Statistiques($attaquants, $milieux, $defenseurs, $gardiens);
			
			echo json_encode($data);	
		}
	}
	
	function insert_favourites() {
		global $conn;
		$id_utilisateur = $_POST['id_utilisateur'];
		$id_attaquant = $_POST['id_attaquant'];
		$id_milieu = $_POST['id_milieu'];
		$id_defenseur = $_POST['id_defenseur'];
		$id_gardien = $_POST['id_gardien'];
		
		$sql = "UPDATE favoris SET fav_attaquant=$id_attaquant, fav_milieu=$id_milieu, fav_defenseur=$id_defenseur,fav_gardien=$id_gardien WHERE fav_id = $id_utilisateur";
		$result = $conn->query($sql);
		
		if ($conn->query($sql) === TRUE) {
			echo "Record updated successfully";
		} else {
			echo "Error updating record: " . $conn->error;
		}
	}
	
	function get_favourite_players() {
		global $conn;
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM `favoris` f
				JOIN joueur j ON f.fav_attaquant = j.jou_id
				UNION ALL
				SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM `favoris` f
				JOIN joueur j ON f.fav_milieu = j.jou_id
				UNION ALL
				SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM `favoris` f
				JOIN joueur j ON f.fav_defenseur = j.jou_id
				UNION ALL
				SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM `favoris` f
				JOIN joueur j ON f.fav_gardien = j.jou_id
				WHERE fav_id = 1 ";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
		// output data of each row
			$row = $result->fetch_assoc();
			$attaquant = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$row = $result->fetch_assoc();
			$milieu = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$row = $result->fetch_assoc();
			$defenseur = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$row = $result->fetch_assoc();
			$gardien = new Player($row["jou_id"], $row["jou_nom"], $row["jou_nationalite"], $row["jou_club"], $row["jou_pays_club"], $row["jou_score"]);
			$data = new Favoris(1, $attaquant, $milieu, $defenseur, $gardien);
			echo json_encode($data);	
		}	
	}

	function get_players_filter() {
		global $conn;
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM joueur WHERE jou_nom LIKE '%$_GET[joueurs]%' AND jou_id != 0";
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
		$sql = "SELECT jou_id, jou_nom, jou_nationalite, jou_club, jou_pays_club, jou_score FROM joueur WHERE jou_id != 0";
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
