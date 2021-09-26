import React, { useState, useEffect } from "react";

const UseEffectHooksFlow = () => {
  const [count, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter((prevCount) => {
      return prevCount + 1;
    });
  };
  // execute this effect on all State Updates
  useEffect(() => {
    console.log("2nd the Flow comes in 1st useEffect(()=>{}) ");
  });
  // componentDidMount
  useEffect(() => {
    console.log("3rd the Flow comes in 2nd useEffect(()=>{},[])");
  }, []);

  // conditionally run effect, means when the count state updates
  useEffect(() => {
    console.log("4th the Flow comes in 3rd useEffect(()=>{},[count])");
  }, [count]);

  return (
    <div>
      <div>
        In UseEffectHooksFlow {console.log("1st the Flow comes in render")} ---
        Count : {count}
      </div>
    </div>
  );
};

export default UseEffectHooksFlow;
