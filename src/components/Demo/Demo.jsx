import React, { useState, useEffect } from "react";

const RapidCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count < 100) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust the interval for rapid counting
    }

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default RapidCounter;
