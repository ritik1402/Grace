import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" font-ramaraja  nav flex justify-between p-2 text-white bg-gray-700  shadow-lg items-center px-4 py-4">
      <h1 className="nav-head text-3xl hover:scale-110 transition-transform ease-in-out duration-500 font-semibold    text-orange-700">
        Grace{" "}
      </h1>
      <div className="nav-link ">
        <ul className="flex justify-between gap-4 text-2xl">
          <li className="nav-item hover:scale-105 text-orange-700">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item hover:scale-105 text-orange-700 ">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item hover:scale-105 text-orange-700 ">
            <Link to="/facilities">Facilities</Link>
          </li>
          <li className="nav-item hover:scale-105 text-orange-700">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
