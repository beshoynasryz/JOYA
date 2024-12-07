import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaSave, FaEdit, FaPlusSquare } from "react-icons/fa";
import Sidebar from "./SideBar";
import axiosInstance from "../../axios"; // Axios instance

const EditServices = () => {
  const queryClient = useQueryClient();

  const [currentService, setCurrentService] = useState({
    _id: null,
    title: "",
    paragraph: "",
    image: "",
  });

  // Fetch all services
  const fetchServices = async () => {
    const response = await axiosInstance.get("/services");
    return response.data;
  };

  const { data: services = [], isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  // Create or Update a service
  const saveService = useMutation({
    mutationFn: async (service) => {
      const formData = new FormData();
      formData.append("title", service.title);
      formData.append("paragraph", service.paragraph);

      // Check if the image is a file and append it to FormData
      if (service.image instanceof File) {
        formData.append("image", service.image);
      } else if (service.image) {
        formData.append("image", service.image); // Just the URL if not a file
      }

      if (service._id) {
        // Update existing service
        return axiosInstance.put(`/services/${service._id}`, formData);
      } else {
        // Create new service
        return axiosInstance.post("/services", formData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]); // Refetch services after mutation
      setCurrentService({ _id: null, title: "", paragraph: "", image: "" }); // Reset form
    },
  });

  // Delete a service
  const deleteService = useMutation({
    mutationFn: async (id) => {
      return axiosInstance.delete(`/services/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]); // Refetch services after deletion
    },
  });

  const handleEditClick = (service) => {
    setCurrentService(service); // Load the selected service into the form
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
      setCurrentService((prev) => ({
        ...prev,
        image: file, // Storing the file for upload
      }));
    }
  };

  const handleSave = () => {
    saveService.mutate(currentService);
  };

  const handleAddNew = () => {
    setCurrentService({ _id: null, title: "", paragraph: "", image: "" });
  };

  const handleDelete = (id) => {
    deleteService.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Edit Services</h1>

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
                key={service._id}
                className="bg-[#1a1f1e] p-4 rounded shadow-lg relative"
              >
                <img
                  src={
                    service.image
                      ? `https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/${service.image}` // Prefix URL if image exists
                      : `https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/images/default-image.jpg` // Default image if no image
                  }
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
                <button
                  onClick={() => handleDelete(service._id)}
                  className="absolute top-2 left-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {currentService && (
          <div className="bg-[#1a1f1e] p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              {currentService._id ? "Edit Service" : "Add New Service"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
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

              <div className="relative">
                <img
                  src={
                    currentService.image instanceof File
                      ? URL.createObjectURL(currentService.image)
                      : currentService.image.startsWith("http")
                      ? currentService.image
                      : `https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/${currentService.image}` // Handle URL and file display
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
