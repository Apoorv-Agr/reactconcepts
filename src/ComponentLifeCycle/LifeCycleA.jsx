import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  // Mounting Phase Method 1
  constructor(props) {
    super(props);

    this.state = {
      name: "Apoorv",
    };
    console.log("LifeCycleA Constructor");
  }
  // Mounting Phase Method 2 , Updating Phase Method 1
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  // Mounting Phase Method 3
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  // Updating Phase Method 2
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  //  Updating Phase Method 3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  // , Updating Phase Method 4
  componentWillUpdate() {
    console.log("LifeCycleA componentWillUpdate");
  }
  // Mounting Phase Method 4, Updating Phase Method 5
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
