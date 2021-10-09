import React from "react";
import ButtonComp from "./ButtonComp";
import DisplayCount from "./DisplayCount";
import TitleComp from "./TitleComp";
import { useState, useCallback } from "react";

const ParentCompOpt = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(10000);
  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <TitleComp />
      <DisplayCount valueToDisplay={age} text={"Age"} />
      <ButtonComp clickHandler={increaseAge}>Increase Age</ButtonComp>
      <DisplayCount valueToDisplay={salary} text={"Salary"} />
      <ButtonComp clickHandler={increaseSalary}>Increase Salary</ButtonComp>
    </div>
  );
};

export default ParentCompOpt;
