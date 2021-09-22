import React, { Component } from "react";

class ErrorGeneratingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    if (Number(this.props.number) !== this.props.number) {
      throw new Error("Please pass valid Number");
    }
  }

  render() {
    const { number } = this.props;
    return <div>{number}</div>;
  }
}

export default ErrorGeneratingComponent;
