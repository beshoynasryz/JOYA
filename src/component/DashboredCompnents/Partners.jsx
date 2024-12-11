import React, { useState } from "react";
import axios from "axios";

const Partners = () => {
  const [partner, setPartner] = useState({
    image: null,
    preview: "https://via.placeholder.com/300x150", // Default placeholder image
  });

  const [loading, setLoading] = useState(false);

  // Handle the image change event
  const handlePartnerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPartner((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file), // Generate image preview
      }));
    }
  };

  // Handle the delete image event
  const handlePartnerDeleteImage = () => {
    setPartner({
      image: null,
      preview: "https://via.placeholder.com/300x150", // Reset to default placeholder
    });
  };

  // Handle form submission
  const handlePartnerSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (partner.image) {
      formData.append("image", partner.image);
    }

    try {
      setLoading(true);
      await axios.post(
        "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/api/partner",
        formData
      );
      setLoading(false);
      alert("Partner added successfully!");
      setPartner({ image: null, preview: "https://via.placeholder.com/300x150" }); // Reset the form
    } catch (err) {
      console.error("Error adding partner:", err);
      setLoading(false);
      alert("Failed to add partner. Please try again.");
    }
  };

  return (
    <div className="bg-[#111612] text-white p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Partner</h2>
      <form
        onSubmit={handlePartnerSubmit}
        className="bg-[#1a1f1e] p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image</label>
          <div className="relative">
            <img
              src={partner.preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg mb-4 border border-[#3d6a64]"
            />
            <div className="flex justify-between items-center">
              <label
                htmlFor="partnerImageUpload"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
              >
                Upload Image
              </label>
              <button
                type="button"
                onClick={handlePartnerDeleteImage}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete Image
              </button>
            </div>
            <input
              id="partnerImageUpload"
              type="file"
              accept="image/*"
              onChange={handlePartnerImageChange}
              className="hidden"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#3d6a64] text-white px-4 py-2 rounded-md hover:bg-[#2f4e43] w-full"
        >
          {loading ? "Uploading..." : "Add Partner"}
        </button>
      </form>
    </div>
  );
};

export default Partners;