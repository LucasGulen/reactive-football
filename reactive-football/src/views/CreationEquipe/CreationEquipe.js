import React, { Component } from 'react';
import axios from 'axios';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink} from 'reactstrap';

class CreationEquipe extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="animated fadeIn">
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

        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Nationalité</th>
                    <th>Club</th>
                    <th>Pays club</th>
                  </tr>
                  </thead>
                  <tbody>


                  <tr>
                    <td>Yiorgos Avraamu</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  
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
