import React  from 'react';
import {
  BrowserRouter as  Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Gallary from './gallary';
import Food from './food';
import Comp from './comp';


export default function header (){
  const Numbers = {'/home':'Home','/about':'About', '/gallary':'Gallary', '/food':'Food','/comp':'Comp'}
  const returndata= Object.entries(Numbers).map((res,i)=>{
    return <li className="nav-item" key={i}>
           <Link className="nav-link" to={res[0]}>{res[1]}</Link>
           </li>
  })
    return (
            <>
            <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        {returndata}
      </ul>
    </div>
  </div>
</nav>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/gallary' element={<Gallary/>}/>
  <Route path='/food' element={<Food/>}/>
  <Route path='/comp' element={<Comp/>}/>
</Routes>

</Router>
                
            </>
        )
      }


