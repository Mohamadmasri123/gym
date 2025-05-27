import React from "react";
import bg from "../assets/dumbell-Bcy4gPfV.png";
import { CiPlay1 } from "react-icons/ci";


const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-24 px-4 md:px-16 lg:px-16 ">
      <div className=" flex flex-col justify-center   ">
        <div className="flex-center space-y-8">
          <h1 className=" text-3xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold text-gray-800">
            Gym Gives you the perfect{" "}
            <span className="text-primary "> Health</span>
          </h1>
          <p className="text-gray-600 mt-2">
            It is a long established fact that a reader will be by readable
            content of a page when are the best product.
          </p>
        </div>
        <div className="flex ml-13 mt-6 lg:ml-0 md:ml-0  ">
          {" "}
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded ">
            Order Now
          </button>
          <button className="mt-4 px-6 py-2 flex items-center gap-2 "> <CiPlay1 />Watch Now</button>
        </div>
      </div>

      <div className="mt-10 lg:pl-16  ">
        <img src={bg} alt="bg-gym" />
      </div>
    </div>
  );
};

export default Hero;
