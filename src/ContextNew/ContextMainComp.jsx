import React, { Component } from "react";
import ChildCompOne from "./ChildCompOne";
import { NewContextProvider } from "./mainContext";
/* NewContextProvider ---> Step2 is wrapping the child component in Provider with context value */
class ContextMainComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contextVal: { firstName: "Apoorv", lastName: "Agrawal" },
    };
  }
  updateContextValue = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contextVal: { firstName: "Tom", lastName: "Hardy" },
      };
    });
  };
  render() {
    const { contextVal } = this.state;
    return (
      <NewContextProvider value={contextVal}>
        <div>
          <h1>Main Component</h1>
          <button onClick={this.updateContextValue}>
            Updating Context in Parent
          </button>
          <ChildCompOne />
        </div>
      </NewContextProvider>
    );
  }
}

export default ContextMainComp;
