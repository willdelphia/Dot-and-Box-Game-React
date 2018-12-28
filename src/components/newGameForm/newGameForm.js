import React from "react";
  
  const newGameForm = (props) => {
    return (
<div className="newGameBox">
{props.showForm ? (
  <>
  <span>Board Size:</span> <input value={props.boardSize} onChange={props.change} min="5" max="20" type="number"/> 
  <button onClick={props.newGameButtonClick}>Start</button>
  </>
) : 
( <div className="newGameBox">
          <button onClick={props.showFormButtonClick}>New Game</button>
      </div> )}
</div>
    );
    
    
  }


export  default newGameForm;