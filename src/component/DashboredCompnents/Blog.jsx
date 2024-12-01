import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaEdit, FaPlusSquare } from "react-icons/fa"; // For edit and add icons
// Importing the BlogCard component
import Sidebar from "./SideBar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const navigate = useNavigate(); // For navigation

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog Title 1",
      paragraph: "This is a short description of the blog content.",
      author: "John Doe",
      date: "2024-12-01",
      link: "https://example.com",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Blog Title 2",
      paragraph: "This is another short description of the blog.",
      author: "Jane Doe",
      date: "2024-11-30",
      link: "https://example.com",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  // Function to navigate to EditBlog page, passing only the blog id
  const handleEditClick = (id) => {
    navigate(`/edit-blog/${id}`); // Navigate to EditBlog page with the blog id as URL parameter
  };

  // Function to navigate to AddBlog page
  const handleAddBlog = () => {
    navigate("/add-blog"); // Redirect to AddBlog page
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Blogs</h1>

        {/* Add New Blog Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleAddBlog}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            <FaPlusSquare size={20} className="mr-2" />
            Add New Blog
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onEdit={handleEditClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
