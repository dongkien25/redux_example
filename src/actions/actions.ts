import apiAirlines from './api'

export const minus = (num:number) => {
    console.log("success",num);
    return {
        type: "minus",
        num
    }
}

export const add = (num:number) => {
    console.log("success",num);
    return {
        type: "minus",
        num
    }
}

export const getData = () => {
    console.log("success");
    return {
        type: "FETCHING_DATA",
        
    }
}

export const getDataSuccess= (data:[]) => {
    return {
      type: "FETCHING_DATA_SUCCESS",
      data,
    }
  }

export function fetchData(){
    return(dispatch:any) => {
        dispatch(getData())
        apiAirlines.getAirline()
        .then((response) => {
            console.log(response)
            dispatch(getDataSuccess(response.data))
        })
        .catch((error) => {console.log('err:',error)})
    }
}