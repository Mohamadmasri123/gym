import React from "react";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";

const Banner = ({img,title,subtitle,link}) => {
  return (
    <div className="bg-gray-100 lg:mx-16 rounded-1xl shadow-lg my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:px-16 lg:px-16 items-center">
        <div className=" flex items-center justify-center ">
          {" "}
          <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type:"spring", stiffness: 100, delay: 1 }}
          src={img} alt="" className="w-[400px] md:max-w-[300px] xl:min-w-[300px] h-full object-cover " />{" "}
        </div>
        <div className="flex flex-col justify-center items-start space-y-6 p-6">
          <motion.h1
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-2xl sm:text-2xl  md:text-2xl lg:text-3xl font-bold text-gray-800 font-playfair "
          >
           {title}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
          >
{subtitle}
          </motion.p>
          <motion.button
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="mt-4 px-6 py-2 bg-primary text-white rounded "
          >
           {link}
          </motion.button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Banner;
