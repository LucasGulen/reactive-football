import React, { Component } from 'react';
import {Card, CardHeader, CardBody, Button} from 'reactstrap';
import axios from 'axios';

class CreationEquipe extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <button onClick={this.testAjax}>
          Faire un log
        </button>
        <Card>
          <CardHeader>
            Positions  
          </CardHeader>
          <CardBody>
            <div>Attaquant</div>
            <Button outline color="primary">Cristiano Ronaldo</Button>{' '}
            <div>Défenseur</div>
            <Button outline color="success">Luisão</Button>{' '}
            <div>Gardien</div>
            <Button outline color="warning">Iker Casillas</Button>{' '}
          </CardBody>
        </Card>
      </div>
    )
  }

  testAjax() {
    axios.get("http://localhost/players.php")
    .then(function (response) {
      console.log(response.data);
    });
  }
}

export default CreationEquipe;
