import React, { Component } from "react";

class ComponentDidMountUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  componentDidMount() {
    console.log("1st console in componentDidMount lifecycle hooks");
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log("2nd console in componentDidUpdate lifecycle hooks");
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Class Based Component Count : {count}</h2>
        <br />
        <button onClick={this.updateCount}>Click Me!!</button>
      </div>
    );
  }
}

export default ComponentDidMountUpdate;
