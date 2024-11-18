import React, { useState } from "react";

const StateHook = () => {
  const [color, setColor] = useState("green");
  const update = () => setColor("blue");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl">I have trying to learn react and vite.</h1>
      <p className="text-green-950">My favorite {color}.</p>
      <button className="text-blue-800" onClick={update}>
        Blue
      </button>
      <h3 onClick={() => setColor("red")} className="text-red-600">
        changed
      </h3>
      <button
        className="text-3xl text-cyan-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p className="text-3xl text-amber-700"> {count}</p>
      <button
        className="text-3xl text-cyan-600"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <p
        className="text-3xl text-cyan-600"
        onClick={() => setCount((co) => (co = 0))}
      >
        {" "}
        Reset
      </p>
    </div>
  );
};

export default StateHook;
