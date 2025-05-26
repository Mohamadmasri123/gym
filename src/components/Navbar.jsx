import React from "react";
import { NavbarMenu } from "../mockData/data";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav >
      <div className="flex justify-between items-center md:px-16 lg:px-16 px-4 py-6 ">
        <div className=" text-1xl gap-2 font-bold flex items-center uppercase ">
          <FaDumbbell className="text-gray-600" />
          <p className=" text-gray-600">
            CODERS <span className=" text-secondary"> GYM </span>{" "}
          </p>
        </div>
        <div className="hidden md:block">
          <ul>
            {NavbarMenu.map((item) => (
              <li key={item.id} className="inline-block mx-4">
                <a
                  href={item.url}
                  className=" text-gray-600 font-semibold  hover:text-secondary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button className="mx-4">
            <FaSearch size={20} className=" text-2xl text-gray-600" />
          </button>
          <button className="mx-4">
            <PiShoppingCartFill size={25} className=" text-2xl text-gray-600" />
          </button>
          <button className="mx-4 hidden md:block text-secondary  border-2 border-secondary rounded font-semibold  px-4 py-2 hover:bg-secondary hover:text-white duration-200">
            Login
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="mx-4 block md:hidden text-secondary  border-2 border-secondary rounded font-semibold  px-4 py-2 hover:bg-secondary hover:text-white duration-200"
          >
            <IoMenu />
          </button>
          <ResponsiveMenu open={open}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
