import React from "react";
import ReactDOM from "react-dom/client";
import Incre from "./increChild.js";
import Decre from "./decreChild.js";

function StateVar() {

  const [state, setState] = React.useState(0);

  return <div style={{ backgroundColor: "aqua" }}>
    <h1>StateLifting In React :{state}</h1>
    <Incre counts={state}  setState={setState}/>
    <Decre counts={state}  setState={setState}/>
  </div>
}

export default StateVar;

// Root=ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<StateVar/>)