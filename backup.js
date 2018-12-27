fillSquares = addresses => {
  //console.log("filling: " + addresses.map(a => a.filladdress));
  this.setState((state, props) => {
    const squares = { ...state.squares };
    addresses.forEach(address => {
      squares[address.filladdress].filled = true;
      squares[address.filladdress].filledBy = state.whoseTurn;
      const wasASquareFilled = true;
    });
    return { squares: squares };
  });
  console.log(wasASquareFilled);
  return wasASquareFilled;
};








humanFilledSquareCascade = () => {
  const bars = this.state.bars;
  Object.keys(bars).map((address, index) => {
    const barObj = bars[address];
    if (!barObj.filled) {
      if (barObj.bartype === "h") {
        const top = this.checkSquare(bars, address, "top");
        const bottom = this.checkSquare(bars, address, "bottom");
        if (top.number === 3 || bottom.number === 3) {
          //fill it
        }
      } else if (barObj.bartype === "v") {
        const left = this.checkSquare(bars, address, "left");
        const right = this.checkSquare(bars, address, "right");
        if (left.number === 3 || right.number === 3) {
        }
      }
    }
  }
  };









humanFilledSquareCascade = () => {
  console.log("cascade");
  const bars = this.state.bars;
  const movesToMake = [];
  const loop = bars => {
    let hit = false;
    console.log("in the loop");
    Object.keys(bars).map((address, index) => {
      const barObj = bars[address];
      if (!barObj.filled) {
        if (barObj.bartype === "h") {
          const top = this.checkSquare(bars, address, "top");
          const bottom = this.checkSquare(bars, address, "bottom");
          if (top.number === 3 || bottom.number === 3) {
            hit = address;
            console.log("a hit");
          }
        } else if (barObj.bartype === "v") {
          const left = this.checkSquare(bars, address, "left");
          const right = this.checkSquare(bars, address, "right");
          if (left.number === 3 || right.number === 3) {
            hit = address;
            console.log("a hit");
          }
        }
      }
    });
    if (hit) {
      console.log("if a a hit");
      this.fillABar(hit);
      let cascadeFilledSquares = this.fillSquares(
        this.squaresCompleted(this.state.bars, hit)
      );
      loop(bars);
    } else {
      console.loo("returning false");
      return false;
    }
  };
  return loop(bars);
};