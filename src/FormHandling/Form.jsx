import React, { useState } from "react";

function Form() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <label>UserName</label>
      <input type="text" placeholder="username" value="inputVal" />
    </div>
  );
}

export default Form;
