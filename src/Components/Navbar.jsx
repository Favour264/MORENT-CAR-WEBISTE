import React, { useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed z-50 top-0 left-0 right-0 p-5 bg-white shadow-md'>
      <div className='flex justify-between items-center w-full px-6'>
        {/* Logo */}
        <div className="logo text-2xl font-bold">
          <h1>MORENT</h1>
        </div>

        {/* Search Box - Hidden on small screens */}
        <div className="hidden md:flex w-1/3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 w-full rounded-lg border border-gray-300"
          />
        </div>

        {/* Icons and Links - Hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          <span><Link to="/">Home</Link></span>
          <span><Link to="/">Vehicles</Link></span>
          <span><Link to="/">Details</Link></span>
          <span><Link to="/">About Us</Link></span>
          <span><Link to="/">Contact Us</Link></span>
          <div className="flex gap-4 items-center">
            <IoIosHeartEmpty size={24} />
            <FaBell size={20} />
            <IoMdSettings size={24} />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <IoClose size={30} onClick={handleToggle} className="cursor-pointer" />
          ) : (
            <IoMenu size={30} onClick={handleToggle} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 w-full rounded-lg border border-gray-300"
          />
          <div className="flex flex-col gap-4">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/">Vehicles</Link></span>
            <span><Link to="/">Details</Link></span>
            <span><Link to="/">About Us</Link></span>
            <span><Link to="/">Contact Us</Link></span>
          </div>
          <div className="flex gap-4 mt-4">
            <IoIosHeartEmpty size={24} />
            <FaBell size={20} />
            <IoMdSettings size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
