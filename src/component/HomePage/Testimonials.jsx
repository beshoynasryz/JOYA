import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome Star

const Testimonials = () => {
  const [clientName, setClientName] = useState("John Doe");
  const [stars, setStars] = useState(5); // Default 5 stars
  const [comment, setComment] = useState("This is an amazing product!"); // Default comment
  const [isEditingName, setIsEditingName] = useState(false); // Toggle edit state for client name

  const handleEditName = () => {
    setIsEditingName(!isEditingName); // Toggle between editing and viewing mode for name
  };

  const handleChangeClientName = (e) => {
    setClientName(e.target.value);
  };

  const handleStarChange = (e) => {
    setStars(parseInt(e.target.value)); // Set the selected star value
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className=" bg-[#111612] text-white  shadow-lg p-6">
      {/* Top Section - Left (Client Name) */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Client Testimonial</h2>
          <div className="mt-2">
            {isEditingName ? (
              <input
                type="text"
                value={clientName}
                onChange={handleChangeClientName}
                className="p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
              />
            ) : (
              <p className="text-lg">{clientName}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleEditName}
          className="text-blue-500 hover:text-blue-700"
        >
          {isEditingName ? "Save" : "Edit"}
        </button>
      </div>

      {/* Top Section - Right (Star Rating Dropdown) */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-medium">Star Rating</h3>
          <div className="flex space-x-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                color={star <= stars ? "yellow" : "#3d6a64"} // Yellow for selected, gray for unselected
                onClick={() => setStars(star)}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Comment */}
      <div>
        <h3 className="text-xl font-medium mb-2">Comment</h3>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded-md"
          rows="5"
        />
      </div>
    </div>
  );
};

export default Testimonials;
