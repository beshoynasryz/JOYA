import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/DashboredCompnents/SideBar';
import axiosInstance from '../axios'; // Your axiosInstance file for API calls

const AddProperty = () => {
  const navigate = useNavigate();

  // State for all fields
  const [propertyType, setPropertyType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [space, setSpace] = useState('');
  const [paymentPlan, setPaymentPlan] = useState('');
  const [locationDetails, setLocationDetails] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [bookingFees, setBookingFees] = useState('');
  const [handoverDate, setHandoverDate] = useState('');
  const [numberOfBedrooms, setNumberOfBedrooms] = useState('');
  const [imageProperty, setImageProperty] = useState(null); // State for image
  const [error, setError] = useState('');

  // Handlers
  const handlePropertyTypeChange = (e) => setPropertyType(e.target.value);
  const handleImageChange = (e) => setImageProperty(e.target.files[0]); // Image handler

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('type', propertyType);
    formData.append('imageProperty', imageProperty); // Append image
    formData.append('description', description);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('beds', beds);
    formData.append('bathrooms', bathrooms);
    formData.append('space', space);
    formData.append('paymentPlan', paymentPlan);
    formData.append('locationDetails', locationDetails);
    formData.append('startingPrice', startingPrice);
    formData.append('bookingFees', bookingFees);
    formData.append('handoverDate', handoverDate);
    formData.append('numberOfBedrooms', numberOfBedrooms);

    try {
      const response = await axiosInstance.post('/property', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        alert('Property added successfully!');
        navigate('/properties');
      } else {
        setError('Failed to add property. Please try again.');
      }
    } catch (err) {
      setError('Error submitting property. Please check your network.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add Property</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Property Type */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Choose Property Type</h2>
          <div className="flex items-center space-x-6">
            {['offplan', 'feature', 'luxury'].map((type) => (
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
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Property Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Text Inputs */}
        {[
          { label: 'Property Description', value: description, setter: setDescription, type: 'textarea' },
          { label: 'Property Location', value: location, setter: setLocation },
          { label: 'Price', value: price, setter: setPrice, type: 'number' },
          { label: 'Beds', value: beds, setter: setBeds },
          { label: 'Bathrooms', value: bathrooms, setter: setBathrooms },
          { label: 'Space (sq ft)', value: space, setter: setSpace },
          { label: 'Payment Plan', value: paymentPlan, setter: setPaymentPlan },
          { label: 'Location Details', value: locationDetails, setter: setLocationDetails },
          { label: 'Starting Price', value: startingPrice, setter: setStartingPrice },
          { label: 'Booking Fees', value: bookingFees, setter: setBookingFees, type: 'number' },
        ].map(({ label, value, setter, type = 'text' }) => (
          <div className="mb-6" key={label}>
            <label className="block text-sm font-medium mb-2">{label}</label>
            {type === 'textarea' ? (
              <textarea
                placeholder={`Enter ${label.toLowerCase()}...`}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              />
            ) : (
              <input
                type={type}
                placeholder={`Enter ${label.toLowerCase()}`}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        {/* Number of Bedrooms */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Number of Bedrooms</label>
          <input
            type="number"
            placeholder="Enter number of bedrooms"
            value={numberOfBedrooms}
            onChange={(e) => setNumberOfBedrooms(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Handover Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Handover Date</label>
          <input
            type="date"
            value={handoverDate}
            onChange={(e) => setHandoverDate(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
