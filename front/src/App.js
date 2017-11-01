import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  ajoutLi (){
    var li = document.createElement("LI");
    var textNode = document.createTextNode("JoueurN°2");
    li.appendChild(textNode);
    li.setAttribute("ref","test");
    document.getElementById("ulJoueurs").appendChild(li);
  }

  editerLi(){
    var ul = document.getElementById("ulJoueurs");
    for (var i = 0 ;i<ul.childElementCount;i++) {
      var li = ul.childNodes.item(i)      
      if (li.childElementCount<=0){
        var button = document.createElement("button");
        var txtButton = document.createTextNode("Supprimer");
        button.appendChild(txtButton);
        li.appendChild(button);
      }
    }
  }

  render() {
    return (
      <div>
        <button className="App-button" onClick={this.editerLi} > Editer </button>
        <ul id="ulJoueurs">
          <li>Joueur n°1</li>
        </ul>
        <button className="App-button" onClick={this.ajoutLi}>+</button>
      </div>
    )
  }
}

export default App;
