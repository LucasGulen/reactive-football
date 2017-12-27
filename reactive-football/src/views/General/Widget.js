import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from 'reactstrap/lib/utils';
import {Bar, Line} from 'react-chartjs-2';
import {
  Progress,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  Label,
} from 'reactstrap';
import {getNbUsers} from './../../functions/Joueur';


// Card Chart
const cardChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Equipes crées',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [1,2,3,4,5,1,9]
      }
    ],
  };
  
  const cardChartOpts = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }],
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  }
// Card Chart 

class Widget extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nbUsers: 0,
          data: cardChartData,
        };
        getNbUsers()
          .then((res) => {
            this.setState({ nbUsers: res.data.nbUsers })});
      }
     

  render() {
    const {className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes} = this.props;

    // demo purposes only
    const progress = {style: "", color: color, value: value};
    const card = {style: "", bgColor: ""};

    if (variant === "inverse") {
      progress.style = "progress-white";
      progress.color = "";
      card.style = "text-white";
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames("progress-xs my-3", progress.style);

    return (
        <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  
                </ButtonGroup>
                <h4 className="mb-0">{this.state.nbUsers}</h4>
                <p>Equipes crées </p>
              </CardBody>
              <div className="chart-wrapper px-3" style={{height:'100px'}}>
                <Line data = {this.state.data} options={cardChartOpts} height={70} redraw/>
              </div>
        </Card>
    )
  }
}

export default Widget;
