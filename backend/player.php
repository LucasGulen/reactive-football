<?php
class Player
{
    public $id;
	public $nom;
	public $nationalite;
	public $club;
	public $pays_club;
	public $score;
	
	public function __construct($id, $nom, $nationalite, $club, $pays_club, $score) {
        $this->id = $id;
		$this->nom = $nom;
		$this->nationalite = $nationalite;
		$this->club = $club;
		$this->pays_club = $pays_club;
		$this->score = $score;
    }
}
?>
