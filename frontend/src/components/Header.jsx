import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { header, nav } from "../utils/framerVarient/variants"
import { motion } from "framer-motion";
import { CgMenuRight, CgClose } from "react-icons/cg";
import images from "../assets/images"

const Header = () => {

  const [menuOpen, setmenuOpen] = useState(false)

  const menus = [
    {
      to: "#home",
      name: "Home"
    },
    {
      to: "#about",
      name: "About"
    },
    {
      to: "#features",
      name: "Features"
    }
  ]

  // renderMenuItems
  const renderMenuItems = (className) =>
    menus.map((item, idx) => (
      <a
        key={idx}
        href={item.to}
        className={className}
        onClick={() => setmenuOpen(false)}
      >
        {item.name}
      </a>
    ))

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.3
      }}
      className="sticky top-0 w-full bg-[#161B22] px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between z-50"
    >

      {/* Logo */}
      <motion.div
        variants={header}
        className="text-[#E5E7EB] flex items-center gap-2"
      >
        <img
          className="w-8 h-8 sm:w-9 sm:h-9 rounded invert"
          src={images.logo}
          alt="logo"
        />

        <h1 className="text-[20px] sm:text-[24px] font-bold">
          investo
        </h1>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        variants={header}
        className="hidden md:flex items-center gap-6 lg:gap-8 text-[#9CA3AF] text-[15px] lg:text-[16px]"
      >
        {renderMenuItems("hover:text-[#4ADE80] duration-300")}

        <Link
          className="hover:text-[#4ADE80] duration-300"
          to="/login"
        >
          Login
        </Link>
      </motion.div>

      {/* Hamburger */}
      <motion.button
        onClick={() => setmenuOpen(!menuOpen)}
        variants={header}
        className="md:hidden text-[#E5E7EB] text-[28px]"
      >
        {
          menuOpen
            ? <CgClose />
            : <CgMenuRight />
        }
      </motion.button>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <motion.div
            variants={nav}
            initial="hidden"
            animate="visible"
            className="absolute top-full left-0 w-full bg-[#161B22] flex flex-col items-center gap-6 py-6 text-[#9CA3AF] text-[18px] md:hidden shadow-lg"
          >
            {renderMenuItems("hover:text-[#4ADE80] duration-300")}

            <Link
              className="hover:text-[#4ADE80] duration-300"
              to="/login"
              onClick={() => setmenuOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        )
      }

    </motion.div>
  )
}

export default Header