import React, { useContext } from "react";
import { Context } from "./Context.js";

function Display() {
  const [state, dispatch] = useContext(Context);
  let arr = state["arr"];
  return (
    <div>
      {arr.map((ele) => (
        <p>
          {ele.first} {ele.last}
        </p>
      ))}
    </div>
  );
}
export default Display;
