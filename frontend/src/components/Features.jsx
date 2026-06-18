import React from 'react'
import FeaturesCard from "../components/FeaturesCard"
import { scroll } from "../utils/framerVarient/variants"
import { motion } from "framer-motion"

const Features = () => {

  const featuresData = [
    {
      title: "Connect Investors & Entrepreneurs",
      description:
        "Bridge the gap between investors and innovative business ideas to spark new opportunities."
    },
    {
      title: "Investors Show Interest",
      description:
        "Investors can easily express interest in businesses and stay updated on potential ventures."
    },
    {
      title: "Entrepreneurs Post Ideas",
      description:
        "Entrepreneurs can share their vision and attract attention from the right investors."
    },
    {
      title: "Community of Innovators",
      description:
        "Be part of a growing ecosystem where ideas thrive and collaborations happen."
    }
  ];

  return (
    <section
      id="features"
      className="min-h-screen px-4 sm:px-6 md:px-10 py-10 bg-[#0D1117]"
    >

      <div className="bg-[#161B22] p-5 sm:p-6 md:p-8 rounded-lg">

        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scroll}
          className="text-3xl sm:text-4xl font-bold text-[#E5E7EB] border-b border-[#4ADE80] pb-3 mb-8 inline-block"
        >
          Features
        </motion.h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">

          {
            featuresData.map((element, index) => (
              <FeaturesCard
                key={index}
                number={index + 1}
                data={element}
              />
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Features