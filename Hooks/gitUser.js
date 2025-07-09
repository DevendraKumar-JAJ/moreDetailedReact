import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './gitPro';

function Users(){
 return  ( 
 <>
  <Header/>
  <Body/>
 </>
 )
}

// const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(<Users />);

export default Users;