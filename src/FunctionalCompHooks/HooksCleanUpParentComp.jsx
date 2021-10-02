import React, { useState } from "react";
import HooksCleanUp from "./HooksCleanUp";

const HooksCleanUpParentComp = () => {
  const [toggleChildCompDisplay, setDisplayToggle] = useState(true);
  const clickHandler = () => {
    setDisplayToggle(!toggleChildCompDisplay);
  };
  return (
    <div>
      <br />
      <button onClick={clickHandler}>Toggle Child Comp Display</button>
      {toggleChildCompDisplay && <HooksCleanUp />}
    </div>
  );
};

export default HooksCleanUpParentComp;
