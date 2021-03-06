import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import PositionJoueur from '../../views/PositionJoueur/';
import General from '../../views/General/';
import CreationEquipe from '../../views/CreationEquipe/';
import Accueil from '../../views/Accueil/Accueil';

const login = false;

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Container fluid>
                <Switch>
                  <Route path="/accueil" name="Accueil" component={Accueil} />
                  <Route path="/position" name="Position" component={PositionJoueur} />
                  <Route path="/general" name="General" component={General} />
                  <Route path="/equipe" name="CreationEquipe" component={CreationEquipe} />
                  <Redirect from="/" to="/accueil" />
                </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
