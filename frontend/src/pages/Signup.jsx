import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  IoMdArrowRoundBack
} from "react-icons/io";
import images from "../assets/images";
import {useState} from "react";
import axios from "axios"
import {
  successAlert,
  errorAlert
} from "../utils/swal";
import {useNavigate} from "react-router-dom";
import {industries} from "../constants/industries"

const Signup = () => {

const navigate = useNavigate();

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData,
    setformData] = useState( {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      role: "",
      interests: "",
      budgetRange: {
        min: "",
        max: ""
      }
    })

  const handleChange = (e)=> {
    const {
      name,
      value
    } = e.target;
    setformData((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const handleBudgetChange = (e)=> {
    const {
      name,
      value
    } = e.target;
    setformData((prev)=>({
      ...prev,
      budgetRange: {
        ...prev.budgetRange,
        [name]: value
      }
    }))
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/users/signup`, formData)
      successAlert(res.data.message);
      navigate('/login')
    }catch(err) {
      errorAlert(err.response.data.message)
    }
  }


  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#0D1117] px-3 py-4 sm:px-4 md:py-10">

      {/* Top Bar: Back button & Logo */}
      <div className="w-full max-w-md flex justify-between items-center mb-5 sm:mb-6">

        {/* Back Button */}
        <Link
          className="text-[#E5E7EB] text-2xl sm:text-3xl hover:text-[#4ADE80] transition-colors"
          to="/login"
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

    {/* Signup Form */}
    <form
      onSubmit={handleSubmit}
      className="bg-[#161B22] w-full max-w-md flex flex-col px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-md">

      <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-4">
        Signup
      </h1>

      {/* User Inputs */}
      <input
      type="text"
      value={formData.name}
      name="name"
      onChange={handleChange}
      required
      placeholder="Name"
      className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
      />

    <input
    type="email"
    value={formData.email}
    name="email"
    onChange={handleChange}
    required
    placeholder="Email"
    className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
    />

  <input
  type="text"
  value={formData.phone}
  name="phone"
  onChange={handleChange}
  required
  placeholder="Phone"
  className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
  />

<input
type="text"
value={formData.password}
name="password"
onChange={handleChange}
required
placeholder="Password"
className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
/>

<input
type="text"
name="passwordConfirm"
value={formData.passwordConfirm}
onChange={handleChange}
required
placeholder="Confirm Password"
className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
/>

{/* Role Selection */}
<div className="mt-4">
<h3 className="text-base sm:text-lg text-[#E5E7EB] font-semibold mb-2">
Role
</h3>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

<label className="flex items-center cursor-pointer">
<input
type="radio"
name="role"
value="Entrepreneur"
onChange={handleChange}
className="w-4 h-4"
/>
<span className="ml-2 text-[#E5E7EB] text-sm">
Entrepreneur
</span>
</label>

<label className="flex items-center cursor-pointer">
<input
type="radio"
name="role"
value="Investor"
onChange={handleChange}
className="w-4 h-4"
/>
<span className="ml-2 text-[#E5E7EB] text-sm">
Investor
</span>
</label>

</div>
</div>

{/* Interests and Budget */}
{formData.role === "Investor" && (
<div className=" mt-4 space-y-3">

<select
name="interests"
value={formData.interests}
onChange={handleChange}
className="w-full bg-[#0D1117] text-[#E5E7EB] p-3 rounded-md outline-none border-0 text-sm sm:text-base">
<option disabled>Choose Interests</option>
{
industries.map((element, index) => <option key={index} value={element}>{element}</option>)
}

</select>

<input
name="min"
type="number"
value={formData.budgetRange.min}
onChange={handleBudgetChange}
placeholder="Budget Min"
className="w-full p-3 rounded-md bg-[#0D1117] text-[#E5E7EB] outline-none border-0 text-sm sm:text-base"
/>

<input
name="max"
type="number"
value={formData.budgetRange.max}
onChange={handleBudgetChange}
placeholder="Budget Max"
className="w-full p-3 rounded-md bg-[#0D1117] text-[#E5E7EB] outline-none border-0 text-sm sm:text-base"
/>
</div>
)}


{/* Submit Button */}
<button
className="bg-[#4ADE80] w-full mt-4 py-3 text-sm sm:text-base text-[#0D1117] font-semibold rounded-md hover:bg-[#3FC16E] transition-colors"
type="submit"
>
Signup
</button>

{/* Login Link */}
<p className="text-[#E5E7EB] text-center text-xs sm:text-sm mt-3">
Already have an account?

<Link
className="text-[#9CA3AF] ml-1 hover:text-[#4ADE80] transition-colors"
to="/login"
>
Login now
</Link>
</p>

</form>
</section>
);
};

export default Signup;