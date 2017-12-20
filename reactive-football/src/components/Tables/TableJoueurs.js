import React, {Component} from 'react';

import {
  Badge,
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
      this.state = {
        joueurs: []
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

  render() {
    return (
      <div className="animated fadeIn">
          <Row>
          <Col xs="12" lg="12">
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
                  <tr key={row.id}>
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
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TableJoueurs;
