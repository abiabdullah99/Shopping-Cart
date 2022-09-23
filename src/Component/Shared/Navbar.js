import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navbar = <>
    <li>
      <NavLink
        to="/"
        className="rounded-md font-mono mr-2 text-secondary text-xl font-semibold p-0 px-7 py-2"
      >
        Home
      </NavLink>
    </li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 mt-8">
        <div className="navbar-start flex items-center justify-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 mx-auto">
              {navbar}
            </ul>
          </div>
          <h1 className="text-2xl font-bold font-mono text-primary">ReactJS Assignment
          </h1>
        </div>
        <div className="navbar-end hidden lg:flex items-center justify-center">
          <ul className="menu menu-horizontal p-0">
            {navbar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;