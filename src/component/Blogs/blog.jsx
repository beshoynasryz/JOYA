import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://joya-back.onrender.com/blog");
        setBlogs(response.data.data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures it runs once on mount

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
          {loading ? (
            <div className="text-center">
              <p className="text-xl text-gray-400">Loading blogs...</p>
            </div>
          ) : blogs.length > 0 ? (
            blogs.map((blog) => (
              <a
                href={`/SpecificBlog/${blog._id}`} // Dynamic link to /SpecificBlog/:id
                key={blog._id} // Use `_id` as the unique key
                className="bg-[#1c1e1b] rounded-lg shadow-lg flex overflow-hidden flex-col md:flex-row transform transition duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/3 relative">
                  <img
                    src={blog.image || "https://via.placeholder.com/300"} // Fallback image
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 right-4 text-gray-300 text-sm">
                    {blog.author || "Unknown"}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* Title and Author */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title || "No Title"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      By <span className="text-blue-500">{blog.author}</span> on{" "}
                      {blog.date || "No Date"}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#a0b3b1] text-sm mt-4 mb-4 flex-grow truncate-description">
                    {blog.description
                      ? blog.description.slice(0, 100) + "..."
                      : "No description available."}
                  </p>

                  {/* Footer - Read More and Views */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 font-medium text-sm flex items-center space-x-2 hover:underline">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="text-gray-500 text-sm flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5c7 0 7 6-7 6s0 6-7 6-7-6-7-6 0-6 7-6z"
                        />
                      </svg>
                      <span>{blog.views || 0}</span>
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
