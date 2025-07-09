import { Outlet ,Link} from "react-router";
export default function About(){
  return (<>
  <h1>About Page.</h1>
  <nav>
    <Link to="my">My1</Link>
    <br/>
    <Link to="my2">My2</Link>

  </nav>
  <Outlet />    
  </>);
}

