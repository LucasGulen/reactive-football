import React, { Component } from 'react';
import Chart from './Chart';
import Widget from './Widget';
import Donut from './Donut';
import {
  Row,
  Col,
} from 'reactstrap';

class General extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="6" >
            <Donut/>
          </Col>
          <Col xs="6" >
            <Chart/>
          </Col >
          <Col xs="6" >
            <Widget/>
          </Col >
          <Col xs="6" >
            <Widget/>
          </Col >
        </Row>
      </div>
    )
  }
}

export default General;
