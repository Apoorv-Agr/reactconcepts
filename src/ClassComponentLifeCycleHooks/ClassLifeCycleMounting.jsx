/*
    Mounting Phase :- 
        Order or Flow of Execution of React Class Components 
            1st  constructor
            2nd  getDerivedStateFromProps
            3rd  render
            4th  componentDidMount
*/

import React, { Component } from "react";

class ClassLifeCycleMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("1st console in constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2nd console in getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("4th console in componentDidMount");
  }

  render() {
    console.log("3rd console in render");
    return <div>Class LifeCycle Mounting</div>;
  }
}

export default ClassLifeCycleMounting;
