import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D1117] border-t border-gray-800">

      <div className="px-4 sm:px-6 md:px-10 py-4 text-center">

        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-6">
          &copy; {new Date().getFullYear()} Investo. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer