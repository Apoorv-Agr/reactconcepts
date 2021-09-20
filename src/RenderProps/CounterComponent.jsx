import React, { useState } from "react";

const CounterComponent = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {props.children(counter, increaseCounter)}
      {/* {props.render(counter,increaseCounter)} */}
    </div>
  );
};
export default CounterComponent;
