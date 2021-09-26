import React, { useState } from "react";

const PreviousState = () => {
  const initialCount = 0;
  const [ count, setCount]  = useState(initialCount);
  const increase5 = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increase+1
      </button>
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrease-1
      </button>
      <br />
      <button
        onClick={() => {
          setCount((prevCount) => initialCount);
        }}
      >
        Reset
      </button>
      <br />
      <button onClick={increase5}>Increase+5</button>
    </div>
  );
};

export default PreviousState;
