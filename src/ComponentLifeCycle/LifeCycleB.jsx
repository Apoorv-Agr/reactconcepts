import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Apoorv",
    };
    console.log("LifeCycleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentWillUpdate() {
    console.log("LifeCycleB componentWillUpdate");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB Component</div>;
  }
}

export default LifeCycleB;
