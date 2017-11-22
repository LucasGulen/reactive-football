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


class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
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
                  <tr>
                    <td><img src="" /></td>
                    <td>Ronaldo Mcdonald's</td>
                    <td>19 ans</td>
                    <td>Serviette</td>
                    <td>
                      <Badge color="success">4/5</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="" /></td>
                    <td>Peter Des Nez</td>
                    <td>43 ans</td>
                    <td>GameMaster</td>
                    <td>
                      <Badge color="success">5/5</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="" /></td>
                    <td>Michel Qu'une</td>
                    <td>22 ans</td>
                    <td>Réel Madrid</td>
                    <td>
                      <Badge color="success">6/5</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="" /></td>
                    <td>Gérard Heineken</td>
                    <td>54 ans</td>
                    <td>Arsenal</td>
                    <td>
                      <Badge color="success">6/5</Badge>
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
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tables;
