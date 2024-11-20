import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StateHook from "./components/StateHook";
import EffectHook from "./components/EffectHook";
import UseContext from "./components/UseContext";
import UseContext2 from "./components/UseContext2";

function App() {
  const object = {
    name: "Anni",
    age: 23,
    country: "Rwanda",
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs" > */}
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
      <StateHook />
      <EffectHook name={"John"} />
      <EffectHook name={object.name} />
      <UseContext />
      <UseContext2 />
    </>
  );
}

export default App;
