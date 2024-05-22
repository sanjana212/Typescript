import React from 'react'
import {Link} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const Navbar = () => {
    const [serchParams]=useSearchParams();
    let todosData=serchParams.get("todos");
  return (
    <nav>
        <Link to="/" className={todosData==null?"active":""}>All</Link>
        <Link to="/todos=active" className={todosData=="active" ?"active":""}>Active</Link>
        <Link to="/todos=completed" className={todosData=="completed"?"active":""}>completed</Link>
    </nav>
  )
}

export default Navbar;
