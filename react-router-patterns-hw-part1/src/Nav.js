import React from "react";
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./NavBar.css";

function Nav({dogs}) {
  const links = dogs.map((dog) => {
    return <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
            {dog.name}
            </NavLink>
  });

  return (
    <>
      <nav>
        <NavLink exact to="/dogs">Home</NavLink>
        {links}
      </nav>
    </>
    
  );
}
// end

export default Nav;
