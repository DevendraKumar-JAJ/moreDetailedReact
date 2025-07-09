
import React, { use } from "react";
import { useState,useEffect } from "react";

function Body() {
  const [Profile, setProfile] = useState([]);
  const [Num, setNum] = useState("");

  // fetching data from api
  async function Profiles(count) {
    const Res=await fetch(`https://api.github.com/users?per_page=${count}`);
    const Data=await Res.json();

    setProfile(Data);
    // console.log(Data);
  }
  // calling the api function
  useEffect(() => { Profiles(5); }, []);

  return <div>
    <input id="int" type="text" placeholder="Search" value={Num} onChange={(e) => setNum(e.target.value)} />
    <button onClick={() => Profiles(Number(Num))}>Get Users</button>
    <div id="profile">
      {Profile.map((pr) => {
        // console.log(pr);
        return <>
          <div key={pr.id}>
            <img src={pr.avatar_url} alt="" />
            <h1>{pr.login}</h1>
            <a href={pr.html_url}>Check Profile</a>
          </div>
        </>;
      })}
    </div>
  </div>

}




export default Body;