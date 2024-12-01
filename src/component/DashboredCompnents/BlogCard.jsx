import React from "react";
import { FaEdit } from "react-icons/fa"; // FontAwesome icon for editing

const BlogCard = ({ blog, onEdit }) => {
  return (
    <div className="bg-[#1a1f1e] p-6 rounded shadow-lg relative">
      {/* Edit Button */}
      <button
        onClick={() => onEdit(blog.id)} // Trigger the edit functionality
        className="absolute top-2 right-2 bg-[#3d6a64] text-white p-2 rounded-full hover:bg-[#3d6a64]"
      >
        <FaEdit size={20} />
      </button>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      {/* Blog Title and Paragraph */}
      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{blog.paragraph}</p>
      <p className="text-sm">By {blog.author} | {blog.date}</p>
      <a href={blog.link} className="text-[#3d6a64] hover:underline">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
