import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-gray-600">
        <h2 className="text-5xl font-extrabold  text-black font-serif">W.</h2>
        <ul className="flex space-x-6 text-lg font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">New</li>
          <li className="hover:text-gray-300 cursor-pointer">Popular</li>
          <li className="hover:text-gray-300 cursor-pointer">Trending</li>
          <li className="hover:text-gray-300 cursor-pointer">Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
