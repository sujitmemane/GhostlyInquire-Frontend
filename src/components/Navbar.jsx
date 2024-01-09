import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="bg-black text-white ">
      <div class="px-5 py-5 mx-auto ">
        <div class="relative flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl md:text-3xl font-black text-white uppercase">
              Ghostly Inquire
            </h1>
          </Link>

          <ul className=" items-center  font-thin space-x-4  flex">
            <li>
              <Link
                to="/register"
                className="inline-flex cursor-pointer items-center justify-center h-8  md:h-12 px-6 tracking-wide text-md font-thin transition duration-200 rounded shadow-md bg-white text-black  focus:shadow-outline focus:outline-none"
              >
                Make Your Own
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
