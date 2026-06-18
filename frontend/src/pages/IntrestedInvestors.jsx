import React from 'react'
import images from "../assets/images";
import InvestorsCard from "../components/InvestorsCard";
import axios from "axios"
import {
  IoMdArrowRoundBack
} from "react-icons/io";
import { Link,useLocation } from "react-router-dom";

const IntrestedInvestors = () => {

const location = useLocation();
const IntrestedInvestorsIds = location.state?.intrestedInvestorsIds || []

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start bg-[#0D1117] px-3 py-4 sm:px-6 md:px-10 lg:px-16">

      {/* Top Bar & Logo */}
      <div className="w-full flex justify-between items-center mb-5 sm:mb-6">

        <Link
          to="/entrepreneurDash"
          className="text-[#E5E7EB] text-2xl sm:text-3xl hover:text-[#4ADE80] transition-colors"
        >
          <IoMdArrowRoundBack />
        </Link>

        {/* Logo */}
        <div className="flex flex-col items-center text-[#4ADE80] font-bold text-sm sm:text-base">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded invert mb-1"
            src={images.logo}
            alt="logo"
          />
          Investo
        </div>

      </div>

      {/* Business Ideas Section */}
      <div className="bg-[#161B22] p-3 sm:p-4 mt-2 sm:mt-4 w-full rounded-xl">

        <h1 className="text-xl sm:text-2xl font-bold text-[#E5E7EB] border-b border-[#4ADE80] pb-4 mb-4 break-words">
          Intrested Investors
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 pt-2 sm:pt-4">
        
{IntrestedInvestorsIds.length > 0? (
IntrestedInvestorsIds.map((item,idx) => {
  return <InvestorsCard key={idx} investor={item}/>
})
) : (
<p className="col-span-full text-center text-[#9CA3AF] text-lg sm:text-xl mt-10">No investors have shown intrest yet.</p>
)}



        </div>

      </div>

    </section>
  )
}

export default IntrestedInvestors