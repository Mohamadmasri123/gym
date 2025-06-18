import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const News = () => {
  return (
    <div className=" md:px-16 lg:px-16 px-4 pb-10 ">
      <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8 text-center">
        <motion.h1
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Get 20% Discount On Your First Order, Are You Ready To Buy
        </motion.h1>
        <motion.p
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="text-gray-600 mb-2"
        >
          We will make sure you get the right and the best quality products for
          your workout
        </motion.p>
        <motion.div
          variants={SlideLeft(0.9)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex gap-3"
        >
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded transition-transform duration-200 hover:scale-110 ">
            Learn More{" "}
          </button>
          <button className="mt-4 px-6 py-2  text-primary border border-primary font-semibold rounded ">
            Stay in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
