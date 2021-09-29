import React, { Component } from "react";
import RefClassChildComp from "./RefClassChildComp";

class RefClassParentComp extends Component {
  constructor(props) {
    super(props);

    this.parentRef = React.createRef();
    this.state = {};
  }
  clickHandler = () => {
    console.log("this.parentRef : ", this.parentRef);
    this.parentRef.current.childFocusMethod();
  };
  render() {
    return (
      <div>
        <h2>RefClassParentComp</h2>
        <RefClassChildComp ref={this.parentRef} />
        <button onClick={this.clickHandler}>Click Me 3 !</button>
      </div>
    );
  }
}

export default RefClassParentComp;
