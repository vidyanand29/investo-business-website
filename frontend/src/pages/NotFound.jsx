import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#0D1117] px-4">

      <div className="bg-[#161B22] border border-[#2D333B] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-md text-center">

        {/* Error Code */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#4ADE80] mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-3">
          Page Not Found
        </h2>

        <p className="text-[#9CA3AF] text-sm sm:text-base leading-6 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-block w-full sm:w-auto bg-[#4ADE80] hover:bg-[#3FC16E] text-[#0D1117] px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Go To Home
        </Link>

      </div>

    </section>
  );
};

export default NotFound;