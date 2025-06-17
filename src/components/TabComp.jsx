import React from "react";
import { ProductsData } from "../mockData/data";
import { motion } from "framer-motion";

const TabComp = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];
  const filteredCareds =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <div className="py-16 px-4 md:px-16 lg:px-16">
      {/* tabs */}
      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 mr-2 rounded-lg ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCareds.map((card) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            key={card.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={card.image}
              alt=""
              className="h-[300px] w-full object-cover"
            />
            <p className=" text-2xl font-semibold font-playfair py-2">
              {card.category}
            </p>
            <p className=" text-gray-700">{card.info}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TabComp;
