import React, { useRef, useEffect } from "react";

const UseRefComp = () => {
  const newInpRef = useRef(null);
  // componentDidMount
  useEffect(() => {
    console.log("inputRef : ", newInpRef.current);
    newInpRef.current.focus();
  }, []);

  return (
    <div>
      {/* <label for="newInputText">Name : </label> */}
      <input id="newInputText" ref={newInpRef} type="text" />
    </div>
  );
};

export default UseRefComp;
