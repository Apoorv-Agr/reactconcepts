import React, { Component } from "react";
import { NewContextConsumer } from "./mainContext";

class ChildCompThree extends Component {
  render() {
    return (
      <NewContextConsumer>
        {(contextProps) => {
          return (
            <div>
              <h4>ChildCompThree</h4>
              <p>
                Context Value in nested Child Component 
                {contextProps && (
                  <>
                    <b>
                      {` ${contextProps.firstName} ${contextProps.lastName} `}
                    </b>
                    {JSON.stringify(contextProps)}
                  </>
                )}
              </p>
            </div>
          );
        }}
      </NewContextConsumer>
    );
  }
}

export default ChildCompThree;
