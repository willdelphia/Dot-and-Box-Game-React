import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/board/board";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      whoseTurn: 0
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

  render() {
    return (
      <>
        <Board whoseTurn={this.state.whoseTurn} chessClock={this.chessClock} />
        <div> Hello {this.state.whoseTurn}</div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
