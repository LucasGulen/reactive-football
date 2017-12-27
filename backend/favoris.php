<?php
class Favoris
{
    public $id;
	public $attaquant;
	public $milieu;
	public $defenseur;
	public $gardien;
	
	public function __construct($id, $attaquant, $milieu, $defenseur, $gardien) {
        $this->id = $id;
		$this->attaquant = $attaquant;
		$this->milieu = $milieu;
		$this->defenseur = $defenseur;
		$this->gardien = $gardien;
    }
}
?>
