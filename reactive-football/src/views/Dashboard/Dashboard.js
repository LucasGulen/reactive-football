import React, { Component } from 'react';
import TableJoueurs from '../../components/Tables/TableJoueurs.js';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       <TableJoueurs onRef={ref => (this.tableJoueurs= ref)}/>
      </div>
    )
  }
}

export default Dashboard;
