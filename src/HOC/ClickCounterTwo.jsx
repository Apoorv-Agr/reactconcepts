import React from "react";
import HocComponent from "./HocComponent";

const ClickCounterTwo = ({ name, counter, updateCounter }) => {
  return (
    <div>
      <button onClick={updateCounter}>{name} Clicked {counter} Times</button>
    </div>
  );
};

export default HocComponent(ClickCounterTwo);
