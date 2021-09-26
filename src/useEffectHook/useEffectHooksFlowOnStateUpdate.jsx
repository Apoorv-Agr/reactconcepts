import React, { useState, useEffect } from "react";
const UseEffectHooksFlowOnStateUpdate = () => {
  const [count, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter((prevCount) => {
      return prevCount + 1;
    });
  };

  // Execute this effect on all State Updates i.e componentDidUpdate
  useEffect(() => {
    console.log(
      "UseEffectHooksFlowOnStateUpdate 2nd the Flow comes in 1st useEffect(()=>{}) "
    );
  });
  // componentDidMount , this effect is called only once after render 
  /* useEffect(() => {
    console.log("3rd the Flow comes in 2nd useEffect(()=>{},[])");
  }, []); */

  // conditionally run effect, means when the count state updates
  useEffect(() => {
    console.log(
      "UseEffectHooksFlowOnStateUpdate 3rd the Flow comes in 2nd useEffect(()=>{},[count])"
    );
  }, [count]);

  return (
    <div>
      <p>
        Use Effect runs <b>after every render</b> of the component
      </p>
      <div>
        In UseEffectHooksFlowOnStateUpdate
        {console.log(
          "UseEffectHooksFlowOnStateUpdate 1st the Flow comes in render"
        )}{" "}
        --- Count : {count}
      </div>
      <button onClick={updateCounter}> Click Me </button>
    </div>
  );
};

export default UseEffectHooksFlowOnStateUpdate;
