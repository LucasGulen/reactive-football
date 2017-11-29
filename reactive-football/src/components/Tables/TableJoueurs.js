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


const joueurs=[
  { Photo: '',Nom: 'Ronaldo',Age:'19 ans',Equipe:'Pourtogal',Classement:'4/5'},
  { Photo: '',Nom: 'Ronaldo',Age:'19 ans',Equipe:'Pourtogal',Classement:'4/5'},
  { Photo: '',Nom: 'Ronaldo',Age:'19 ans',Equipe:'Pourtogal',Classement:'4/5'}
];

class TableJoueurs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search by names" title="Type in a name"/>        
          <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBody>
                <Table responsive striped >
                  <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Nom du Joueur</th>
                    <th>Age</th>
                    <th>Equipe</th>
                    <th>Classement</th>
                  </tr>
                  </thead>
                  <tbody>
                  {joueurs.map( (row) => (
                  <tr>
                    <td>{row.Photo}</td>
                    <td >{row.Nom}</td>
                    <td>{row.Age}</td>
                    <td>{row.Equipe}</td>
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
