import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Card, CardHeader, CardBody} from 'reactstrap';
import { getStatsAll } from './../../functions/Joueur';

const doughnut = {
  labels: [
    '',
    '',
    ''
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};
  
class Donut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statistiques: [],
      data: doughnut,
    };
    getStatsAll()
      .then((res) => {
        this.setState({ statistiques: res.data },() =>{
          this.setDonut(this.state.statistiques.all);
        })});
  }
  setDonut(data){
    var tempData=this.state.data
    for(var i=0;i<data.length;i++){
      tempData.datasets[0].data[i]=data[i].score
      tempData.labels[i]=data[i].joueur.nom
    }
    this.setState({data : tempData});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
            <CardHeader>
              Joueurs favoris en temps réel !
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={this.state.data} redraw/>
              </div>
            </CardBody>
          </Card>
      </div>
    )
  }
}

export default Donut;