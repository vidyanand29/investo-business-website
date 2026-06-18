import React from 'react'
import images from "../assets/images";
const Loading = () => {
  return (
        <div className="h-screen flex flex-col items-center justify-center text-[#4ADE80] font-bold text-sm sm:text-base">
      <div className="w-10 h-10 rounded-full bg-[#4ADE80] animate-ping"></div>
  </div>
  )
}

export default Loading