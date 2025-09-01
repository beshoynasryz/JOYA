import React from 'react';
import image1 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_bb50a06f.jpg";
import image2 from "../../images/sliders/Profile Pic 1.png";
import image3 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.09.49_2c7d0f0b.jpg";
import image4 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";
import image5 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";

export default function SpecificBlog() {
  const blog = {
    title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
    agent: image2,
    image: image1,
  };

  const allblogs = [
    {
      _id: "1",
      title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
      description: "Learn about the new rules introduced by the Dubai Land Department aimed at increasing transparency.",
      image: image3,
      category: "REGULATIONS",
      author: "Nabeel Hammudeh",
      date: "Monday, 22 July, 2024",
      views: 120,
    },
    {
      _id: "2",
      title: "Unlocking Opportunities in Real Estate",
      description: "Discover the challenges and opportunities that define the journey of a real estate agent in Dubai.",
      image: image4,
      category: "CAREER",
      author: "Nabeel Hammudeh",
      date: "Friday, 19 July, 2024",
      views: 250,
    },
    {
      _id: "3",
      title: "Investment Insights: Dubai’s Real Estate Trends",
      description: "Explore key real estate trends shaping the Dubai property market and how to make the best investment decisions.",
      image: image5,
      category: "INVESTMENT",
      author: "Nabeel Hammudeh",
      date: "Wednesday, 17 July, 2024",
      views: 300,
    },
  ];

  return (
    <div className="bg-[#041d1a] text-white min-h-screen">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="pt-24"></div>

        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Dubai Properties</a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="hover:text-white">Dubai Real Estate News</a>
        </nav>

        {/* Blog Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <img
              src={blog.agent}
              alt="Author"
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="flex items-center gap-2">
                <i className="fa fa-user-circle"></i>
                Nabeel Hammudeh
              </span>
              <span className="flex items-center gap-2">
                <i className="fa fa-calendar"></i>
                Monday, 22 July, 2024
              </span>
            </div>
          </div>
        </header>

        {/* Blog Image */}
        <div className="mb-12">
          <img
            src={blog.image}
            alt="Blog banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="md:col-span-3 text-lg leading-relaxed text-gray-200">
            <p className="mb-6">
              Choosing the right real estate agent in Dubai is an essential step in making your real estate journey smooth
              and successful. With the rapidly growing real estate market in Dubai, having the best agent by your side
              ensures you have access to valuable insights and guidance tailored to your needs.
            </p>
            <p className="mb-6">
              At fäm Properties, we pride ourselves on connecting you with experienced agents who understand the complexities
              of Dubai's dynamic real estate market. Our agents specialize in providing personalized services to help you
              find your dream home, investment property, or rental opportunity.
            </p>

            <section id="key-factors" className="mb-8">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-white border-b-2 border-gray-500 pb-2">
                Key Factors to Consider
              </h2>
              <p>
                <strong>Experience & Expertise:</strong> Selecting a broker with extensive experience and a proven track
                record is crucial. An experienced agent brings superior negotiation skills, invaluable market insights,
                and a deep understanding of Dubai’s real estate landscape, significantly enhancing your transaction's
                success.
              </p>
            </section>

            <section id="finding-agent" className="mb-8">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-white border-b-2 border-gray-500 pb-2">
                Finding a Reputable Agent
              </h2>
              <p>
                <strong>Seek Recommendations:</strong> Reach out to friends, family, or colleagues who have recently engaged
                in property transactions in Dubai. Their experiences can provide valuable insights into potential agents.
              </p>
            </section>

            <section id="essential-questions" className="mb-8">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-white border-b-2 border-gray-500 pb-2">
                Essential Questions to Ask
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Can you share testimonials or contacts of previous clients for reference?</li>
                <li>What is your level of experience in the real estate industry?</li>
              </ul>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-4 text-white">Table of Contents</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#key-factors" className="hover:text-white">Key Factors</a></li>
                <li><a href="#finding-agent" className="hover:text-white">Finding an Agent</a></li>
                <li><a href="#essential-questions" className="hover:text-white">Essential Questions</a></li>
              </ul>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-white">Share This Post</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fas fa-link"></i></a>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar Projects Section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-8 text-white border-b-2 border-gray-500 pb-4">
            Similar Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allblogs.map((blog) => (
              <a
                href={`/SpecificBlog/${blog._id}`}
                key={blog._id}
                className="block bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative w-full h-56">
                  <img
                    src={blog.image || "https://via.placeholder.com/400"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-[#a0b3b1] text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {blog.title || "No Title"}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    By <span className="font-semibold text-white">{blog.author}</span> | {blog.date || "No Date"}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center font-semibold text-[#a0b3b1] hover:text-white transition-colors duration-300">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
                      <i className="fas fa-eye"></i>
                      <span className="font-medium">{blog.views || 0}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
