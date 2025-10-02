import React from "react";
import { motion } from "framer-motion";

const SplitShowcase = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-8 sm:gap-12 max-w-6xl mx-auto">
      {/* Left: Infographic Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full"
      >
        <img
          src="/2.png"
          alt="Infographic"
          className="w-full max-w-md md:max-w-full mx-auto rounded-3xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full space-y-4 sm:space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1f44]">
          For Candidates & Employers
        </h2>
        <ul className="list-disc list-inside text-[#0a1f44] space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Candidates:</strong> Tailored roles, career growth, instant opportunities.
          </li>
          <li>
            <strong>Employers:</strong> Elite talent, faster hiring, scalable solutions.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default SplitShowcase;
