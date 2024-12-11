import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome Star
import axios from "axios"; // Importing Axios

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState({
    nameOfUser: "",
    rate: 5,
    comment: "",
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null); // To show response status or message

  const handleEditName = () => {
    setIsEditingName(!isEditingName); // Toggle editing mode for the name
  };

  const handleChangenameOfUser = (e) => {
    setTestimonial({ ...testimonial, nameOfUser: e.target.value });
  };

  const handleStarChange = (star) => {
    setTestimonial({ ...testimonial, rate: star });
  };

  const handleCommentChange = (e) => {
    setTestimonial({ ...testimonial, comment: e.target.value });
  };

  const saveTestimonial = async () => {
    try {
      const response = await axios.post(
        "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/api/testimonial",
        testimonial
      );
      console.log("Testimonial saved:", response.data);
      setResponseMessage("Testimonial saved successfully!");
    } catch (error) {
      console.error("Error saving testimonial:", error);
      setResponseMessage("Failed to save testimonial. Please try again.");
    }
  };

  return (
    <div className="bg-[#111612] text-white shadow-lg p-6">
      <div className="flex justify-center items-center py-10 my-5">
        <h2 className="text-2xl font-semibold text-center">Testimonial</h2>
      </div>

      {/* Testimonial Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          {/* Left - Client Name */}
          <div className="flex-1">
            <div className="mt-2">
              {isEditingName ? (
                <input
                  type="text"
                  value={testimonial.nameOfUser}
                  onChange={handleChangenameOfUser}
                  className="p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
                />
              ) : (
                <p className="text-lg">{testimonial.nameOfUser}</p>
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

        {/* Star Rating */}
        <div className="flex items-center mb-6">
          <h3 className="text-xl font-medium mr-4">Star Rating</h3>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                color={star <= testimonial.rate ? "yellow" : "#3d6a64"} // Yellow for selected, gray for unselected
                onClick={() => handleStarChange(star)}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <div>
          <h3 className="text-xl font-medium mb-2">Comment</h3>
          <textarea
            value={testimonial.comment}
            onChange={handleCommentChange}
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded-md"
            rows="5"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button
          onClick={saveTestimonial}
          className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-blue-600 ml-10"
        >
          Save
        </button>
        {responseMessage && <p className="mt-4">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Testimonials;