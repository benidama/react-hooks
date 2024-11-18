import React, { useState } from "react";

const StateHook = () => {
  const [color, setColor] = useState("green");
  const update = () => setColor("blue");
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
    </div>
  );
};

export default StateHook;
