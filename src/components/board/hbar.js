import React from "react";

const hbar = props => (
  <div
    className="hbar"
    style={props.style}
    onClick={() => props.click(props.address, "h")}
  >
    <div className="clicker" />
  </div>
);

export default hbar;
