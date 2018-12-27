import React from "react";

const vbar = props => (
  <div
    className="vbar"
    style={props.style}
    onClick={() => props.click(props.address, "v")}
  >
    <div className="clicker" />
  </div>
);

export default vbar;
