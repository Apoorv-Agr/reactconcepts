import React, { Component } from "react";

const HocComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }
    updateCounter = () => {
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      });
    };
    render() {
      const { counter } = this.state;
      return (
        <div>
          <OriginalComponent
            {...this.props}
            counter={counter}
            updateCounter={this.updateCounter}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default HocComponent;
