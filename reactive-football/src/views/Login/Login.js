import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Signup from './Signup';
import {getUser} from '../../functions/Joueur';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup : false,
      login : "",
      password : "",
      connexion: false
    };
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
      this.handleLogin();
    });
  }

  handleLogin(){
    if (!this.state.connexion){
      
    }
    this.props.onLogin(this.state.connexion);
  }

  render() {
    if (this.state.signup){
      return(
        <Signup />
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
