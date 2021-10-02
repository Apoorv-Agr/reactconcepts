import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  return (
    <div>
      <h2>ParentComp</h2>
      <ChildComp />
    </div>
  );
};

export default ParentComp;
