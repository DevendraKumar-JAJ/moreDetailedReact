import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Main(){
  let [color,setColor]=useState("black");
  
  // console.log("Function Called");
  useEffect(()=>{
    // console.log("useEffect Called");
    document.body.style.backgroundColor=color;
  },[color]);
  // console.log("Function Ended");
  return <div>
    <h1 style={{ backgroundColor: "aqua",textAlign:"center" }}>Script Background Color</h1>
    <div style={{ backgroundColor: "black", textAlign: "center" }}>
            <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red BG</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue BG</button>
            <button onClick={()=>setColor("orange")} style={{backgroundColor:"Orange"}}>Orange BG</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"Green"}}>Green BG</button>
            <button onClick={()=>setColor("gray")} style={{backgroundColor:"Gray"}}>Gray BG</button>
          </div>
        </div>
}

Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<Main/>);

export default React.memo(Main);