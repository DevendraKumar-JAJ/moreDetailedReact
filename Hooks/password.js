import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Pass from "./Pass";

function BodyIs(){
const [PassIs,SetPassIs]=React.useState('auierxaisdxmam');
const [passLeng,SetPassLeng]=React.useState(15);
const [charChange,setChar]=React.useState(false);
const [numChange,setNum]=React.useState(false);

function genPass(charChange,numChange,passLeng){
  let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(numChange==true){
    str=str+'0123456789'
  }
  if (charChange == true) {
    str += '!@#$%^&*?~|'
  }


  let pass = "2";
  let Len = str.length;
  let i=0
  console.log(passLeng)
  pass = Pass(charChange, numChange, passLeng)


  SetPassIs(pass);

  
}


  useEffect(() => { genPass(charChange,numChange,passLeng) }, [charChange, numChange, passLeng])
  return (
    <div id="BodyIs">
      <p style={{backgroundColor:"Green"}}>Password Genrator...</p>
      <h1>Pass : {PassIs}</h1>
      <div >
        <input type="range" min={5} max={30} value={passLeng} onChange={(e)=>SetPassLeng(e.target.value)} />
        <p>Length : {passLeng}</p>
        <input type="checkbox" defaultChecked={numChange} onChange={(e) => setNum(!numChange)} />
        <p>Number</p>
        <input type="checkbox" defaultChecked={charChange} onChange={(e) => setChar(!charChange)} />
        <p>Special Char</p>
      </div>
    </div>
  );
}

// Root=ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<BodyIs/>);
export default BodyIs;