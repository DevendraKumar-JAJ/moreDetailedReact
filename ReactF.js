import React from 'react';
import ReactDOM from 'react-dom/client';

// const el = React.createElement('hi', { id: "first", className: "dk", style: { color: "white", backgroundColor: "black" } }, 'Devendra');
// ReactDOM.render(el, document.getElementById("root"))


// // 
let age =19;
let phone =9142003626;
const Root=ReactDOM.createRoot(document.getElementById('root'));
const el=(
<>
    <span style={{
      backgroundColor: "white",
      color: "black"
    }}>Hello</span>
  <h2 style={{display:"inline"}}>I am Devendra</h2>
  <h2>I am {age} year old</h2>  {/*using javascript expression*/}
  
  {/* <h2>I am Devendra</h2> */}
</>
)

Root.render(el);
// function component...

const el2 = ()=>{
  return <h2>My phone numbe is {phone}</h2>
}

Root.render(<>{el}{el2()} </>);