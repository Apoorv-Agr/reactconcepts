import React, { useState, useEffect } from "react";

const HooksCleanUp = () => {
  const [xCoordinate, setX] = useState(0);
  const [yCoordinate, setY] = useState(0);
  const logMouseMovements = (event) => {
    console.log("Mouse Move Event");
    setX(event.clientX);
    setY(event.clientY);
  };
    /* 
        Clean Up code for cancelling subscriptions, timers , removing event Handlers
     */
  const effectCleanUps = () => {
    console.log("in Clean Up Post Component Unmount");
    window.removeEventListener("mousemove", logMouseMovements);
  };

  useEffect(() => {
    console.log("use effect called once");
    window.addEventListener("mousemove", logMouseMovements);

    return effectCleanUps;
  }, []);

  return (
    <div>
      <h2>X Coordinates : {xCoordinate}</h2>
      <h2>Y Coordinates : {yCoordinate}</h2>
    </div>
  );
};

export default HooksCleanUp;
