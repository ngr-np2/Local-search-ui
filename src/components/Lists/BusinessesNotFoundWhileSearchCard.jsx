import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const BusinessesNotFoundWhileSearchCard = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
  return (
    <motion.div
      id="1"
      className="map-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="  pt-8 pb-5 mx-auto max-w-screen-lg bg-white rounded-xl border-2 border-gray-100">
        <div className="flex relative gap-4 items-start px-4 pt-4 pb-0 max-sm:flex-col sm:px-6 lg:px-8">
          <div className="flex flex-wrap w-full">
            <div className="flex-[2]">
              <div className="flex gap-1 items-center mb-1 font-medium text-gray-700 text-start sm:text-lg">
                <h3 className="text-2xl font-bold text-gray-600 font-font-8">
                  Businesses Not found 
                </h3>
              </div>
              <p className="text-lg text-gray-600 line-through text-start font-font-4">
                {path}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessesNotFoundWhileSearchCard;
