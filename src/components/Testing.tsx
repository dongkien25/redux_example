import React, { Component } from "react";

interface Props {
  number: number;
}

interface State {}
export class Testing extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div>{this.props.number}</div>;
  }
}

export default Testing;
