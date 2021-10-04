import React from "react";
import useCounterHook from "./useCounterHook";

const CounterTen = () => {
  const [count, increaseCount, decreaseCount, resetCount] = useCounterHook(
    10,
    10
  );
  return (
    <div>
      <h3>{`Count => ${count} in CounterTen component`} </h3>
      <button onClick={increaseCount}>Increase10</button>
      <button onClick={decreaseCount}>Decrease10</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterTen;
