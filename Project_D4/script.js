import React  from "react";
import ReactDOM from "react-dom/client";
let name="Devendra Kumar"
let age=19
let classIs="BCA"
const style = { color: "white", backgroundColor: "black", padding: "20px", fontWeight: "900" }
function nameIs(){
  return <>
    <h1>First project</h1>
    <p>This is my {1}<sup>st</sup> project</p>
    <p>My name is {name} and I am {age} years old. I am a {classIs} student </p>
  </>
}


const Root=ReactDOM.createRoot(document.getElementById("root"));
// For define JSX function rule Capital Letter for Function name start
// because they defferencite between html tag and js function 

function NameIs(props) {
  return <>
    <h1>First project</h1>
    <p>This is my {1}<sup>st</sup> project</p>
    <p>My name is {props.name} and I am {props.age} years old. I am a {props.classIs} student </p>
  </>
}
// Rendering 
Root.render(<>
<p style={style}>Using Function call. JS method</p>
{nameIs()}
<p style={style}>Using Function call. JSX method. Capital Letter Function name.| start</p>
<NameIs name="Devendra" age="19" classIs="BCA"/>
</>)
