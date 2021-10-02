import React, { Component } from "react";

class MainComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  increaseCounter = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <div>
        {this.props.children(this.state.counter, this.increaseCounter)}
      </div>
    );
  }
}

export default MainComp;
