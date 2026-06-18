import React from 'react';
import {
  useState
} from 'react'
import {
  Link,
  useNavigate
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

const ForgotPassword = () => {
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [formData,
    setformData] = useState( {
email:"",
	password: "",
	passwordConfirm: ""
}
    )

  const handleChange = (e)=> {
    const {
      name,
      value
    } = e.target;
    setformData((prev)=>( {
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try {
      const res = await axios.put(`${BASE_URL}/users/forgotPassword`, formData)
      successAlert(res.data.message);
      navigate('/login')
    } catch (err) {
      console.error('Error:', err);
      errorAlert(err.response.data.message)
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#0D1117] px-3 py-4 sm:px-4 md:py-10">

      {/* Top Bar: Back button & Logo */}
      <div className="w-full max-w-md flex justify-between items-center mb-5 sm:mb-6">

        {/* Back Button */}
        <Link
          to="/login"
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

    {/* ForgotPassword Form */}
    <form onSubmit={handleSubmit} className="bg-[#161B22] w-full max-w-md flex flex-col px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-md">

      <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#E5E7EB] mb-4">
        Forgot Password
      </h1>

    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
    />

    <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
    />

    <input
    type="password"
    name="passwordConfirm"
    value={formData.passwordConfirm}
    onChange={handleChange}
    placeholder="Confirm Password"
    className="mt-2 p-3 text-sm sm:text-base text-[#9CA3AF] rounded-md outline-none border-0 bg-[#0D1117]"
    />

  <button
    type="submit"
    className="bg-[#4ADE80] w-full mt-4 py-3 text-sm sm:text-base text-[#0D1117] font-semibold rounded-md hover:bg-[#3FC16E] transition-colors cursor-pointer"
    >
    Change Password
  </button>

</form>
</section>
);
};

export default ForgotPassword;