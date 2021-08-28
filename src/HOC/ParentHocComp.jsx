import React from "react";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCompTwo from "./HoverCompTwo";

const ParentHocComp = () => {
  return (
    <div>
      <ClickCounterTwo name={`Apoorv`} />
      <HoverCompTwo name={`Anuj`} />
    </div>
  );
};

export default ParentHocComp;
