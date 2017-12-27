import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {Card, CardHeader, CardBody} from 'reactstrap';
import { getStatsClub } from './../../functions/Joueur';

const bar = {
  labels: [],
  datasets: [
    {
      label: 'Club',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
};

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          statistiques: [],
          data: bar,
        };
        getStatsClub()
          .then((res) => {
            this.setState({ statistiques: res.data },() =>{
              this.setChart(this.state.statistiques.all);
            })});
      }
      setChart(data){
    var tempData=this.state.data
    for(var i=0;i<data.length;i++){
        tempData.datasets[0].data[i]=data[i].score
        tempData.labels[i]=data[i].joueur.nomClub
    }
    this.setState({data : tempData});
    }

  render() {
    return (
      <div className="animated fadeIn">
          <Card>
            <CardHeader>
              Club les mieux côtés !
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={this.state.data}
                     options={{ticks: {
                autoSkip: false
                },
                  maintainAspectRatio: false
                }}
                redraw/>
              </div>
            </CardBody>
          </Card>
      </div>
    )
  }
}

export default Chart;