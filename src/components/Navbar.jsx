import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Admin from '../pages/Admin';
import img from '../components/logo.webp';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
  
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src={img}
            alt="Logo"
          />
          <span className="text-xl font-bold">Nirmala School</span>
        </div>

        <nav className=" navbar hidden md:flex flex-1 justify-center space-x-32">


          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to={Admin}
          >
            Home
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        

          <div className="flex-none float-end gap-10">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>



        </nav>

    
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 py-4">
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/courses"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-red-500 transition duration-300"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
