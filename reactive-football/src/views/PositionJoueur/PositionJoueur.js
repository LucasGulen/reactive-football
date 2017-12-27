import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { CardColumns, Container, Row, Col, Card, CardHeader, CardBody, Label, Input } from 'reactstrap';

import { getStatsPos } from './../../functions/Joueur';

let pie = {
  labels: [
    'Label',
    'Label',
    'Label'
  ],
  datasets: [{
    data: [0, 0, 0],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

class PositionJoueur extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statistiques: {},
      data: pie,
    };
    getStatsPos()
      .then((res) => {
        this.setState({ statistiques: res.data }, () => {
          this.setPositions(this.state.statistiques.attaquants);
        });
      });

  }

  setPositions(data) {
    let newData = this.state.data;
    for (let i = 0; i < data.length; i++) {
      newData.labels[i] = data[i].joueur.nom;
      newData.datasets[0].data[i] = data[i].score;
    }
    this.setState({ data: newData });
  }

  handleChange(event) {
    const value = event.target.value;
    switch (value) {
      case "attaquants": {
        this.setPositions(this.state.statistiques.attaquants);
        break;
      }
      case "milieux": {
        this.setPositions(this.state.statistiques.milieux);
        break;
      }
      case "defenseurs": {
        this.setPositions(this.state.statistiques.defenseurs);
        break;
      }
      case "gardiens": {
        this.setPositions(this.state.statistiques.gardiens);
        break;
      }
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  Choisir la position
            </CardHeader>
                <CardBody>
                  <Input type="select" onChange={(e) => this.handleChange(e)}>
                    <option value="attaquants">Attaquants</option>
                    <option value="milieux">Milieux</option>
                    <option value="defenseurs">Défenseurs</option>
                    <option value="gardiens">Gardiens</option>
                  </Input>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  Pie Chart
            </CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <Pie data={this.state.data} redraw />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default PositionJoueur;
