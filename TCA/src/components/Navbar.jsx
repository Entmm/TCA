import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">THIRD ACADEMY</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-purple-500 transition">Home</a>
          <a href="#courses" className="text-white hover:text-purple-500 transition">Courses</a>
          <a href="#co-builders" className="text-white hover:text-purple-500 transition">Co-Builders</a>
          <a href="#library" className="text-white hover:text-purple-500 transition">Library</a>
          <a href="#careers" className="text-white hover:text-purple-500 transition">Careers</a>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition hidden md:block">Login</button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black py-4">
          <a href="#home" className="block text-white hover:text-purple-500 transition px-4 py-2">Home</a>
          <a href="#courses" className="block text-white hover:text-purple-500 transition px-4 py-2">Courses</a>
          <a href="#co-builders" className="block text-white hover:text-purple-500 transition px-4 py-2">Co-Builders</a>
          <a href="#library" className="block text-white hover:text-purple-500 transition px-4 py-2">Library</a>
          <a href="#careers" className="block text-white hover:text-purple-500 transition px-4 py-2">Careers</a>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition mt-4 w-full">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
