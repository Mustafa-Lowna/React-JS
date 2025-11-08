import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  let incrementCounter = () => setCounter(counter + 1);

  let decrementCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div className="container">
      <h2 className="text-success">Counter App</h2>
      <div className="p-3 mb-4"></div>
      <button className="btn btn-info mx-3" onClick={incrementCounter}>
        ➕
      </button>
      <button className="btn btn-danger" onClick={decrementCounter}>
        ➖
      </button>
      <div>
        <h3 className="text-secondary mt-5">
          Counter: <span className="badge text-bg-primary">{counter}</span>
        </h3>
      </div>
    </div>
  );
}
export default Counter;
