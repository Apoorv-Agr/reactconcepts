/*
    In the updating phase of Class Component :- 
        Order or Flow of Execution :-
            1)  static getDerivedStateFromProps(props, state)
            2)  shouldComponentUpdate()
            3)  render()
            4)  getSnapshotBeforeUpdate(prevProps, prevState)
            5)  componentDidUpdate()
 */

import React, { Component } from "react";

class ClassLifeCycleUpdating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("1st on update flow comes in getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("2nd on update flow comes in shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4th on update flow comes in getSnapshotBeforeUpdate");
    console.log("prevState : ", prevState, ", prevProps : ", prevProps);
    return null;
  }

  componentDidUpdate() {
    console.log("5th on update flow comes in componentDidUpdate");
  }

  render() {
    console.log("3rd on update flow comes in render()");
    const { name } = this.state;
    return (
      <div>
        {name}
        <button
          onClick={() => {
            this.setState({ name: "Neo" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}

export default ClassLifeCycleUpdating;
