import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import axios from 'axios';



class TableJoueurs extends Component {

  constructor(props) {
      super(props);
      this.state = {
        joueurs: [],
        tenDisplayPlayers:[],
        nextPlayerInd:0,
        nbPlayerToDisplay:10
      };  
      this.getAllJoueurs()
  }
  
//Fonction qui charge tous les joueurs dans le state "joueurs" et charge les 10 premiers joueurs dans le state "tenDisplayPlayers"
getAllJoueurs() {
  axios.get(`http://localhost/players.php`)
  .then(res => {
    const joueurs = res.data;
    this.setState({ joueurs:joueurs});
    this.getTenPlayers(0,10)    
  });
}

getTenPlayers(startInd,endInd){
  var table=[]
  var nbPlayers = this.state.joueurs.length
  //Pré condition avant l'entrée dans la boucle pour ne pas tenter d'accéder à un indice inexistant dans la liste de joueurs
  if (!(endInd < nbPlayers)) {
    endInd=nbPlayers-1
  }else if ((startInd < 0)){
    startInd=0
    endInd=startInd+this.state.nbPlayerToDisplay
  }
  for(var i=startInd;i<endInd;i++){
    table[i]=this.state.joueurs[i]
  }
  this.setState({
    tenDisplayPlayers:table,
    nextPlayerInd:endInd
  });
}

  render() {
    return (
      <div className="animated fadeIn">
          <button onClick={this.testAjax} />
          <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Striped Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Nom du joueur</th>
                    <th>Nationalité</th>
                    <th>Club</th>
                    <th>Pays du club</th>
                  </tr>
                  </thead>
                  <tbody >
                  {this.state.tenDisplayPlayers.map( (row) => (
                  <tr key={row.id}>
                    <td>{row.nom}</td>
                    <td >{row.nationalite}</td>
                    <td>{row.club}</td>
                    <td>{row.pays_club}</td>
                    <td>
                      <Badge color="success">{row.Classement}</Badge>
                    </td>
                  </tr>
                    ))}
                  </tbody>
                </Table>
                {/* Pagination opérationnelle mais il faut encore généraliser ça pour que les numéros de pages soient crées selon les données, 
                    Pour l'instant un clic sur un numéro renvoi les 10 suivants.
                */}
                <Pagination size={"10"}>
                  <PaginationItem onClick={()=>this.getTenPlayers(this.state.nextPlayerInd-2*this.state.nbPlayerToDisplay,this.state.nextPlayerInd-this.state.nbPlayerToDisplay)}><PaginationLink previous >Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem ><PaginationLink onClick={()=>this.getTenPlayers(this.state.nextPlayerInd,this.state.nextPlayerInd+this.state.nbPlayerToDisplay)} >2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink onClick={()=>this.getTenPlayers(this.state.nextPlayerInd,this.state.nextPlayerInd+this.state.nbPlayerToDisplay)} >3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink onClick={()=>this.getTenPlayers(this.state.nextPlayerInd,this.state.nextPlayerInd+this.state.nbPlayerToDisplay)} >4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink onClick={()=>this.getTenPlayers(this.state.nextPlayerInd,this.state.nextPlayerInd+this.state.nbPlayerToDisplay)} next >Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TableJoueurs;
