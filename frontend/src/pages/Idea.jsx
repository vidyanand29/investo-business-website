import React from "react";
import {useState,useEffect} from "react";
import {
  Link
} from "react-router-dom";
import {
  IoMdArrowRoundBack
} from "react-icons/io";
import images from "../assets/images";
import axios from "axios"
import {
  successAlert,
  errorAlert
} from "../utils/swal";
import {useNavigate} from "react-router-dom"
import {industries} from "../constants/industries"

const Idea = () => {
const navigate = useNavigate()
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const [formData, setformData] = useState({
	title: "",
	description: "",
	fundingRequired: "",
	industry: ""
})

const handleChange = (e)=>{
const {name,value} = e.target
setformData((prev)=>({
...prev,
[name]:value
}))
}

const handleSubmit = async(e)=>{
e.preventDefault()
try{
const token = localStorage.getItem("token")
const res = await axios.post(`${BASE_URL}/business/idea`,formData,
{
headers:{
Authorization:`Bearer ${token}`
}
})
successAlert(res.data.message);
navigate("/entrepreneurDash")
}catch(err){
errorAlert(err.response.data.message)
}


}

useEffect(() => {
 handleSubmit();
}, [])



  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#0D1117] px-3 py-4 sm:px-4 md:py-10">

      {/* Top Bar */}
      <div className="w-full max-w-md flex justify-between items-center mb-5 sm:mb-6">

        {/* Back Button */}
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

      {/* Submit Idea Form */}
      <form onSubmit={handleSubmit} className="bg-[#161B22] w-full max-w-md flex flex-col px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-md">

        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-4">
          Submit Idea
        </h1>

        {/* Business Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Business Title"
          className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
        />

        {/* Description */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Business Description"
          rows="4"
          className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117] resize-none"
        ></textarea>

        {/* Funding Required */}
        <input
          type="number"
          name="fundingRequired"
          value={formData.fundingRequired}
          onChange={handleChange}
          placeholder="Funding Required"
          className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
        />

        {/* Industry Dropdown */}
        <select
          name="industry"
          onChange={handleChange}
          value={formData.industry}
          className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
        >
          <option value="" disabled>
            Select Industry
          </option>

{
industries.map((element, index) => <option key={index} value={element}>{element}</option>)
}
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#4ADE80] w-full mt-4 py-3 text-sm sm:text-base text-[#0D1117] font-semibold rounded-md hover:bg-[#3FC16E] transition-colors cursor-pointer"
        >
          Submit Idea
        </button>

        {/* Bottom Text */}
        <p className="text-[#E5E7EB] text-center text-xs sm:text-sm mt-3">
          Share your startup idea with investors 🚀
        </p>

      </form>
    </section>
  );
};

export default Idea;