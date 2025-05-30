import React from "react";
import hero from "../assets/dumbell-Bcy4gPfV.png";
import { CiPlay1 } from "react-icons/ci";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../utility/animation";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16 px-4 md:px-16 lg:px-16 ">
      <div className=" flex flex-col justify-center   ">
        <div className="flex-center space-y-10">
          <motion.h1
            variants={SlideRight(0.3)}
            initial="hidden"
            animate="visible"
            className=" text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-gray-800"
          >
            Gym Gives you the perfect{" "}
            <span className="text-primary "> Health</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(1)}
            initial="hidden"
            animate="visible"
            className="text-gray-600 mt-2"
          >
            It is a long established fact that a reader will be by readable
            content of a page when are the best product.
          </motion.p>
        </div>
        <motion.div
          variants={SlideRight(1.6)}
          initial="hidden"
          animate="visible"
          className="flex ml-13 mt-6 lg:ml-0 md:ml-0 gap-2 "
        >
          {" "}
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded ">
            Order Now
          </button>
          <button className="mt-4 px-6 py-2 flex items-center gap-2 border border-dotted border-amber-600 ">
            {" "}
            <CiPlay1 />
            Watch Now
          </button>
        </motion.div>
      </div>

      <div className="mt-10 lg:pl-16   ">
        <motion.img
          variants={SlideLeft(0.5)}
          initial={{ opacity: 0, x: 100 }}
          animate="visible"
          src={hero}
          alt="bg-gym"
          className="drop-shadow"
        />
      </div>
    </div>
  );
};

export default Hero;
