import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/actions";
import { RootState } from "../app/store";

interface Props {
  data: [];
  fetchData: () => void;
}
interface State {}

interface Airline{
  id?: number;
name: string;
country: string;
logo: string;
slogan: string;
head_quaters: string;
website: string;
established: string;
}

export class GetData extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchData()}>GetData</button>
        <div>{this.props.data.map((airline:Airline) => {
          return <p>{airline.name}</p>
        })}</div>
      </div>
    );
  }
}

function mapState(state: RootState) {
  const {
    appData :  {data},
  } = state;
  return {
    data
  };
}
function mapDispatch(dispatch: any) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapState, mapDispatch)(GetData);
