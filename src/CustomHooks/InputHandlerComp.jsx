import React, { useRef, useEffect } from "react";
import useInputHook from "./useInputHook";

const InputHandlerComp = () => {
  /* 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
  */
  const [firstName, firstNameBindersObj, resetFirstName] = useInputHook("");

  const [lastName, lastNameBindersObj, resetLastName] = useInputHook("");

  const fNameRef = useRef(null);

  useEffect(() => {
    fNameRef.current.focus();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Hello, ${firstName} ${lastName}`);
    fNameRef.current.focus();
    resetFirstName();
    resetLastName();
  };
  /* const fNameChange = (e) => {
    setFirstName(e.target.value);
  }; */
  /* const lNameChange = (e) => {
    setLastName(e.target.value);
  }; */

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="fName">First Name : </label>
          <input
            ref={fNameRef}
            value={firstNameBindersObj.value}
            id="fName"
            type="text"
            placeholder="First Name"
            onChange={firstNameBindersObj.onChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lsName">Last Name : </label>
          <input
            value={lastNameBindersObj.value}
            id="lsName"
            type="text"
            placeholder="Last Name"
            onChange={lastNameBindersObj.onChange}
          />
        </div>
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputHandlerComp;
