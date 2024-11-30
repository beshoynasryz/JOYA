import React from "react";

import Sidebar from "../component/HomePage/SideBar";

function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "The Acres Estates",
      description:
        "The Acres Estates is an exclusive collection of villas offering spacious living with a sustainable community focus. Enjoy private pools, gardens, and much more.",
      image: "https://via.placeholder.com/300", // Replace with your actual image URL
    },
    {
      id: 2,
      title: "The Lakeside Villas",
      description:
        "The Lakeside Villas offer a tranquil retreat with scenic views, modern villas designed for comfort and luxury living.",
      image: "https://via.placeholder.com/300", // Replace with your actual image URL
    },
    {
      id: 3,
      title: "Sunset Hills",
      description:
        "Sunset Hills offers panoramic views of the city, cutting-edge architecture, and modern amenities, providing luxury living.",
      image: "https://via.placeholder.com/300", // Replace with your actual image URL
    },
    {
      id: 4,
      title: "Mountain Peak Residences",
      description:
        "Mountain Peak Residences provide serene homes with a focus on luxury and tranquility in the most sought-after locations.",
      image: "https://via.placeholder.com/300", // Replace with your actual image URL
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">

      {/* Sidebar */}
    <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">PROPERTIES</h1>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search For Properties"
              className="p-2 w-64 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64] focus:outline-none placeholder-[#9da5a4]"
            />
          </div>
          <div>
            <select className="p-2 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64]">
              <option value="all">All Types</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-[#1a1f1e] rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{property.title}</h2>
                <p className="text-sm text-gray-400 mt-2">
                  {property.description.slice(0, 100)}...
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    title="Delete Property"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PropertiesPage;
