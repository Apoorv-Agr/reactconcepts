import React, { useState, useEffect } from "react";

const TimerComp = () => {
  const counterInitVal = 0;
  const [count, setCounter] = useState(counterInitVal);

  const tickPerSec = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tickPerSec, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const [timeOtp, setTimeOtp] = useState(generateOtp());

  useEffect(() => {
    if (count === 20) {
      setTimeOtp((prevOtp) => generateOtp());
      setCounter(0)
    }
  }, [count]);

  return (
    <div>
      <h2>T-Otp : {timeOtp}</h2>
      <h3>{count}</h3>
    </div>
  );
};

export default TimerComp;
