/* 
    Quest) What is a HOC ? 
    Ans) It is a pattern where a function takes a component as an argument and returns a new component
    const NewComponent = higherOrderComponent(originalComponent)
    Quest) Why HOC ? 
    Ans) To share the common functionality between components 
 */

import React, { useState } from "react";

const wrapperComponent = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
    return (
      <div>
        <OriginalComponent
          counter={counter}
          updateCounter={increaseCounter}
          {...props}
        />
      </div>
    );
  };
  return NewComponent;
};

export default wrapperComponent;
