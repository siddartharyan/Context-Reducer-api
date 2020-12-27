function get(state) {
  let dup = state["arr"];
  let item = {
    first: state.first,
    last: state.last
  };
  dup.push(item);
  return {
    first: "",
    last: "",
    arr: dup
  };
}

function addname(state, item, name) {
  return {
    ...state,
    [name]: item
  };
}

export default (state, action) => {
  switch (action.type) {
    case "add":
      return get(state);
    case "name":
      return addname(state, action.payload, action.name);
    default:
      return state;
  }
};
