import React from 'react';
import Sidebar from '../component/HomePage/SideBar';

const AddProperty = () => {
  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar on the Left */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add Property</h1>

        {/* Search Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Search For Properties</h2>
          <input
            type="text"
            placeholder="All Types"
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Property Type</label>
            <input
              type="text"
              placeholder="Off Plan, Feature, Luxury"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Property Name</label>
            <input
              type="text"
              placeholder="The Acres Estates"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Description */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium mb-2">Property Description</label>
            <textarea
              placeholder="Add a detailed description of the property..."
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
          </div>

          {/* Property Location */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium mb-2">Property Location</label>
            <input
              type="text"
              placeholder="Palm Jumeirah, Dubai - Nakheel"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Price */}
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              placeholder="30,000,000"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Beds */}
          <div>
            <label className="block text-sm font-medium mb-2">Beds</label>
            <input
              type="number"
              placeholder="4"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Bathrooms */}
          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <input
              type="number"
              placeholder="4"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Space */}
          <div>
            <label className="block text-sm font-medium mb-2">Space of Property</label>
            <input
              type="text"
              placeholder="3400 sqft"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Property Image</label>
            <div className="border border-dashed border-[#3d6a64] rounded p-4 text-center">
              Drag & Drop or Upload
            </div>
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image</label>
            <div className="border border-dashed border-[#3d6a64] rounded p-4 text-center">
              Drag & Drop or Upload
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Starting Price */}
          <div>
            <label className="block text-sm font-medium mb-2">Starting Price</label>
            <input
              type="text"
              placeholder="1,400,000 AED"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Booking Fees */}
          <div>
            <label className="block text-sm font-medium mb-2">Booking Fees</label>
            <input
              type="text"
              placeholder="20%"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Plan */}
          <div>
            <label className="block text-sm font-medium mb-2">Payment Plan</label>
            <input
              type="text"
              placeholder="80/20"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Handover Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Handover Date</label>
            <input
              type="text"
              placeholder="2026"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Submit Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
