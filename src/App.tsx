import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import  GetData  from "./components/GetData";
function App() {
  return (
    <div className="App" >
      <Calculator></Calculator>
      <br />
      <GetData></GetData>
    </div>
  );
}

export default App;
