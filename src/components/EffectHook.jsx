import React, { useState, useEffect } from "react";

const EffectHook = (prop) => {
  const props = prop.name;
  const tru = {
    name: "Anni",
    age: 23,
    country: "Rwanda",
  };
  const [color, setColor] = useState("green");
  useEffect(() => {
    setColor((color) => color + " good");
  }, []);

  return (
    <div>
      <h1>He is my friend</h1>
      <p>My color is {color}</p>
      <h4>My country is {tru.country}.</h4>
      <p>I have a child called {props}</p>
      <p>
        This page is amazing one because it is the one with high priority and we
        are here to discuss in many things.
      </p>
    </div>
  );
};

export default EffectHook;
