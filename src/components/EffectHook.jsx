import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [color, setColor] = useState("green");
  useEffect(() => {
    setColor((color) => color + "good");
  });

  return (
    <div>
      <h1>He is my friend</h1>
      <p>My color is {color}</p>
    </div>
  );
};

export default EffectHook;
