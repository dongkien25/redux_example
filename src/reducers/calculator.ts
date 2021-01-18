interface State {
  value: number;
}
const initialState: State = { value: 0 };
export default (state = initialState, action: any) => {
  switch (action.type) {
    case "add":
      return { ...state, value: state.value + 1 };
    case "minus":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
export const result = (state: State) => state.value;
