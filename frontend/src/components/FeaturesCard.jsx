import React from 'react'

const FeaturesCard = ({ number, data }) => {
  return (
    <div
      className="relative flex flex-col justify-center gap-4 bg-[#0D1117] rounded-lg p-4 sm:p-5 md:p-6 mt-6 h-auto sm:h-56 md:h-64 transition-transform duration-300 hover:scale-[1.03]"
    >

      {/* Number Badge */}
      <span className="absolute -top-5 left-5 sm:-top-6 sm:left-6 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-[#E5E7EB] rounded-full bg-[#161B22] border border-[#4ADE80]">
        {number}
      </span>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#E5E7EB] leading-snug mt-6">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base text-[#9CA3AF] text-justify leading-6">
        {data.description}
      </p>

    </div>
  )
}

export default FeaturesCard