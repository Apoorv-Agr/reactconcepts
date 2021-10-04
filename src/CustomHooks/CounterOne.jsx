import React from "react";
import useCounterHook from "./useCounterHook";

const CounterOne = () => {
  const [count, increaseCount, decreaseCount, resetCount] = useCounterHook(
    0,
    1
  );
  return (
    <div>
      <h3>{`Count => ${count} in CounterOne component`} </h3>
      <button onClick={increaseCount}>Increase1</button>
      <button onClick={decreaseCount}>Decrease1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterOne;
