import React, { Component } from 'react';
import TableJoueurs from '../../components/Tables/TableJoueurs.js';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
       <TableJoueurs/>
      </div>
    )
  }
}

export default Dashboard;
