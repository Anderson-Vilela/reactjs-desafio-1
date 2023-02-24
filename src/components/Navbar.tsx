import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-300 px-24 py-12 text-4xl shadow-md">
      <NavLink to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className="flex gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
