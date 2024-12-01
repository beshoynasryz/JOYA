import React, { useState } from "react";
import Sidebar from "./SideBar";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      language: "English",
      email: "john.doe@example.com",
      whatsapp: "+123456789",
      image: "https://via.placeholder.com/150", // Placeholder image
    },
  ]);

  const addTeamMember = () => {
    setTeamMembers([
      ...teamMembers,
      {
        id: teamMembers.length + 1,
        name: "",
        position: "",
        language: "",
        email: "",
        whatsapp: "",
        image: "https://via.placeholder.com/150",
      },
    ]);
  };

  const handleImageUpload = (index, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamMembers((prev) =>
          prev.map((member, i) =>
            i === index ? { ...member, image: reader.result } : member
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteMember = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      const updatedMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updatedMembers);
    }
  };

  const handleSaveMember = (index) => {
    const confirmed = window.confirm("Are you sure you want to save these details?");
    if (confirmed) {
      console.log("Saved details for member:", teamMembers[index]);
      alert(`Saved details for: ${teamMembers[index].name || "Unnamed Member"}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Team Members</h1>

        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-[#1a1f1e] p-6 rounded shadow-lg"
          >
            {/* Left Side - Image */}
            <div className="relative flex justify-center items-center mb-6 md:mb-0">
              <img
                src={member.image}
                alt="Team Member"
                className="rounded-full w-52 h-52 object-cover"
              />
              <button
                onClick={() => document.getElementById(`fileInput-${index}`).click()}
                className="absolute top-2 right-2 bg-[#3d6a64] text-white p-3 rounded-full focus:outline-none hover:bg-[#3d6a64]"
              >
                <span className="text-xl">+</span>
              </button>
              <input
                id={`fileInput-${index}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(index, e.target.files[0])}
              />
            </div>

            {/* Right Side - Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) =>
                    setTeamMembers((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, name: e.target.value } : m
                      )
                    )
                  }
                  placeholder="Enter name"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Position</label>
                <input
                  type="text"
                  value={member.position}
                  onChange={(e) =>
                    setTeamMembers((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, position: e.target.value } : m
                      )
                    )
                  }
                  placeholder="Enter position"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <input
                  type="text"
                  value={member.language}
                  onChange={(e) =>
                    setTeamMembers((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, language: e.target.value } : m
                      )
                    )
                  }
                  placeholder="Enter language"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) =>
                    setTeamMembers((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, email: e.target.value } : m
                      )
                    )
                  }
                  placeholder="Enter email"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp</label>
                <input
                  type="text"
                  value={member.whatsapp}
                  onChange={(e) =>
                    setTeamMembers((prev) =>
                      prev.map((m, i) =>
                        i === index ? { ...m, whatsapp: e.target.value } : m
                      )
                    )
                  }
                  placeholder="Enter WhatsApp number"
                  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
                />
              </div>
            </div>

            {/* Save and Delete Buttons at the Bottom of the Card */}
            <div className="flex justify-center mt-6 space-x-4">
              {/* Save Button */}
              <button
                onClick={() => handleSaveMember(index)}
                className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
              >
                Save
              </button>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteMember(index)}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add More Team Member Button */}
        <div className="text-center mt-6">
          <button
            onClick={addTeamMember}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            Add More Team Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
