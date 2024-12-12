import React, { useState, useEffect } from "react";
import { FaSave, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../axios"; // Assuming axios instance is configured

const Sections = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [image, setImage] = useState(null);
  const [editSectionId, setEditSectionId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch existing sections
  const { data: sections, isLoading, isError } = useQuery({
    queryKey: ["sections"], // Query key
    queryFn: async () => {
      const response = await axiosInstance.get("/hero-sections");
      return response.data;
    },
    onError: (error) => {
      setErrorMessage("Error loading sections: " + error.message);
    }
  });

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Store file for FormData
  };

  // Handle save section mutation
  const { mutate: saveSection, isLoading: isSaving } = useMutation({
    mutationFn: async (newSection) => {
      const formData = new FormData();
      formData.append("title", newSection.title);
      formData.append("paragraph", newSection.paragraph);
      if (newSection.image) {
        formData.append("image", newSection.image);
      }
      try {
        if (newSection.id) {
          // Update existing section (PUT request)
          const response = await axiosInstance.put(`/hero-sections/${newSection.id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          setSuccessMessage("Section updated successfully!");
        } else {
          // Create new section (POST request)
          const response = await axiosInstance.post("/hero-sections", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          setSuccessMessage("Section created successfully!");
        }

        // On successful save or update, invalidate the sections cache and reset form state
        queryClient.invalidateQueries({ queryKey: ["sections"] });
        setTitle("");
        setparagraph("");
        setImage(null);
        setEditSectionId(null);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage("Error saving section: " + (error.response?.data?.message || error.message));
      }
    },
    onError: (error) => {
      setErrorMessage("Error saving section: " + (error.response?.data?.message || error.message));
    },
  });

  // Handle delete section mutation
  const { mutate: deleteSection, isLoading: isDeleting } = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/hero-sections/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sections"] });
    },
    onError: (error) => {
      setErrorMessage("Error deleting section: " + error.message);
    },
  });

  // Edit an existing section
  const handleEdit = (section) => {
    setTitle(section.title);
    setparagraph(section.paragraph);
    setImage(null); // We can clear the image preview when editing
    setEditSectionId(section.id);
  };

  // Handle delete confirmation
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      deleteSection(id); // Delete section
    }
  };

  // Handle saving the section (either create or edit)
  const handleSaveSection = () => {
    if (!title || !paragraph) {
      setErrorMessage("Title and paragraph are required.");
      return;
    }

    const newSection = {
      id: editSectionId,
      title,
      paragraph,
      image,
    };

    saveSection(newSection); // Trigger save mutation
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sections</h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 mb-4 text-center">{errorMessage}</div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="text-green-500 mb-4 text-center">{successMessage}</div>
        )}

        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          {isLoading ? (
            <p>Loading sections...</p>
          ) : isError ? (
            <p>Error loading sections</p>
          ) : (
            <>
              {sections && sections.length > 0 ? (
                sections.map((section) => (
                  <div key={section._id} className="flex justify-between items-center mb-4 p-4 bg-[#2c3432] rounded">
                    <div className="flex-1">
                      <h2 className="text-lg">{section.title}</h2>
                      <p>{section.paragraph}</p>
                      {section.image && (
                        <img
                          src={`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${section.image}`} // Assuming the image is saved in a public folder
                          alt={section.title}
                          className="mt-4 w-32 h-32 object-cover rounded"
                        />
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <button onClick={() => handleEdit(section)} className="text-yellow-500">
                        <FaEdit size={20} />
                      </button>
                      {/* <button onClick={() => handleDelete(section._id)} className="text-red-500">
                        <FaTrash size={20} />
                      </button> */}
                    </div>
                  </div>
                ))
              ) : (
                <p>No sections available.</p>
              )}
            </>
          )}
        </div>

        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-4 bg-[#2c3432] border rounded"
              placeholder="Enter title"
            />

            <label className="block mb-2">Paragraph</label>
            <textarea
              value={paragraph}
              onChange={(e) => setparagraph(e.target.value)}
              className="w-full p-2 mb-4 bg-[#2c3432] border rounded"
              placeholder="Enter paragraph"
            ></textarea>

            <label className="block mb-2">Image</label>
            <input type="file" onChange={handleImageChange} className="mb-4" />

            <button
              onClick={handleSaveSection}
              className={`w-full bg-green-500 p-3 rounded text-white ${isSaving ? "opacity-50" : ""}`}
              disabled={isSaving}
            >
              {editSectionId ? "Update Section" : "Save Section"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
