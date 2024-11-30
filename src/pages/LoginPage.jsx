import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import logo from "../component/Mask group.svg"; // Import the logo

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0e1414] flex flex-col items-center justify-center text-[#EFECE6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <div className="text-center mb-20">
        <img src={logo} alt="Joya Properties Logo" className="w-40 mx-auto" />
      </div>

      {/* Login Box */}
      <div className="bg-[#1a1f21] rounded-lg px-8 py-6 shadow-lg flex flex-col items-center w-[90%] max-w-md space-y-4">
        {/* Username Input */}
        <div className="w-full">
          <label
            htmlFor="username"
            className="block text-sm text-[#9da5a4] mb-2 tracking-wide"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            placeholder=""
            className="w-full bg-[#0e1414] border-none rounded-full h-12 px-4 text-[#EFECE6] placeholder-[#9da5a4] focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="w-full relative">
          <label
            htmlFor="password"
            className="block text-sm text-[#9da5a4] mb-2 tracking-wide"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=""
            className="w-full bg-[#0e1414] border-none rounded-full h-12 px-4 pr-12 text-[#EFECE6] placeholder-[#9da5a4] focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-10 right-4 text-[#698f8c] focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="mt-4">
        <a
          href="/forgot-password" // Replace with the actual link
          className="text-sm text-[#9da5a4] hover:text-[#EFECE6] underline"
        >
          Forgot your password?
        </a>
      </div>
    </motion.div>
  );
};

export default LoginComponent;
