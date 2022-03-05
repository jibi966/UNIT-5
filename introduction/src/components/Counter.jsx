import { useState } from "react";

export const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleChange = (val) => {
    setCounter(counter + val);
  };

  return (
    <>
      <h2>COUNTER = {counter}</h2>
      <button onClick={() => handleChange(1)}>ADD</button>
      <button onClick={() => handleChange(-1)}>SUB</button>
      <button onClick={() => handleChange(2)}>ADD 2</button>
      <button onClick={() => handleChange(counter)}>DOUBLE</button>
    </>
  );
};
