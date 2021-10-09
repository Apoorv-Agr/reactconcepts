import React from "react";

const DisplayCount = (props) => {
  console.log("in DisplayCount Component");
  return (
    <div>
      <h3>
        {props.text} - {props.valueToDisplay}
      </h3>
    </div>
  );
};

export default React.memo(DisplayCount);
