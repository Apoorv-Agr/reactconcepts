import React, { useState } from "react";

const UseStateComponent = () => {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const setFirstName = (e) => {
    setFullName((prevFullName) => {
      return { ...prevFullName, firstName: e.target.value };
    });
  };
  const setLastName = (e) => {
    setFullName((prevFullName) => {
      return { ...prevFullName, lastName: e.target.value };
    });
  };
  return (
    <div>
      <form>
        <label for="fName">FirstName : </label>
        <input
          id="fName"
          type="text"
          placeholder="Enter First Name"
          value={fullName.firstName}
          onChange={setFirstName}
        />
        <label for="lName">LastName : </label>
        <input
          id="lName"
          type="text"
          placeholder="Enter Last Name"
          value={fullName.lastName}
          onChange={setLastName}
        />
        <h2> Fist Name is {fullName.firstName}</h2>
        <h2> Last Name is {fullName.lastName}</h2>
        <h2>{JSON.stringify(fullName)}</h2>
      </form>
    </div>
  );
};

export default UseStateComponent;
