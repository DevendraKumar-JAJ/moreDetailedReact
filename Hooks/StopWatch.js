import React,{useState,useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";


function StopWatch() {
  
  const [time, setTime] = useState(0);
  const  interval = useRef(null);

  function Start() {
    interval.current = setInterval(() => {
      setTime((prev) => prev+ 1);
    }, 1000);
    return  ;
  }
  function Stop() { 
    clearInterval(interval.current); 
    interval.current = null;
  }
  function Reset() {
    setTime(0);
    clearInterval(interval.current)
  }

  function timeFormat(time) {
    
  }
  return (
    <div>
      <p style={{backgroundColor:"white"}}>StopWatch is : <span>{time}</span></p>
      <button onClick={Start} >Start</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
}

// Root=ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<StopWatch/>)
export default StopWatch;