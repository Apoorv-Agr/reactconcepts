import React, { Component } from "react";
import ChildCompTwo from "./ChildCompTwo";

export class ChildCompOne extends Component {
  render() {
    return (
      <div>
        <h2>ChildCompOne</h2>
        <ChildCompTwo />
      </div>
    );
  }
}

export default ChildCompOne;
