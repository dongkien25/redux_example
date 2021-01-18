import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Testing from "./components/Testing";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App" onClick={() => setNumber((pre) => ++pre)}>
      <Calculator></Calculator>
      <Testing number={number} />
    </div>
  );
}

export default App;
