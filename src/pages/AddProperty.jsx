import React, { useState } from 'react';
import Sidebar from '../component/DashboredCompnents/SideBar';

const AddProperty = () => {
  const [propertyType, setPropertyType] = useState('');
  const [details, setDetails] = useState({
    startingPrice: '',
    bookingFees: '',
    paymentPlan: '',
    handoverDate: '',
    numberOfBedrooms: ''
  });

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleDetailChange = (key, value) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar on the Left */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add Property</h1>

        {/* Search Bar and Dropdown */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Search For Properties</label>
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Filter By Type</label>
            <select
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>
        </div>

        {/* Property Type Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Choose Property Type</h2>
          <div className="flex items-center space-x-6">
            {['Off Plan', 'Feature', 'Luxury'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  checked={propertyType === type}
                  onChange={handlePropertyTypeChange}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Property Image</label>
            <div className="border border-dashed border-[#3d6a64] rounded p-4 text-center">
              Drag & Drop or Upload
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Property Cover Image</label>
            <div className="border border-dashed border-[#3d6a64] rounded p-4 text-center">
              Drag & Drop or Upload
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Property Description</label>
          <textarea
            placeholder="Add a detailed description of the property..."
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
        </div>

        {/* Location and Price */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Property Location</label>
            <input
              type="text"
              placeholder="Palm Jumeirah, Dubai - Nakheel"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              placeholder="30,000,000"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Beds, Bathrooms, and Space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {['Beds', 'Bathrooms', 'Space of Property'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-2">{field}</label>
              <input
                type="text"
                placeholder={`Enter ${field}`}
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Payment Plan and Location Details */}
        {['Payment Plan of the Property', 'Location Details'].map((label) => (
          <div className="mb-6" key={label}>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <textarea
              placeholder={`Add ${label.toLowerCase()}...`}
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
          </div>
        ))}

        {/* Key-Value Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Add Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { title: 'Starting Price', key: 'startingPrice' },
              { title: 'Booking Fees', key: 'bookingFees' },
              { title: 'Payment Plan', key: 'paymentPlan' },
              { title: 'Handover Date', key: 'handoverDate' },
              { title: 'Number of Bedrooms', key: 'numberOfBedrooms' }
            ].map(({ title, key }) => (
              <div key={key} className="flex justify-between items-center">
                <label className="text-sm font-medium">{title}</label>
                <input
                  type="text"
                  value={details[key]}
                  onChange={(e) => handleDetailChange(key, e.target.value)}
                  className="p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
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
