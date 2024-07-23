import { motion } from "framer-motion";
import React from "react";

const Slider = ({ images }) => {
  const imagesArr = [...images, ...images];
  return (
    <div>
      <div className="   bg-gray-600 h-[80px]  overflow-hidden mx-auto max-w-screen-xl">
        <div className="absolute inset-0 z-20 "></div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {imagesArr.map((image, index) => (
            <div key={index} className="h-full flex-shrink-0">
              <div className="flex items-center justify-center h-[80px]">
                <img
                  src={image.logo}
                  alt={image.name}
                  className="h-full  object-contain max-w-full opacity-75"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
