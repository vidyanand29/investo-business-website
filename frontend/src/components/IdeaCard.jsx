import React from "react";
import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {
  successAlert,
  errorAlert
} from "../utils/swal";

const IdeaCard = ({ data, user, onDelete}) => {
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const navigate = useNavigate()
const [idea, setidea] = useState(data)

const handleDeleteIdea = async()=>{
const token = localStorage.getItem("token");
try{
const res = await axios.delete(`${BASE_URL}/business/${data._id}`,{
headers:{
Authorization:`Bearer ${token}`
}
})
successAlert(res.data.message);
onDelete(data._id)
}catch(err){
errorAlert(err.response.data.message)
}
}

const handleIntrest = async()=>{
const token = localStorage.getItem("token");
try{
const res = await axios.post(`${BASE_URL}/business/${data._id}`,{},{
headers:{
Authorization:`Bearer ${token}`
}})
setidea(res.data.data)
successAlert(res.data.message)
}catch(err){
errorAlert(err.response.data.message)
}
}

const handleIntrestedInvestors =()=>{
navigate("/intrestedInvestors",{
state:{
intrestedInvestorsIds:idea.intrestedInvestors
}
})

}

  return (
    <div className="bg-[#161B22] border border-[#2D333B] rounded-xl p-4 sm:p-5 shadow-md text-[#E5E7EB] w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-sm hover:border-[#4ADE80] transition-all duration-300">

      {/* Title + Industry */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#E5E7EB] mb-2 break-words">
          {idea?.title}
        </h2>
        <span className="bg-[#4ADE80]/20 text-[#4ADE80] text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium">
          {idea?.industry}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#9CA3AF] text-sm sm:text-base leading-6 mb-5">
        {idea?.description}
      </p>

      {/* Funding */}
      <div className="bg-[#0D1117] rounded-lg p-3 mb-5 border border-[#2D333B]">
        <p className="text-[#9CA3AF] text-sm mb-1">
          Funding Required
        </p>
        <h3 className="text-[#4ADE80] text-lg sm:text-xl font-bold break-words">

          ₹ {idea?.fundingRequired ? data.fundingRequired.toLocaleString() : "0"}
        </h3>
      </div>

      {/* Investors */}
      <div className="mb-5">
        <p className="text-[#9CA3AF] text-sm">
          Interested Investors
        </p>
        <p className="text-[#E5E7EB] font-semibold mt-1 text-sm sm:text-base">
          {/* FIX: Optional chaining lagayi taaki array khali hone par crash na ho */}
          {idea?.intrestedInvestors?.length || 0} Investors
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#2D333B] pt-4 flex flex-col gap-3">
        <p className="text-[11px] sm:text-xs text-[#6B7280] text-center">
          {/* FIX: Date ko readable format mein convert kiya */}
          Posted on {idea?.createdAt ? new Date(data.createdAt).toLocaleDateString("en-IN",{
day:"numeric",
month:"short",
year:"numeric"
}) : "N/A"}
        </p>

        {/* Role Based Buttons */}
        {/* FIX: user?.role kiya taaki agar data loading mein ho toh crash na ho */}
        {user?.role === "Entrepreneur" ? (
          <div className="flex flex-col sm:flex-row gap-2">
            <button onClick={handleIntrestedInvestors} className="flex-1 bg-[#4ADE80] hover:bg-[#3FC16E] text-[#0D1117] py-2 rounded-md text-sm font-semibold transition-colors">
              View Interested
            </button>
            <button onClick={handleDeleteIdea} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold transition-colors">
              Delete
            </button>
          </div>
        ) : (
          <button onClick={handleIntrest} className="w-full bg-[#4ADE80] hover:bg-[#3FC16E] text-[#0D1117] py-2 rounded-md text-sm font-semibold transition-colors">
            Show Interest
          </button>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;