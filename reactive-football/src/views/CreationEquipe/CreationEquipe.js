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
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <button onClick={() => {
            this.executer();
          }
        } />
        <TableJoueurs onRef={ref => (this.tableJoueurs= ref)}/>
      </div>
    )
  }

  executer() {
    getJoueursFilter("Ronal")
    .then((res) => {
        this.tableJoueurs.populateTable(res.data);
      }
    );
  }

}

export default CreationEquipe;
