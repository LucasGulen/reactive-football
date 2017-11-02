import React, { Component } from 'react';
import './Equipe.css';
import GoX from 'react-icons/lib/go/x';

class Equipe extends Component{
    ajoutJoueur(){
      var nbAjouts= document.getElementsByClassName("colored");
      if(nbAjouts.length>0){
        document.getElementById("txtJoueur1").value = nbAjouts.item(0).innerHTML;
      }
      for(var i=1;i<nbAjouts.length;i++){
        var tab =document.getElementById("EquipeTable");
        var newLine = document.createElement("tr");
        var newCell = document.createElement("td");
        var newTxtB = document.createElement("input");
        newTxtB.value = nbAjouts.item(i).innerHTML;        
        newTxtB.setAttribute("type","text");
        newCell.appendChild(newTxtB);
        var newCell2 = document.createElement("td");
        var newBtn = document.getElementById("CrossBtn").cloneNode(true);
        newBtn.addEventListener("click",e=>{
          this.delJoueur(e);
        });
        newCell2.appendChild(newBtn);
        newLine.appendChild(newCell);
        newLine.appendChild(newCell2);
        tab.appendChild(newLine);
      }

    }

    editer(){
      var elems = document.getElementsByClassName("cross");
      if(!elems.length<=0){
        if (elems.item(0).hidden) {
          for (var i=0;i<elems.length;i++){
          elems.item(i).hidden=false;
          document.getElementById("terminerBtn").hidden=false;
          document.getElementById("EditBtn").hidden=true;
          };
        }
        else{
          for (i=0;i<elems.length;i++){
            elems.item(i).hidden=true;
            document.getElementById("terminerBtn").hidden=true;
            document.getElementById("EditBtn").hidden=false;
          };
        } 
      }
    }
    delJoueur(e){      
      try {
        var tab = document.getElementById("EquipeTable");
        if(tab.childElementCount>1){
          tab.removeChild(e.currentTarget.parentNode.parentNode);
        }else{
          document.getElementById("txtJoueur1").value="";
        }
      } catch (Error) {
        document.getElementById("txtJoueur1").value="";          
      }
    }

    clickOnTd(event){
      if (event.target.className=="colored"){
        event.target.setAttribute("class","uncolored");
      }else{
        event.target.setAttribute("class","colored");
      }
    }

    changeMouse(event){
      event.currentTarget.style.cursor = "pointer";
    }
     
    render() {
      return (
        <div className="verticalyCenter">
          <button id="EditBtn" className="Equipe-button"  onClick={this.editer} > Editer </button>
          <table id="EquipeTable">
            <tbody>
            <tr>
              <td><input id="txtJoueur1" type='text'></input></td>
              <td><button id="CrossBtn" className="cross" hidden="true" onClick={this.delJoueur}><GoX /></button></td>
            </tr>
            </tbody>
          </table>
          <button id="AjoutBtn" className="Equipe-button" onClick={e=>{this.ajoutJoueur()}}>+</button>
          <button id="terminerBtn" className="Equipe-button" hidden="true" onClick={this.editer}>Terminer</button>
        
        {/* Simulation d'un tableau contenant des joueurs que l'utilisateur peut sélectionner pour ajouter à son équipe */}
        <table id="tabJoueurs" className="onTheRight" onMouseEnter={e=>{this.changeMouse(e)}}>
          <tbody onClick={e=>{this.clickOnTd(e)}}>
            <tr><td>Ronaldo McDonald's</td></tr>
            <tr><td>Lionel Luthor</td></tr>
            <tr><td>Hallebert  Rossier</td></tr>
            <tr><td>Peter des nés</td></tr>
            <tr><td>Michelle qu'une</td></tr>
          </tbody>
        </table>
        {/* Simulation d'un tableau contenant des joueurs que l'utilisateur peut sélectionner pour ajouter à son équipe */}
        
        </div>
      )
    }
}
export default Equipe;
