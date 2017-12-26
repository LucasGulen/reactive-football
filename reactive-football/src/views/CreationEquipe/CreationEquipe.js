import React, { Component } from 'react';
import axios from 'axios';
import TableJoueurs from './../../components/Tables/TableJoueurs'
import {getJoueursFilter} from './../../functions/Joueur';
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
    this.state = {recherche : ""};
    this.handleChange = this.handleChange.bind(this);
    this.executer = this.executer.bind(this);
  }

  handleChange(event) {
    this.setState({recherche : event.target.value});
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <input type="text" onChange={this.handleChange}/>
        <button onClick={() => {
            this.executer();
          }
          
        }>Rechercher</button>
        <TableJoueurs onRef={ref => (this.tableJoueurs= ref)}/>
      </div>
    )
  }

  executer() {
    getJoueursFilter(this.state.recherche)
    .then((res) => {
        this.tableJoueurs.populateTable(res.data === "" ? [] : res.data);
      }
    );
  }

}

export default CreationEquipe;
