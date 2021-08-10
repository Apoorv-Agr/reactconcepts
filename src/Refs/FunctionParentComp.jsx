import React, { Component } from "react";
import FunctionInputComp from "./FunctionInputComp";

class FunctionParentComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusClickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FunctionInputComp ref={this.inputRef} />
        <button onClick={this.focusClickHandler}>Click to Focus</button>
      </div>
    );
  }
}

export default FunctionParentComp;
