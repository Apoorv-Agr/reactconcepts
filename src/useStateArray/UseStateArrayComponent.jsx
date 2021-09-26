import React, { useState } from "react";

const UseStateArrayComponent = () => {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>Add Items</button>
      <ul>
        {items.map((el) => {
          return <li key={el.id}>{`${el.id} -----> ${el.value}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseStateArrayComponent;
