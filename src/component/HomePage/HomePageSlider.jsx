
import React, { useState } from "react";

// Sample initial data for the cards
const initialData = [
  {
    id: "1",
    projectName: "Villa Allegra",
    projectUrl: "url/:sdfgfded",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    projectName: "Luxury Villa",
    projectUrl: "url/:xyz123",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: "3",
    projectName: "Skyline Residence",
    projectUrl: "url/:abcd456",
    imageUrl: "https://example.com/image3.jpg",
  },
];

const HomePageSlider = () => {
  const [cards, setCards] = useState(initialData);
  const [editingId, setEditingId] = useState(null);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectUrl, setNewProjectUrl] = useState("");

  // Handle edit action
  const handleEdit = (id, projectName, projectUrl) => {
    setEditingId(id);
    setNewProjectName(projectName);
    setNewProjectUrl(projectUrl);
  };

  // Handle save after editing
  const handleSave = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id
        ? { ...card, projectName: newProjectName, projectUrl: newProjectUrl }
        : card
    );
    setCards(updatedCards);
    setEditingId(null);
    setNewProjectName("");
    setNewProjectUrl("");
  };

  // Handle delete action
  const handleDelete = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  // Add a new property card
  const handleAddMore = () => {
    const newCard = {
      id: (cards.length + 1).toString(),
      projectName: "New Property",
      projectUrl: "url/:newProperty",
      imageUrl: "https://via.placeholder.com/300", // Placeholder image
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
     

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Home Page Slider</h1>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-[#1a1f1e] rounded-lg shadow-md overflow-hidden relative">
              <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={card.imageUrl}
                  alt={card.projectName}
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                />
              </div>
              
              {/* Buttons for Edit and Delete */}
              <div className="absolute top-2 left-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(card.id, card.projectName, card.projectUrl)}
                  className="p-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="p-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
                >
                  🗑️
                </button>
              </div>

              {/* Card content */}
              <div className="p-4">
                {editingId === card.id ? (
                  <div>
                    <input
                      type="text"
                      value={newProjectName}
                      onChange={(e) => setNewProjectName(e.target.value)}
                      className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] mb-2 rounded-md"
                      placeholder="Project Name"
                    />
                    <input
                      type="text"
                      value={newProjectUrl}
                      onChange={(e) => setNewProjectUrl(e.target.value)}
                      className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] mb-2 rounded-md"
                      placeholder="Project URL"
                    />
                    <button
                      onClick={() => handleSave(card.id)}
                      className="bg-green-500 text-white p-2 rounded-md mt-2 w-full hover:bg-green-600"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg font-semibold">{card.projectName}</h2>
                    <p className="text-sm text-gray-400 mt-2">{card.projectUrl}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add More Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleAddMore}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Add More
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePageSlider;
