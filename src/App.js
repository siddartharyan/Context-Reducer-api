import React, { useReducer } from "react";
import Input from "./Input.js";
import { Context } from "./Context.js";
import Reducer from "./Reducer.js";
import Display from "./Display.js";
function App() {
  const initialState = {
    first: "",
    last: "",
    arr: []
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <Context.Provider value={[state, dispatch]}>
        <Input />
        <Display />
      </Context.Provider>
    </div>
  );
}
export default App;
