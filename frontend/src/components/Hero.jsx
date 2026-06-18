import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
import { hero } from "../utils/framerVarient/variants";
import {useNavigate} from "react-router-dom"

const Hero = () => {
const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images.heroImg})` }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.4,
          delayChildren: 0.5,
        }}
        className="min-h-screen w-full bg-black/60 flex items-center justify-center flex-col text-center px-4 sm:px-6 md:px-10"
      >

        {/* Heading */}
        <motion.h1
          variants={hero}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] leading-tight max-w-[900px]"
        >
          Invest in Innovation
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={hero}
          className="text-sm sm:text-base md:text-lg text-[#9CA3AF] mt-4 max-w-[700px] leading-7"
        >
          Discover the next big idea. Connect with ambitious founders,
          explore growing startups, and turn vision into value.
          <span className="font-bold text-[#4ADE80]"> Investo</span>
          {" "}makes every opportunity count.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={hero}
          className="mt-8 sm:mt-10 bg-[#4ADE80] hover:bg-[#3FC16E] text-[#161B22] px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base duration-300"
onClick={()=> navigate("/login")}
        >
          Get Started
        </motion.button>

      </motion.div>
    </section>
  );
};

export default Hero;