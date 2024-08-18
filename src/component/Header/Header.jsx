import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [dark, setDark] = useState(false);

  const darkToggle = () =>{
    setDark(!dark)
  }

  useEffect(() =>{
    if(dark){
      document.querySelector('html').setAttribute('data-theme', 'dark')
    }
    else{
      document.querySelector('html').setAttribute('data-theme', 'light')
    }
  },[dark])

  const navLink = (
    <>
      <li className="mx-1 mb-1 lg:mb-0 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-1 mb-1 lg:mb-0 ">
        <NavLink to="/mealDB">Foods</NavLink>
      </li>
      <li className="mx-1 mb-1 lg:mb-0 ">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mx-1 mb-1 lg:mb-0 ">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MealDB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div onClick={darkToggle} className="navbar-end">
          <a className="btn">{
            dark ? 'Light Theme' : 'Dark Theme'
            }</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
