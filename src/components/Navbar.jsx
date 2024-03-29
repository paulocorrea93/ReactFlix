import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          PAULOFLIX
        </h1>
      </Link>
      <div>
        <Link to="logIn">
          <button className="text-white pr-4">Sing In</button>
        </Link>
        <Link className="text-white" to="singUp">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
            Sing Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
