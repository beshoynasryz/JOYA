import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function OffPlan() {
  const offplan = [
    {
      _id: "1",
      title: "Emaar Beachfront",
      description: "A private, gated island community on the Arabian Gulf, offering a range of luxury apartments, villas, and townhouses.",
      imgSrcs: ["https://i.imgur.com/fQhZJ5M.jpg"],
    },
    {
      _id: "2",
      title: "Dubai Hills Estate",
      description: "A city within a city, Dubai Hills Estate is a 2,700-acre development with villas, apartments, and a championship golf course.",
      imgSrcs: ["https://i.imgur.com/Jd3kYpM.jpg"],
    },
    {
      _id: "3",
      title: "Arabian Ranches III",
      description: "The latest phase of the popular Arabian Ranches community, offering a range of townhouses and villas with a focus on family living.",
      imgSrcs: ["https://i.imgur.com/RJf3TfT.jpg"],
    },
  ];

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  // Truncate long text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const maxDescriptionLength = 140;

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      <h2
        className="text-5xl font-semibold text-white mb-14 mt-20"
        data-aos="fade-down"
      >
        Off Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-32">
          {offplan.map((item, index) => (
            <Link
              to={`/Projects/Off-Plan2/${item._id}`} // Use _id for dynamic routing
              key={item._id} // Use _id as the unique key
              className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={item.imgSrcs?.[0] || "/default-image.jpg"} // Use item image or default if missing
                  alt={item.title}
                  className="w-full h-40 sm:h-48 lg:h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-[#a0b3b1] text-sm sm:text-base leading-relaxed">
                {truncateText(item.description, maxDescriptionLength)}
              </p>
            </Link>
          ))}
        </div>
    </div>
  );
}

export default OffPlan;
