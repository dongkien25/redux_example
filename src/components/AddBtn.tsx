import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AddAction from '../actions/add'
import { useSelector, useDispatch } from 'react-redux';
interface Props {
    result: number;
  }
  interface State {
  
  }
export class AddBtn extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    dispatch = useDispatch();
    render() {
        return (
            <button style={{width:30, height:30, border:'1px solid gray'}}> + </button>
        )
    }
}


export default AddBtn;
