import React, { Component } from 'react';

import {
  Badge,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import axios from 'axios';

class TableJoueurs extends Component {

  constructor(props) {
    super(props);
    const data = props.joueurs == null ? [] : props.joueurs;
    this.state = {
      joueurs: data
    };
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  populateTable(joueurs) {
    this.setState({ joueurs });
  }

  selectPlayer(row) {
    if (this.props.onClick) {
      this.props.onClick(row);
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" lg="12" style={{padding : 0}}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Joueurs
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Nom du joueur</th>
                      <th>Nationalité</th>
                      <th>Club</th>
                      <th>Pays du club</th>
                    </tr>
                  </thead>
                  <tbody >
                    {this.state.joueurs.map((row) => (
                      <tr key={row.id} data-item={row} onClick={() => this.selectPlayer(row)} style={{ cursor: 'pointer' }}>
                        <td>{row.nom}</td>
                        <td >{row.nationalite}</td>
                        <td>{row.club}</td>
                        <td>{row.pays_club}</td>
                        <td>
                          <Badge color="success">{row.Classement}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TableJoueurs;
