import React from "react";
import image3 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.09.49_2c7d0f0b.jpg";
import image4 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";
import image5 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_bb50a06f.jpg";

const Blog = () => {
  const blogs = [
    {
      _id: "1",
      title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
      author: "Nabeel Hammudeh",
      date: "Monday, 22 July, 2024",
      description: "Learn about the new rules introduced by the Dubai Land Department aimed at increasing transparency.",
      image: image3,
      views: 120,
      category: "REGULATIONS",
    },
    {
      _id: "2",
      title: "Unlocking Opportunities in Real Estate",
      author: "Nabeel Hammudeh",
      date: "Friday, 19 July, 2024",
      description: "Discover the challenges and opportunities that define the journey of a real estate agent in Dubai.",
      image: image4,
      views: 250,
      category: "CAREER",
    },
    {
      _id: "3",
      title: "Investment Insights: Dubai’s Real Estate Trends",
      author: "Nabeel Hammudeh",
      date: "Wednesday, 17 July, 2024",
      description: "Explore key real estate trends shaping the Dubai property market and how to make the best investment decisions.",
      image: image5,
      views: 300,
      category: "INVESTMENT",
    },
  ];

  return (
    <div className="bg-[#111612] text-white">
      <div
        style={{
          marginBottom: 60,
          color: 101612,
          display: false,
        }}
      >
        .
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-[#111612] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">NEWS & BLOGS</h1>
        <div className="w-16 h-[2px] bg-gray-300 my-4"></div>
        <p className="text-xl md:text-2xl font-light text-gray-400">
          Discover the latest insights, tips, and updates about the Dubai real
          estate market
        </p>
      </div>

      {/* Blogs Section */}
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Loading Indicator */}
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <a
                href={`/SpecificBlog/${blog._id}`}
                key={blog._id}
                className="block bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-64 md:h-80">
                  <img
                    src={blog.image || "https://via.placeholder.com/400"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-[#a0b3b1] text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">
                    {blog.title || "No Title"}
                  </h3>
                  <p className="text-md text-gray-400 mb-4">
                    By <span className="font-semibold text-white">{blog.author}</span> | {blog.date || "No Date"}
                  </p>
                  <p className="text-gray-300 text-lg mb-6">
                    {blog.description
                      ? blog.description.slice(0, 150) + "..."
                      : "No description available."}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-lg font-semibold text-[#a0b3b1] hover:text-white transition-colors duration-300">
                      Read More
                      <svg
                        className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      <span className="font-medium">{blog.views || 0}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-400">No blogs available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
