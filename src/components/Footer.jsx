import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black"> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-16 lg:px-16 px-4 py-10">
      
      <div className=""> 
        <h1 className=" flex items-center gap-2 text-xl font-bold text-white mb-4">
          {" "}
          <FaDumbbell className="" />
          <p className=" ">
            CODERS <span className=" text-secondary"> GYM </span>{" "}
          </p>
        </h1>
        <p className="text-gray-100">
          Your ultimate destination for fitness and wellness. Join us to
          transform your body and mind.
        </p>
        <div className="flex text-white gap-4 mt-4">
          <FaLocationDot size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
      <div className="lg:pl-16">
        <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
        <ul className="text-gray-100">
          <li className="mb-2 hover:text-secondary cursor-pointer">Home</li>
          <li className="mb-2 hover:text-secondary cursor-pointer">About Us</li>
          <li className="mb-2 hover:text-secondary cursor-pointer">Services</li>
          <li className="mb-2 hover:text-secondary cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
        <p className="flex items-center gap-2 text-gray-100 mb-4">
          {" "}
          
          <MdEmail size={20} /><span className=" text-gray-300">gym2@gmail.com</span>{" "}
        </p>
        <p className=" flex  items-center gap-2 text-gray-100 mb-4">
          {" "}
         <FaPhone  size={20} /><span className="">81092718 </span>{" "}
        </p>
        <p className="flex  items-center gap-4 text-gray-100 mb-4">
          {" "}
          <IoMdHome size={20} /> <span className="">Tripoli</span>{" "}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Subscribe</h2>
        <p className="text-gray-100 mb-4">
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button className="bg-secondary text-white p-2 rounded hover:bg-secondary-dark transition duration-300">
            Subscribe
          </button>
        </form>
      </div>

     
    </div> 
    <div className=" py-4 text-gray-300 border-t-2  border-gray-400 text-center flex  items-center justify-center gap-1">
      @copyright 2025 By Programmer  <span className="text-primary flex items-center gap-1">  <IoIosCode />  Mohamad Masri </span> 

      </div>
      </div>
  );
};

export default Footer;
