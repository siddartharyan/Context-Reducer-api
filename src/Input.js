import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Context.js";
function Input() {
  const context = useContext(Context);
  const [state, dispatch] = context;
  const [click, setClick] = useState(false);

  function handleChange(evnt) {
    dispatch({
      type: "name",
      payload: evnt.target.value,
      name: evnt.target.name
    });
  }

  function handleClick() {
    setClick(true);
  }

  useEffect(() => {
    dispatch({ type: "add" });
    return () => {
      setClick(false);
    };
  }, [click === true]);

  return (
    <div>
      <input
        value={state.first}
        type="text"
        name="first"
        onChange={handleChange}
      />
      <br />
      <input
        value={state.last}
        type="text"
        name="last"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}
export default Input;
