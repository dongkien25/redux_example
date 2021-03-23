interface State {
  value: number;
}

const calculatorReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "minus":
      return state - action.payload;
    default:
      return state;
  }
};
export default calculatorReducer;
