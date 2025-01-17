import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import img from "../components/logo.webp";

function Sidebar() {


  return (
    <div className="flex min-h-screen">
      <div
        className={`w-36 h-screen  bg-gray-800 text-black-700 font-bold  text-2xl  flex flex-col items-center transition-all duration-300 xl:w-52 md:w-28 sm:w-24`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center mt-6  py-4">
          <img
            src={img}
            alt="Logo"
            className="w-28 h-28 rounded-full  "
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-16 mt-28 items-center w-full text-white" >


          <NavLink
            className="text-2xl font-medium hover:underline transition duration-300 "
            to="/home"
          >
            <MdHome className='inline-block text-3xl me-2'/>
            Home
          </NavLink>
        

          <NavLink
            className="text-2xl font-medium hover:underline transition duration-300 "
            to="/student"
          >
            <IoBook className='inline-block text-2xl me-2'/>
            Students
          </NavLink>

          <NavLink
            className="text-2xl font-medium hover:underline transition duration-300"
            to="/teacher"
          >
          <GiTeacher className='inline-block text-2xl me-2'/>
            Teachers
          </NavLink>
          <NavLink
            className="text-2xl font-medium hover:underline transition duration-300"
            to="/admin"
          >
<MdAdminPanelSettings className='inline-block text-2xl me-2'/>
                      Admin
          </NavLink>

          <NavLink
            className="text-2xl font-medium hover:underline transition duration-300"
            to="/login"
          >
            <RiLoginBoxFill className='inline-block text-2xl me-2'/>
            Login
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
