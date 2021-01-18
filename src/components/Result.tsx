import React, { Component } from "react";
interface Props {
  result: number;
}
interface State {}
export class Result extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    const result = this.props.result;
    return (
      <div>
        <input type="text" value="" ></input>
      </div>
    );
  }
}

export default Result;
