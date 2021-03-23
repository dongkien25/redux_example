import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../actions/actions";
interface State {
  calc: string;
}
const Calculator = () => {
  const counter = useSelector((state: State) => state.calc);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(add(5))}
        style={{ width: 30, height: 20, border: "1px solid gray" }}
      >
        +
      </button>
      <input
        readOnly
        type="text"
        value={counter}
        style={{ width: 80, border: "1px solid gray" }}
      />
      <button
        onClick={() => dispatch(minus(5))}
        style={{ width: 30, height: 20, border: "1px solid gray" }}
      >
        -
      </button>
    </div>
  );
};

export default Calculator;
