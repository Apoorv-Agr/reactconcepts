import React from "react";

const ButtonComp = (props) => {
  console.log("in ButtonComp Component");
  return (
    <div>
      <button onClick={props.clickHandler}>{props.children}</button>
    </div>
  );
};

export default React.memo(ButtonComp);
