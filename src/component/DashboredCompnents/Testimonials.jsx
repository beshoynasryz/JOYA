import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome Star

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      clientName: "John Doe",
      stars: 5,
      comment: "This is an amazing product!"
    }
  ]);

  const [isEditingName, setIsEditingName] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    clientName: "",
    stars: 5,
    comment: ""
  });

  const handleEditName = () => {
    setIsEditingName(!isEditingName); // Toggle between editing and viewing mode for name
  };

  const handleChangeClientName = (e, index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index].clientName = e.target.value;
    setTestimonials(updatedTestimonials);
  };

  const handleStarChange = (star, index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index].stars = star;
    setTestimonials(updatedTestimonials);
  };

  const handleCommentChange = (e, index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index].comment = e.target.value;
    setTestimonials(updatedTestimonials);
  };

  const addMoreTestimonial = () => {
    setTestimonials([
      ...testimonials,
      {
        id: testimonials.length + 1,
        clientName: "",
        stars: 5,
        comment: ""
      }
    ]);
  };

  return (
    <div className="bg-[#111612] text-white shadow-lg p-6">
     <div className="flex justify-center items-center py-10 my-5">
  <h2 className="text-2xl font-semibold text-center">Testimonial</h2>
</div>

      {/* Loop Through All Testimonials */}
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} className="mb-6">
          <div className="flex justify-between items-center mb-6">
            {/* Left - Client Name */}
            <div className="flex-1">
             
              <div className="mt-2">
                {isEditingName ? (
                  <input
                    type="text"
                    value={testimonial.clientName}
                    onChange={(e) => handleChangeClientName(e, index)}
                    className="p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
                  />
                ) : (
                  <p className="text-lg">{testimonial.clientName}</p>
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

          {/* Right - Star Rating */}
          <div className="flex items-center mb-6">
            <h3 className="text-xl font-medium mr-4">Star Rating</h3>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  color={star <= testimonial.stars ? "yellow" : "#3d6a64"} // Yellow for selected, gray for unselected
                  onClick={() => handleStarChange(star, index)}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Bottom Section - Comment */}
          <div>
            <h3 className="text-xl font-medium mb-2">Comment</h3>
            <textarea
              value={testimonial.comment}
              onChange={(e) => handleCommentChange(e, index)}
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded-md"
              rows="5"
            />
          </div>
        </div>
      ))}

      {/* Add More Button */}
      <div className="mt-6 text-center">
        <button
          onClick={addMoreTestimonial}
          className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
