import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../app/store";
interface Props {
  value: number;
  increment: () => void
  decrement: () => void
}
interface State {}
class Calculator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    // console.log(this.props.value);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.increment()} style={{ width: 30, height: 20, border: "1px solid gray" }}>
          +
        </button>
        <input
          readOnly
          type="text"
          value={this.props.value}
          style={{ width: 80, border: "1px solid gray" }}
        />
        <button onClick={() => this.props.decrement()}style={{ width: 30, height: 20, border: "1px solid gray" }}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
    const {
      calc: { value },
    } = state;

  return {
    value,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    increment: () => dispatch({type: "add"}),
    decrement: () => dispatch({type: "minus"})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
