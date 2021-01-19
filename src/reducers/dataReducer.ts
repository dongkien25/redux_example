// interface Airline{
//     id?: number;
//   name: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quaters: string;
//   website: string;
//   established: string;
// }
interface State {
  data: [];
}
const initialState: State = {
  data: [],
};

export default function dataReducer(state = initialState, action: any) {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        data: [],
      };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
