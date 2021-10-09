import React, { Component } from "react";

export class RefClassChildComp extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {};
  }

  childFocusMethod = () => {
    this.childRef.current.focus();
  };

  render() {
    console.log("props : ", this.props);
    return (
      <div>
        <br />
        <input type="text" ref={this.childRef} />
      </div>
    );
  }
}

export default RefClassChildComp;
