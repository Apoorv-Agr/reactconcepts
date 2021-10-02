import React from "react";

const HoverCounter = ({ count, increaseCount }) => {
  return (
    <div onMouseEnter={increaseCount}>
      <h2> Count : {count} </h2>
    </div>
  );
};

export default HoverCounter;
