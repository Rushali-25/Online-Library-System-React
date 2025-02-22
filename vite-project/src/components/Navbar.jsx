import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300">
          Online Library
        </Link>
        
        {/* Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Home||
          </Link>
          <Link
            to="/books"
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Browse Books||
          </Link>
          <Link
            to="/add-book"
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
