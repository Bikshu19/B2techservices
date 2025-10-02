import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";




const Hero = () => {
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e5f6fb] to-[#d0f0fa] py-20 sm:py-28 px-4 sm:px-6 md:px-12">
      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-white rounded-t-[50%]"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1f44] leading-snug sm:leading-tight md:leading-tight">
            Right Job. Right Candidate. <br /> Right Now.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#0a1f44]">
            Recruitment reimagined with precision, speed, and unmatched quality.
          </p>
          <Button className="px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl">
            Get Started
          </Button>
        </motion.div>

        {/* Image with Rounded & Curved Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="overflow-hidden rounded-3xl shadow-lg w-80 sm:w-96 md:w-full">
            <img
              src="/1.webp"
              alt="Recruitment Infographic"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
