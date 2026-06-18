import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {successAlert,errorAlert} from "../utils/swal";
import images from "../assets/images";
import IdeaCard from "../components/IdeaCard";
import axios from "axios";

const InvestorDash = () => {

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const [data, setdata] = useState(null);
  const navigate = useNavigate();

const handleLogout = ()=>{
localStorage.removeItem("token");
successAlert("You have logged out successfully");
navigate('/')
}

  const getBusiness = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/business`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
if (res.data.user.role !== "Investor") {
  return errorAlert("Investor is not logged in !")
} 
      setdata(res.data);
      
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBusiness();
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#0D1117] px-4 py-5 sm:px-6 md:px-10 lg:px-16 overflow-x-hidden">

      {/* Top Bar */}
      <div className="w-full flex  items-center justify-between gap-4 mb-8">

        {/* Logo */}
        <div className="flex flex-col items-center text-[#4ADE80] font-bold text-sm sm:text-base">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded invert mb-1"
            src={images.logo}
            alt="logo"
          />
          Investo
        </div>

        {/* Dashboard Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E5E7EB] text-center">
          Investor Dashboard
        </h1>

        {/* Logout Button */}
        <button onClick={handleLogout} className="bg-red-400 px-2 py-2 text-sm sm:text-base text-white font-semibold rounded-md hover:bg-red-500 transition-colors cursor-pointer w-full sm:w-auto">
          Logout
        </button>
      </div>

      {/* Welcome Section */}
      <div className="w-full flex justify-center items-center flex-col mt-2 gap-3">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5E7EB] text-center break-words">
          Hii, {data?.user?.name || "User"}
        </h1>

      </div>

      {/* Business Ideas Section */}
      <div className="bg-[#161B22] p-4 sm:p-6 mt-8 w-full rounded-xl shadow-md">

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E5E7EB] border-b border-[#4ADE80] pb-4 mb-6">
          Business Ideas
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">

          {data?.response ? (
            data.response.map((element, index) => (
              <IdeaCard key={index} data={element} user={data.user}  />
            ))
          ) : (
            <p className="text-gray-400 col-span-full">Loading ideas...</p>
          )}
        </div>

      </div>

    </section>
  );
};

export default InvestorDash;