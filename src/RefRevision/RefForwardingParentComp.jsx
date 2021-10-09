import React, { Component } from "react";
import RefForwarding from "./RefForwarding";

class RefForwardingParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inpRef = React.createRef();
  }

  clickHandler = () => {
    this.inpRef.current.focus();
  };

  render() {
    return (
      <div>
        <RefForwarding ref={this.inpRef} />
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default RefForwardingParentComp;
