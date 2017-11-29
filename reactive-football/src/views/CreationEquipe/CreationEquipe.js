import React, { Component } from 'react';
import axios from 'axios';

class CreationEquipe extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <button onClick={this.testAjax}>
          Faire un log
        </button>
        Ceci est la view de la CreationEquipe
      </div>
    )
  }

  testAjax() {
    axios.get("http://localhost/players.php")
    .then(function (response) {
      console.log(response);
    });
  }
}

export default CreationEquipe;
