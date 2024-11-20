import React from "react";
import { useState } from "react";

const UseContext = () => {
  const [user, setUser] = useState("Quintus");
  return (
    <div>
      <h1>I am a {user} and I am proud for who I am.</h1>
      <Component1 user={user} />
    </div>
  );
};

function Component1({ user }) {
  return (
    <div>
      <h1>This is a second component</h1>
      <Component2 user={user} />
    </div>
  );
}
function Component2({ user }) {
  return (
    <div>
      <h1>This is a third component by {user}</h1>
      <Component3 user={user} />
    </div>
  );
}
function Component3({ user }) {
  return (
    <div>
      <h1>This is a fourth component of {user}</h1>
    </div>
  );
}

export default UseContext;
