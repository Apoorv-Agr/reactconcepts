import React from "react";
import HocComponent from "./HocComponent";

const HoverCompTwo = ({ name, counter, updateCounter }) => {
  return (
    <div>
      <p onMouseOver={updateCounter}>
        {name} hovered {counter} times.
      </p>
    </div>
  );
};

export default HocComponent(HoverCompTwo);
