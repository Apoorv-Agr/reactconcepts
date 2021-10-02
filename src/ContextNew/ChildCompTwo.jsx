import React, { Component } from "react";
import ChildCompThree from "./ChildCompThree";
import NewContext from "./mainContext";

class ChildCompTwo extends Component {
  static contextType = NewContext;
  render() {
    return (
      <div>
        <h3>Accessing Context in ChildCompTwo using <u>contextType :- </u> </h3>
        <p>{`${this.context.firstName} ${this.context.lastName} ${JSON.stringify(this.context)}`}</p>
        <ChildCompThree />
      </div>
    );
  }
}

export default ChildCompTwo;
