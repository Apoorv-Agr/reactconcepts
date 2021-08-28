// import "./styles.css";
import React, { useState } from "react";

const studentObj = [
  { name: "John", score: 89, pass: true },
  { name: "Raj", score: 10, pass: false },
  { name: "Rohan", score: 45, pass: false },
];

const DeloiteQuest = () => {
  const [divColor, setDivColor] = useState({ name: "", color: "" });
  const handleListClick = (name, color) => {
    setDivColor({ ...divColor, name: name, color: color });
  };
  return (
    <div className="App">
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: divColor.color,
        }}
      >
        {divColor.name}
      </div>
      <ul>
        {studentObj.map((el, idx) => {
          let listColor = el.pass ? "green" : el.score > 40 ? "orange" : "red";
          return (
            <li
              key={`${el.name}_${idx}`}
              style={{ color: listColor, cursor: "pointer" }}
              onClick={() => {
                handleListClick(el.name, listColor);
              }}
            >
              {el.name} - {el.score}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DeloiteQuest;
