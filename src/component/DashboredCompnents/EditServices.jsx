import React, { useState } from "react";
import { FaSave, FaEdit, FaPlusSquare } from "react-icons/fa"; // FontAwesome icons
import Sidebar from "./SideBar";

const EditServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Service Title 1",
      paragraph: "This is a description of Service 1.",
      image: "https://via.placeholder.com/400x200", // Placeholder image
    },
    {
      id: 2,
      title: "Service Title 2",
      paragraph: "This is a description of Service 2.",
      image: "https://via.placeholder.com/400x200", // Placeholder image
    },
  ]);

  const [currentService, setCurrentService] = useState({
    id: null,
    title: "",
    paragraph: "",
    image: "",
  });

  const handleEditClick = (service) => {
    setCurrentService(service); // Load the selected service into the second part
  };

  const handleInputChange = (field, value) => {
    setCurrentService((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentService((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save or update service
    if (currentService.id) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === currentService.id ? currentService : service
        )
      );
    } else {
      // Add a new service
      const newService = { ...currentService, id: Date.now() };
      setServices((prev) => [...prev, newService]);
    }
    alert("Service saved!");
    setCurrentService({ id: null, title: "", paragraph: "", image: "" }); // Reset form
  };

  const handleAddNew = () => {
    // Clear currentService for adding a new service
    setCurrentService({ id: null, title: "", paragraph: "", image: "" });
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Edit Services</h1>

        {/* First Part: Display All Services */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">All Services</h2>
            <button
              onClick={handleAddNew}
              className="flex items-center bg-[#3d6a64] text-white px-4 py-2 rounded-md hover:bg-[#3d6a64]"
            >
              <FaPlusSquare size={16} className="mr-2" />
              Add More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#1a1f1e] p-4 rounded shadow-lg relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{service.paragraph}</p>
                <button
                  onClick={() => handleEditClick(service)}
                  className="absolute top-2 right-2 bg-[#3d6a64] text-white p-2 rounded-full hover:bg-[#3d6a64]"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Second Part: Edit or Add Service */}
        {currentService && (
          <div className="bg-[#1a1f1e] p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              {currentService.id ? "Edit Service" : "Add New Service"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left: Title and Paragraph */}
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={currentService.title}
                  onChange={(e) =>
                    handleInputChange("title", e.target.value)
                  }
                  placeholder="Enter service title"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
                />
                <label className="block text-sm font-medium mb-2">Paragraph</label>
                <textarea
                  value={currentService.paragraph}
                  onChange={(e) =>
                    handleInputChange("paragraph", e.target.value)
                  }
                  placeholder="Enter service description"
                  className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                  rows="5"
                ></textarea>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <img
                  src={
                    currentService.image ||
                    "https://via.placeholder.com/400x200"
                  }
                  alt="Service"
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-white"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSave}
                className="flex items-center bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
              >
                <FaSave size={16} className="mr-2" />
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditServices;
