import React from "react";
import { GrYoga } from "react-icons/gr";
import { IoMdFitness } from "react-icons/io";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const EquipmentData = [
  {
    id: 1,
    name: "Yoga Mat",
    icon: <GrYoga size={35} />,
    description: "A comfortable mat for yoga practice.",
    delay: 0.3,
  },
  {
    id: 2,
    name: "Muscle Dumbbells",
    icon: <IoMdFitness size={35} />,
    description: "Adjustable dumbbells for strength training.",
    delay: 0.6,
  },
  {
    id: 3,
    name: "Gym Bag",
    icon: <GiGymBag size={35} />,
    description: "A spacious bag to carry your gym essentials.",
    delay: 0.9,
  },
];

const Equipment = () => {
  return (
    <div className="px-4 md:px-16 lg:px-16  py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="space-y-6 p-6">
          <h1 className="text-3xl md:text-4xl  font-bold mb-6 font-playfair ">
            What we offer for you
          </h1>
          <p className="text-gray-500 ">
            {" "}
            It is a long established fact that a reader readable{" "}
          </p>
        </div>

        {EquipmentData.map((item) => (
          <motion.div
            variants={SlideLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            key={item.id}
            className="bg-accent shadow-lg rounded-lg p-6 mb-6 transition-transform transform  hover:bg-white "
          >
            <div className="flex flex-col space-y-6">
              {item.icon}

              <h2 className="text-3xl font-semibold font-playfair">
                {item.name}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
