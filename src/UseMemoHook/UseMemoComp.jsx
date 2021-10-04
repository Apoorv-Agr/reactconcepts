import React, { useState, useMemo } from "react";

const UseMemoComp = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const increaseCount1 = () => {
    setCountOne(countOne + 1);
  };
  const increaseCount2 = () => {
    setCountTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 900000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      <div>
        <button onClick={increaseCount1}> Count One - {countOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <br />
      <div>
        <button onClick={increaseCount2}> Count Two - {countTwo}</button>
      </div>
    </div>
  );
};

export default UseMemoComp;
