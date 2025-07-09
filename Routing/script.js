import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import My from "./My";
import My2 from "./My2";



function App(){
  return (<>
    <BrowserRouter>
    <h5>My Routing App</h5>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}>
        {/* <Route index element={<My/>}/> */}
        <Route path="my" element={<My/>}/>
        <Route path="my2" element={<My2/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
  </>);
}

const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
