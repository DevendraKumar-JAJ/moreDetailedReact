import React from "react";
import ReactDOM from "react-dom/client";
function Card(props){

  return <div style={{margin:"10px",textAlign:"center",padding:"10px", backgroundColor:"green",width:"150px",height:"200px"}}>
    <img style={{ height: "50%", borderRadius: "10px" }} src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Ffc%2F62fcfa8ce7163fdb2242e093284c3fca24f4e615.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"/>
    <h2 style={{ fontSize:"20px",margin:"10px 0", color:"white"}}>T-Shirt</h2>
    <h3 style={{ fontSize: "18px", margin: "0" } }>{props.per} OFF</h3>
    <h2 style={{ fontSize: "15px", margin: "5px" } }>Shop Now</h2>
  </div> 
}
const LastProduct={per:"10-50"}
function App(){
  return <div style={{ display: "flex", flexWrap: "wrap" }}> <Card  per="40% - 50%"/> <Card per="40% - 60%" /> <Card per="30% - 50%" /> <Card per="45% - 55%" /> <Card per="40% - 50%" /> <Card per="40% - 50%" /> <Card per="40% - 50%" /> <Card per="40% - 50%" /> <Card per="40% - 50%" /> <Card  per={LastProduct.per}/></div>
}
Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>)