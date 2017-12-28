import React, { Component } from 'react';
import Chart from './Chart';
import Widget from './Widget';
import { Doughnut } from 'react-chartjs-2';
import {
  Row,
  Col
} from 'reactstrap';
import Donut from './Donut';

class General extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="6" >
            <Donut />
          </Col>
          <Col xs="6" >
            <Chart />
          </Col >
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}  >
            <Widget />
          </Col >
        </Row>
      </div>
    )
  }
}

export default General;
