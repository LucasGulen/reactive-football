import React, {Component} from 'react';
import {Modal,ModalHeader,ModalFooter,ModalBody,Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Signup from './Signup';
import {getUser} from '../../functions/Joueur';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup : false,
      login : "",
      password : "",
      connexion: false,
      modal : false,
      user : ""
    };
    this.toggle = this.toggle.bind(this);    
  }

  handleChange(e) {
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  Connexion(){
    getUser(this.state.login, this.state.password)
      .then((res) => {
      this.setState({connexion : res.data})
      this.setState({user  : res.data.uti_id});
      this.handleLogin();
      console.log(this.state.connexion);
      if (!this.state.connexion) {
        localStorage.setItem('connected',false);    
        localStorage.setItem('userId','');
        this.toggle();
      }else{
        localStorage.setItem('connected',true);    
        localStorage.setItem('userId',this.state.user);
      }
    });
  }

  handleLogin(){
    this.props.onLogin(this.state.connexion);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    if (this.state.signup){
      return(
        <Signup onSignup={signupState =>{this.props.onLogin(this.state.signup)}} />
      )
    }else{
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h1>Connexion</h1>
                      <p className="text-muted">Connecte-toi et crée/modifie ton équipe !</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                        <Input type="text" name="login" onChange={this.handleChange.bind(this)} placeholder="Nom d'utilisateur"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                        <Input type="password" name="password"  onChange={this.handleChange.bind(this)} placeholder="Mot de passe"/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={()=>this.Connexion()}>Connexion</Button>
                          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Erreur de connexion</ModalHeader>
                            <ModalBody>
                              Nous n'avons malheureusement pas réussi à vous identifier. Veuillez vous assurer que vous avez bien saisie vos identifiants.
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
                            </ModalFooter>
                          </Modal>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Mot de passe oublié ?</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Inscription</h2>
                        <p>Tu n'as pas encore de compte et tu aimerais te créer une équipe et pouvoir la comparer avec tes amis ? Alors n'attends plus et inscris-toi !</p>
                        <Button color="primary"  className="mt-3" active onClick={()=>this.setState({signup : true})}>Créer compte</Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Login;
