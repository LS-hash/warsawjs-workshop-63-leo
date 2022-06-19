import { useState } from "react";

const Text = ({ text = "123", defaultParameter = 0 }) => {
  const [counter, setCounter] = useState(defaultParameter);
  const onChange = (increment) => {
    setCounter(counter + increment);
  };

  return (
    <div>
      <p>{text}</p>
      <h2> {counter} </h2>
      <button onClick={() => onChange(1)}>add value 1</button>
      <button onClick={() => onChange(-1)}>decrement value 1</button>
      <button onClick={() => onChange(5)}>add value 5</button>
    </div>
  );
};

export default Text;

// curly brackets = objects, parameters
// square brackets = arrays
// regular brackets = useState(), console.log(), properties
