import React from "react";
import { FaHome, FaBuilding, FaPlusSquare, FaCog, FaUsers, FaEnvelope, FaBlog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <aside className="w-full md:w-1/5 bg-[#1a1f1e] p-4 md:block hidden">
      <div className="text-center text-xl font-bold mb-8">JOYA PROPERTIES</div>
      <nav className="space-y-6">
        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/DashboardHome")} // Navigate to DashboardHome
        >
          <FaHome size={20} />
          <span>Home</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/properties")} // Navigate to Properties
        >
          <FaBuilding size={20} />
          <span>Properties</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/add-property")} // Navigate to Add Property
        >
          <FaPlusSquare size={20} />
          <span>Add Property</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/services")} // Navigate to Services
        >
          <FaCog size={20} />
          <span>Services</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/add-services")} // Navigate to Add Services
        >
          <FaPlusSquare size={20} />
          <span>Add Services</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/team")} // Navigate to Team
        >
          <FaUsers size={20} />
          <span>Team</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/contact-us")} // Navigate to Contact Us
        >
          <FaEnvelope size={20} />
          <span>Contact Us</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/blogs")} // Navigate to Blogs
        >
          <FaBlog size={20} />
          <span>Blogs</span>
        </div>

        <div
          className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
          onClick={() => handleNavigation("/logout")} // Navigate to Logout
        >
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
