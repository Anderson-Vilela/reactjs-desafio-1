import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
    const defaultCSS = '';
    const activedCSS = isActive
      ? 'font-semibold underline underline-offset-8'
      : '';
    return `${defaultCSS} ${activedCSS}`;
  };

  return (
    <nav className="flex items-center justify-between bg-gray-300 px-24 py-12 text-4xl shadow-md">
      <NavLink to="/" className="text-6xl">
        Mini <span className="font-bold">Blog</span>
      </NavLink>
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className={navLinkClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={navLinkClassName}>
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={navLinkClassName}>
            Cadastrar
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClassName}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
