import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./index"; // Adjust the path if necessary
import { logo, logo2 } from "../assets";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" pb-3 px-6 bg-white flex w-[1400px] justify-between">
        <div className="  pl-11  flex justify-center">
          <img className="pr-4 w-[250px]" src={logo} alt="logo" />
          <h1 className="flex flex-col mt-3 focus-franklin font-medium text-primary justify-start">
            <h1>Sri Sai Enterprises </h1>
            <h2>Manufacturer of HVAC Products since 2000</h2>
          </h1>
        </div>
        <div className="pr-11 flex justify-center ">
          {" "}
          {/* Full width for centering */}
          <ul className="list-none text-primary font-bold flex items-center space-x-4">
            {" "}
            {/* Navigation items */}
            {navLinks.map((link) => (
              <li className="pr-2 pl-2" key={link.id}>
                <Link
                  to={`/${link.id}`}
                  className="hover:text-[#ed1c24] hover:underline relative inline-block transition-transform duration-200 transform hover:scale-110"
                >
                  {/* hover:bg-secondary */}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
