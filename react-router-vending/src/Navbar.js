import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/drink">Drink</NavLink>
      <NavLink exact to="/eat">Eat</NavLink>
    </nav>
  )
}

export default Navbar;