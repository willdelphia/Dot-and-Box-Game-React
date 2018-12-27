import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/board/board";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      whoseTurn: 0,
      humanPoints: 0,
      computerPoints: 0
    };
  }

  chessClock = () => {
    return new Promise((resolve, reject) =>{
      this.setState((state, props) => {
        const newTurn = state.whoseTurn === 0 ? 1 : 0;
        return { whoseTurn: newTurn };
      }, ()=> {
        resolve(true);
      });
    });
  };

  addPoint = (player) => {
    if(player){
      this.setState((state, props) => {
        const newPoits = state.computerPoints + 1;
        return { computerPoints: newPoits };
      });
    }
    else{
      this.setState((state, props) => {
        const newPoits = state.humanPoints + 1;
        return { humanPoints: newPoits };
      });
    }
     
  };

  render() {

    const boardStyle = {
      boxShadow: this.state.whoseTurn ? 
      "0px 5px 60px  rgba(255, 99, 71, 0.18), 0px 5px 20px  rgba(0, 0, 0, 0.18)" :
      "0px 5px 60px  rgba(173, 215, 229, 0.18), 0px 5px 20px  rgba(0, 0, 0, 0.18)"

    }

    return (
      <div className="container">
        <div className="containerInner"> 
          <div className="boardLayer" style={boardStyle}>
            <Board whoseTurn={this.state.whoseTurn} chessClock={this.chessClock} addPoint={this.addPoint} />
          </div>
        <div className="infoBox"> {this.state.whoseTurn ? "Computer's Turn" :  "Human's Turn"} <br/> Human: {this.state.humanPoints} / Computer: {this.state.computerPoints}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
