import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Apoorv",
    };
    console.log("LifeCycleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentWillUpdate() {
    console.log("LifeCycleA componentWillUpdate");
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifeCycleA Component
        <br />
        <button
          onClick={() => {
            this.setState({ name: "Anuj" });
          }}
        >
          Update Name
        </button>
        <br />
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
