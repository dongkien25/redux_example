export const minus = (num: number) => {
  console.log("success", num);
  return {
    type: "minus",
    payload: num,
  };
};

export const add = (num: number) => {
  console.log("success", num);
  return {
    type: "add",
    payload: num,
  };
};
