import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Main from "./ScriptColor";
import User from "./gitUser";
import BodyIs from "./password";
import StopWatch from "./StopWatch";
import StateVar from "./stateLifting";

function Counter(){
  let [Count,setCount]=useState(0);
  // let [Count,setCount]=useState(0);
function incre(){
  Count+=1;
  console.log(Count);
  // document.querySelector('p').innerText=`count is ${Count}`;
  setCount(Count);//use to change the state of / tag value from they called.
}
function decre(){
  Count-=1;
  console.log(Count);
  // document.querySelector('p').innerText=`count is ${Count}`;
  setCount(Count);
}
  return ( 
  <>
      <div style={{ backgroundColor: "aqua" }}>
        <h1 style={{ textDecoration:"underline" }} >This is create through React useState Method</h1>
        <p style={{ fontSize:"25px", fontWeight:"900"}}>Count is {Count}</p>
        <button onClick={incre}>Increment : {Count}</button>
        <button onClick={decre}>Decrement : {Count}</button>

   </div>
   <Main/>
   <User/>
   <BodyIs/>
   <StopWatch/>
   <StateVar/>
  </>
  )
}


const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Counter/>);
