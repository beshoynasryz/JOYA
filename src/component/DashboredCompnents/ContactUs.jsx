import React, { useState } from "react";
import { FaSave, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // FontAwesome icons
import Sidebar from "./SideBar";

const ContactUs = () => {
  const [description, setDescription] = useState(
    "Feel free to reach out to us anytime. We are here to help you."
  );
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509137!2d144.95373531531677!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2zTWVsYm91cm5lLCBBdXN0cmFsaWE!5e0!3m2!1sen!2sin!4v1618905299265!5m2!1sen!2sin"
  );

  const [phone, setPhone] = useState("+971 58 597 6060");
  const [email, setEmail] = useState("info@joyaproperties.com");
  const [facebook, setFacebook] = useState("https://www.facebook.com/joyaproperties");
  const [twitter, setTwitter] = useState("https://www.twitter.com/joyaproperties");
  const [instagram, setInstagram] = useState("https://www.instagram.com/joyaproperties");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/company/joyaproperties");

  const handleSaveUpdates = () => {
    alert(`Updates Saved!\nDescription: ${description}\nMap URL: ${mapUrl}`);
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>

        {/* Description Section */}
        <div className="mb-8 bg-[#1a1f1e] p-6 rounded shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your contact us description..."
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            rows="5"
          ></textarea>
        </div>

        {/* Map Section */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Map</h2>
          <input
            type="text"
            value={mapUrl}
            onChange={(e) => setMapUrl(e.target.value)}
            placeholder="Enter Google Maps embed URL..."
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
          />
          {/* Map Preview */}
          <iframe
            src={mapUrl}
            title="Google Map"
            className="w-full h-64 rounded border border-[#3d6a64]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Details Section */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Contact Details</h2>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-[#9da5a4] mb-2">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-[#9da5a4] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            />
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <label className="block text-sm text-[#9da5a4] mb-2">Social Media Links</label>

            <div className="flex items-center mb-2">
              <FaFacebook size={20} className="mr-2 text-[#3b5998]" />
              <input
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            <div className="flex items-center mb-2">
              <FaTwitter size={20} className="mr-2 text-[#00acee]" />
              <input
                type="url"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            <div className="flex items-center mb-2">
              <FaInstagram size={20} className="mr-2 text-[#C13584]" />
              <input
                type="url"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Instagram URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            <div className="flex items-center mb-2">
              <FaLinkedin size={20} className="mr-2 text-[#0072b1]" />
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>
          </div>
        </div>

        {/* Save Updates Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveUpdates}
            className="flex items-center bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            <FaSave size={20} className="mr-2" />
            Save Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
