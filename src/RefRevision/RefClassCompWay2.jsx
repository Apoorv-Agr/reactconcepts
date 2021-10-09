import React, { Component } from "react";

class RefClassCompWay2 extends Component {
  constructor(props) {
    super(props);
    // Step 1
    this.callBackRef = null;
    //Step 2
    this.setCallBackRef = (el) => {
      console.log("el : ", el);
      this.callBackRef = el;
    };
  }

  componentDidMount() {
    if (this.callBackRef) {
      this.callBackRef.focus();
    }
  }

  clickHandler = () => {
    console.log("value : ", this.callBackRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.setCallBackRef} />
        <button onClick={this.clickHandler}>Click Me2</button>
      </div>
    );
  }
}

export default RefClassCompWay2;
