import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Icons for edit and delete

const SecondSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Default Section Title");
  const [paragraph, setParagraph] = useState("This is the content of the second section that can be edited.");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/600");

  const handleEdit = () => {
    setIsEditing(!isEditing); // Toggle the editing state
  };

  const handleDelete = () => {
    alert("Image Deleted!");
    setImageUrl(""); // Clear the image when delete is clicked
  };

  return (
    <>
    <div className="w-full text-center py-6  bg-[#111612]  text-white">
    <h1 className="text-3xl font-bold">Second Section</h1>
  </div>
    <div className="flex min-h-screen bg-[#111612] text-white">
   
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6">
        {/* Place the H1 Title here */}
       
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Title</h2>
          <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
            <FaEdit size={20} />
          </button>
        </div>
        
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] rounded mb-4"
          />
        ) : (
          <p className="text-lg">{title}</p>
        )}

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Paragraph</h3>
          <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
            <FaEdit size={20} />
          </button>
        </div>

        {isEditing ? (
          <textarea
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] mb-4 rounded-md"
          />
        ) : (
          <p>{paragraph}</p>
        )}
      </div>

      {/* Right Section (Image with buttons on top-left) */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={imageUrl}
          alt="Editable"
          className="w-full h-auto object-cover rounded-lg"
        />
        
        {/* Edit and Delete Buttons on Image */}
        <div className="absolute top-2 left-2 flex space-x-2">
          <button
            onClick={handleEdit}
            className="p-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
          >
            <FaEdit size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
          >
            <FaTrashAlt size={16} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SecondSection;
