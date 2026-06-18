import React from 'react'
import images from "../assets/images";
import { scroll } from "../utils/framerVarient/variants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-6 md:px-10 py-10 bg-[#0D1117]"
    >

      <div className="bg-[#161B22] p-5 sm:p-6 md:p-8 rounded-lg">

        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scroll}
          className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] border-b border-[#4ADE80] pb-3 inline-block"
        >
          About
        </motion.h1>

        {/* Sub Heading */}
        <p className="text-[#E5E7EB] text-sm sm:text-base font-medium mt-4">
          Where Ideas Meet Opportunity.
        </p>

        {/* Description */}
        <p className="text-[#9CA3AF] text-sm sm:text-base leading-7 text-justify mt-4 max-w-[1200px]">
          At Investo, we believe every great idea deserves the chance to shine.
          Entrepreneurs can share their vision, attract investor interest, and
          bring their dreams to life. Investors get exclusive access to fresh,
          innovative opportunities and the chance to support the next generation
          of game-changing businesses. Together, we build a community where
          innovation thrives.
        </p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8">

          {/* Image */}
          <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={images.about}
              alt="about"
            />
          </div>

          {/* List */}
          <div className="w-full lg:w-1/2 bg-[#0D1117] p-5 sm:p-6 rounded-lg flex items-center">
            <ul className="list-disc list-inside text-sm sm:text-base text-[#9CA3AF] space-y-4 marker:text-[#4ADE80] leading-7">

              <li>
                Entrepreneurs showcase their ideas and attract investor interest.
              </li>

              <li>
                Investors gain exclusive access to innovative opportunities.
              </li>

              <li>
                Support the next generation of game-changing businesses.
              </li>

              <li>
                Foster a thriving community where innovation flourishes.
              </li>

            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About