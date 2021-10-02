import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import MainComp from "./MainComp";

class FinalComp extends Component {
  render() {
    return (
      <div>
        <MainComp>
          {(count, increaseCounter) => {
            return (
              <ClickCounter count={count} increaseCounter={increaseCounter} />
            );
          }}
        </MainComp>

        <MainComp>
          {(count, increaseCounter) => {
            return (
              <HoverCounter count={count} increaseCount={increaseCounter} />
            );
          }}
        </MainComp>
      </div>
    );
  }
}

export default FinalComp;
