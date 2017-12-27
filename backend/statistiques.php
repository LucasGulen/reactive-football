<?php
class Statistiques
{
	public $attaquants;
	public $milieux;
	public $defenseurs;
	public $gardiens;
	// doit recevoir que des tableaux
	public function __construct($attaquants, $milieux, $defenseurs, $gardiens) {
			$this->attaquants = $attaquants;
			$this->milieux = $milieux;
			$this->defenseurs = $defenseurs;
			$this->gardiens = $gardiens;
		
    }
}
?>
