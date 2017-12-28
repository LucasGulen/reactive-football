import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Signup extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Création de compte</h1>
                  <p className="text-muted">Mes infos</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" placeholder="Pseudo"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" placeholder="Email"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Mot de passe"/>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" placeholder="Répéter mot de passe"/>
                  </InputGroup>
                  <Button color="success" block>Je créer mon compte !</Button>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>Facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>Twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
