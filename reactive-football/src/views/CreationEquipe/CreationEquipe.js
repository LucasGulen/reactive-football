import React, { Component } from 'react';
import axios from 'axios';
import TableJoueurs from './../../components/Tables/TableJoueurs'
import { getJoueursFilter } from './../../functions/Joueur';
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

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
                  <input type="text" onChange={this.handleChange} onKeyPress={(e) => { if (e.key === "Enter") this.update() }} />
                  <button onClick={() => { this.update(); }}>Rechercher</button> <br />
                </Row>
                <Row>
                  {this.state.selectedPlayer.nom ?
                    this.state.selectedPlayer.nom :
                    "Aucun joueur selectionné"}
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
                    {this.state.attaquant.nom ? this.state.attaquant.nom : "Aucun joueur selectionné"}
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
                    {this.state.milieu.nom ? this.state.milieu.nom : "Aucun joueur selectionné"}
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
                  <Col lg="6">{this.state.defenseur.nom ? this.state.defenseur.nom : "Aucun joueur selectionné"}
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
                  <Col lg="6">{this.state.gardien.nom ? this.state.gardien.nom : "Aucun joueur selectionné"}
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

  update() {
    getJoueursFilter(this.state.recherche)
      .then((res) => {
        this.tableJoueurs.populateTable(res.data === "" ? [] : res.data);
      }
      );
  }

}

export default CreationEquipe;
