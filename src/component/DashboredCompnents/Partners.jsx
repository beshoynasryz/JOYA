import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa"; // Importing FontAwesome Edit Icon

const Partners = () => {
  // Initial state for partners
  const [partners, setPartners] = useState([
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300x150",
      alt: "Partner 1",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300x150",
      alt: "Partner 2",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300x150",
      alt: "Partner 3",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300x150",
      alt: "Partner 4",
    },
  ]);

  // Placeholder function to simulate fetching partners from an API
  const fetchPartners = async () => {
    // In the future, replace this with an actual API call, e.g., using fetch or axios
    console.log("Fetching partners from the API...");
    // Simulate fetched data with a timeout (mimicking an API call)
    setTimeout(() => {
      console.log("Partners fetched successfully");
    }, 1000);
  };

  // Placeholder function to simulate saving partners to an API
  const savePartners = async () => {
    // In the future, replace this with an actual API call to save the data
    console.log("Saving partners to the API...");
    setTimeout(() => {
      console.log("Partners saved successfully");
    }, 1000);
  };

  // Fetch partners when the component mounts (for future API integration)
  useEffect(() => {
    fetchPartners(); // In the future, it will fetch data from the API
  }, []);

  // Add more partners (this function will later make an API call to save the new partner)
  const handleAddMore = () => {
    const newPartner = {
      id: partners.length + 1,
      imageUrl: "https://via.placeholder.com/300x150",
      alt: `Partner ${partners.length + 1}`,
    };
    setPartners([...partners, newPartner]);

    // Save the updated partners list to the API (future functionality)
    savePartners(); // This will save the data when integrated with the API
  };

  const handleEdit = (id) => {
    alert(`Editing partner with id: ${id}`); // Placeholder for edit functionality
  };

  return (
    <div className="bg-[#111612] text-white p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Partners</h2>

      {/* Grid Layout for Partners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="relative">
            <img
              src={partner.imageUrl}
              alt={partner.alt}
              className="w-full h-48 object-cover rounded-3xl sm:h-60 md:h-48 lg:h-32" // Reversed responsive height
            />

            {/* Edit Button with FontAwesome Icon */}
            <button
              onClick={() => handleEdit(partner.id)}
              className="absolute top-2 right-2 bg-[#3d6a64] text-white p-2 rounded-full hover:bg-[#2f4e43]"
            >
              <FaEdit size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleAddMore}
          className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#2f4e43]"
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default Partners;
