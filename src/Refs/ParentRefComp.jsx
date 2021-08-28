import React, { Component } from "react";
import InputRefComp from "./InputRefComp";

class ParentRefComp extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  focusClickHandler = () => {
    this.componentRef.current.onFocusHandler();
  };
  render() {
    return (
      <div>
        <InputRefComp ref={this.componentRef} />
        <button onClick={this.focusClickHandler}>Click To Focus</button>
      </div>
    );
  }
}

export default ParentRefComp;
