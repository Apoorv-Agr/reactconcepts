import React, { useState } from "react";

const PrevStateComp = () => {
  const [count, setCounter] = useState(0);

  const updateCounterBy5 = () => {
    for (let i = 1; i <= 5; i++) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  return (
    <div>
      <h1>This is a functional component</h1>
      <h4>{`Count : ${count}`}</h4>
      <button onClick={updateCounterBy5}>Update Count</button>
    </div>
  );
};

export default PrevStateComp;
