import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa"; // FontAwesome icons
import { useNavigate, useParams } from "react-router-dom"; // For navigation and params
import Sidebar from "./SideBar";

const EditBlog = () => {
  const { id } = useParams(); // Get the blog id from the URL
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    paragraph: "",
    author: "",
    date: "",
    link: "",
    image: "",
  });

  // Simulate fetching blog data based on ID (could be replaced with an API call)
  useEffect(() => {
    // Mock data for the blog (replace this with an actual API call)
    const fetchedBlog = {
      id,
      title: "Blog Title 1",
      paragraph: "This is a short description of the blog content.",
      author: "John Doe",
      date: "2024-12-01",
      link: "https://example.com",
      image: "https://via.placeholder.com/300x200",
    };
    setBlog(fetchedBlog);
  }, [id]);

  const handleSaveChanges = () => {
    // Implement the logic to save changes (e.g., send to API)
    alert("Blog updated!");
    navigate("/blogs"); // Redirect back to Blogs page after save
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, image: URL.createObjectURL(file) }); // Update image preview
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Edit Blog</h1>

        {/* Blog Form */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              placeholder="Enter blog title"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Paragraph</label>
            <textarea
              value={blog.paragraph}
              onChange={(e) =>
                setBlog({ ...blog, paragraph: e.target.value })
              }
              placeholder="Enter blog paragraph"
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
              rows="5"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Author</label>
            <input
              type="text"
              value={blog.author}
              onChange={(e) => setBlog({ ...blog, author: e.target.value })}
              placeholder="Enter author name"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={blog.date}
              onChange={(e) => setBlog({ ...blog, date: e.target.value })}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Link</label>
            <input
              type="text"
              value={blog.link}
              onChange={(e) => setBlog({ ...blog, link: e.target.value })}
              placeholder="Enter link to the blog"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full text-[#3d6a64] mb-4"
            />
            {blog.image && <img src={blog.image} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />}
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              onClick={handleSaveChanges}
              className="flex items-center bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
            >
              <FaSave size={20} className="mr-2" />
              Save Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
