import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import {insertUser} from '../../functions/Joueur';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allIsFine : true,
      signup : false,
      login : "",
      email : "",
      password : ""
    };
    this.toggle = this.toggle.bind(this);        
  }

  handleChange(e) {
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  insert() {
    insertUser(this.state.login, this.state.email, this.state.password)
      .then((res) => {
        if (res){
          this.setState({signup : true});
          this.props.onSignup(this.state.signup);
        }else{
          this.setState({allIsFine : false});
        }
    });
  }

  toggle() {
    this.setState({
      allIsFine: !this.state.allIsFine
    });
  }

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
                    <Input type="text" name="login" onChange={this.handleChange.bind(this)} placeholder="Pseudo"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" name="email" onChange={this.handleChange.bind(this)} placeholder="Email"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" name="password" onChange={this.handleChange.bind(this)} placeholder="Mot de passe"/>
                  </InputGroup>
                  <Button color="success" block onClick={()=>this.insert()}>Je créer mon compte !</Button>
                  <Modal isOpen={!this.state.allIsFine} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Echec de création de compte</ModalHeader>
                    <ModalBody>
                      Vérifiez que tous les champs sont correctement remplis avant de continuer s'il vous plaît :)
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
                    </ModalFooter>
                  </Modal>
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
