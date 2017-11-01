import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

import './LeftMenu.css';

class LeftMenu extends Component {

  showSettings(event) {
    event.preventDefault();
  }

  render() {
//    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    
    return (
        <Menu>
            <a id="home" className="menu-item" href="/">Accueil</a>
            <a id="about" className="menu-item" href="/equipe">Equipe</a>
            <a id="contact" className="menu-item" href="/matchs">Matchs</a>
            <a id="contact" className="menu-item" href="/statistiques">Statistiques</a>
        </Menu> 
    );
  }
}

export default LeftMenu;