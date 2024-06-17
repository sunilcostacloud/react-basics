import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = (num, type) => {
    if (type === "inc") {
      setCount((prev) => prev + num);
    } else if (type === "dec") {
      setCount((prev) => (prev - num <= 0 ? 0 : prev - num));
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => handleCount(1, "inc")}>Increment</button>
      <button onClick={() => handleCount(2, "dec")}>Decrement</button>
    </div>
  );
}

export default Counter;
