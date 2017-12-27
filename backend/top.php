<?php
class Top
{
	public $position;
	public $score;
	public $joueur;
	
	public function __construct($position, $score, $joueur) {
		$this->position = $position;
		$this->score = $score;
		$this->joueur = $joueur;
    }
}
?>
