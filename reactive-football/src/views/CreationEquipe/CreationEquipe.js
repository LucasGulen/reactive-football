import React, { Component } from 'react';
import { Button, Col, Container, Row, Card, CardHeader, CardBody, Table } from 'reactstrap';
import axios from 'axios';

import TableJoueurs from './../../components/Tables/TableJoueurs'
import { getJoueursFilter } from './../../functions/Joueur';

const NO_PLAYER = "Aucun joueur selectionné";

class CreationEquipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recherche: "",
      selectedPlayer: {},
      attaquant: {},
      milieu: {},
      defenseur: {},
      gardien: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.update();
  }

  handleChange(event) {
    this.setState({ recherche: event.target.value });
  }

  update() {
    getJoueursFilter(this.state.recherche)
      .then((res) => {
        this.tableJoueurs.populateTable(res.data === "" ? [] : res.data);
      }
      );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="6" xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Recherche </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="4">
                    <input type="text" onChange={this.handleChange} onKeyPress={(e) => { if (e.key === "Enter") this.update() }} />
                  </Col>
                  <Col lg="3">
                    <button onClick={() => { this.update(); }}>Rechercher</button> <br />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    Joueur selectionné :
                  </Col>
                  <Col lg="7">
                    {this.state.selectedPlayer.nom ?
                      this.state.selectedPlayer.nom :
                      NO_PLAYER}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Equipe </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="3">
                    Attaquant :
                  </Col>
                  <Col lg="6">
                    {this.state.attaquant.nom ? this.state.attaquant.nom : NO_PLAYER}
                  </Col>
                  <Col lg="3">
                    <button onClick={() => {
                      this.setState({ attaquant: this.state.selectedPlayer });
                    }}>Choisir</button>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    Milieu :
                  </Col>
                  <Col lg="6">
                    {this.state.milieu.nom ? this.state.milieu.nom : NO_PLAYER}
                  </Col>
                  <Col lg="3">
                    <button onClick={() => {
                      this.setState({ milieu: this.state.selectedPlayer });
                    }}>Choisir</button>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    Défenseur :
                  </Col>
                  <Col lg="6">{this.state.defenseur.nom ? this.state.defenseur.nom : NO_PLAYER}
                  </Col>
                  <Col lg="3">
                    <button onClick={() => {
                      this.setState({ defenseur: this.state.selectedPlayer });
                    }}>Choisir</button>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    Gardien :
                  </Col>
                  <Col lg="6">{this.state.gardien.nom ? this.state.gardien.nom : NO_PLAYER}
                  </Col>
                  <Col lg="3"><button onClick={() => {
                    this.setState({ gardien: this.state.selectedPlayer });
                  }}>Choisir</button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <TableJoueurs onRef={ref => (this.tableJoueurs = ref)} onClick={(selectedPlayer) => this.setState({ selectedPlayer })} />
      </Container>
    )
  }
}

export default CreationEquipe;
