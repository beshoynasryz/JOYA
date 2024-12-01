import React, { useState } from "react";
import { FaSave, FaTrashAlt } from "react-icons/fa"; // Import FontAwesome icons
import Sidebar from "./SideBar";

const AboutUs = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/1200x400", // Placeholder image
      title: "Our Mission",
      paragraph: "We strive to deliver excellence and quality in everything we do.",
    },
  ]);

  const [values, setValues] = useState([
    {
      id: 1,
      title: "Commitment",
      paragraph: "We are committed to delivering top-notch services to our clients.",
    },
  ]);

  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        image: "https://via.placeholder.com/1200x400",
        title: "",
        paragraph: "",
      },
    ]);
  };

  const handleUpdateSection = (id, field, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handleImageUpload = (id, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSections((prev) =>
          prev.map((section) =>
            section.id === id ? { ...section, image: reader.result } : section
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteSection = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this section?");
    if (confirmed) {
      setSections((prev) => prev.filter((section) => section.id !== id));
    }
  };

  const handleAddValue = () => {
    setValues([
      ...values,
      {
        id: values.length + 1,
        title: "",
        paragraph: "",
      },
    ]);
  };

  const handleUpdateValue = (id, field, value) => {
    setValues((prev) =>
      prev.map((valueItem) =>
        valueItem.id === id ? { ...valueItem, [field]: value } : valueItem
      )
    );
  };

  const handleDeleteValue = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this value?");
    if (confirmed) {
      setValues((prev) => prev.filter((valueItem) => valueItem.id !== id));
    }
  };

  const handleSaveSection = (id) => {
    alert(`Section ${id} saved!`);
  };

  const handleSaveValue = (id) => {
    alert(`Value ${id} saved!`);
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">About Us</h1>

        {/* First Part: Full-Width Image + Text */}
        {sections.map((section) => (
          <div key={section.id} className="mb-8">
            {/* Image */}
            <div className="relative">
              <img
                src={section.image}
                alt="Section"
                className="w-full h-60 object-cover rounded"
              />
              <button
                onClick={() => document.getElementById(`imageUpload-${section.id}`).click()}
                className="absolute top-4 right-4 bg-[#3d6a64] text-white p-2 rounded-full focus:outline-none hover:bg-[#3d6a64]"
              >
                Edit Image
              </button>
              <input
                id={`imageUpload-${section.id}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImageUpload(section.id, e.target.files[0])
                }
              />
            </div>

            {/* Text */}
            <div className="mt-4">
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleUpdateSection(section.id, "title", e.target.value)}
                placeholder="Enter title"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
              />
              <textarea
                value={section.paragraph}
                onChange={(e) =>
                  handleUpdateSection(section.id, "paragraph", e.target.value)
                }
                placeholder="Enter description"
                className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                rows="5"
              ></textarea>
            </div>

            {/* Save and Delete Icons */}
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => handleSaveSection(section.id)}
                className="text-[#3d6a64] p-2 rounded-full hover:bg-[#3d6a64] hover:text-white"
              >
                <FaSave size={20} />
              </button>
              <button
                onClick={() => handleDeleteSection(section.id)}
                className="text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* Button to Add More Sections */}
        <div className="text-center mb-10">
          <button
            onClick={handleAddSection}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            Add More Section
          </button>
        </div>

        {/* Second Part: Editable Values */}
        {values.map((value) => (
          <div key={value.id} className="mb-6 bg-[#1a1f1e] p-6 rounded shadow-lg">
            {/* Title */}
            <input
              type="text"
              value={value.title}
              onChange={(e) => handleUpdateValue(value.id, "title", e.target.value)}
              placeholder="Enter title"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
            {/* Paragraph */}
            <textarea
              value={value.paragraph}
              onChange={(e) =>
                handleUpdateValue(value.id, "paragraph", e.target.value)
              }
              placeholder="Enter description"
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              rows="4"
            ></textarea>

            {/* Save and Delete Icons */}
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => handleSaveValue(value.id)}
                className="text-[#3d6a64] p-2 rounded-full hover:bg-[#3d6a64] hover:text-white"
              >
                <FaSave size={20} />
              </button>
              <button
                onClick={() => handleDeleteValue(value.id)}
                className="text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* Button to Add More Values */}
        <div className="text-center mt-6">
          <button
            onClick={handleAddValue}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            Add More Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
