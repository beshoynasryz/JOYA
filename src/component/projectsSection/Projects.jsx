import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios"; // Adjust the path as needed

function Projects() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("All");

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosInstance.get("/property");
        setProperties(response.data || []);
        setFilteredProperties(response.data || []); // Default: Show all properties
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
        setFilteredProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Filter properties based on the selected type
  useEffect(() => {
    if (selectedType === "All") {
      setFilteredProperties(properties); // Show all properties
    } else {
      // Normalize selectedType and property type to lowercase for case-insensitive comparison
      setFilteredProperties(
        properties.filter(
          (property) => property.type && property.type.toLowerCase() === selectedType.toLowerCase()
        )
      );
    }
  }, [selectedType, properties]);

  const handleTypeChange = (type) => {
    setSelectedType(type); // Update selected type
  };

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      <h2 className="text-5xl font-semibold text-white mb-14 mt-20">Properties</h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-10">
        {["All", "Offplan", "Feature", "Luxury"].map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-6 py-2 rounded-full text-white ${
              selectedType === type ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Properties Section */}
      {loading ? (
        <p className="text-white text-xl">Loading...</p>
      ) : filteredProperties.length === 0 ? (
        <p className="text-white text-xl">No properties available for this type.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-20">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={property.imageProperty || "/default-image.jpg"} // Fallback image for missing images
                  alt={property.description || "Property"}
                  className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">{property.location || "Unnamed Property"}</h3>
              <p className="text-[#a0b3b1] text-base leading-relaxed">{property.description || "No description available."}</p>
              <p className="text-[#a0b3b1] text-base leading-relaxed mt-2">Price: {property.price || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
