import React, { useEffect, useState } from 'react';
import image1 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_bb50a06f.jpg";
import image2 from "../../images/sliders/Profile Pic 1.png";
import image3 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.09.49_2c7d0f0b.jpg";
import image4 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";
import image5 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function SpecificBlog() {

  const [blog, setBlog] = useState([]); 
  const [allblogs,setallblogs]=useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://joya-back.onrender.com/blog/${id}`);
        setBlog(response.data.data); 
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // Set loading to false
      }

      try {
        const response = await axios.get(`https://joya-back.onrender.com/blog`);
        setallblogs(response.data.data); 
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
       
      }
    };

    fetchBlogs();
  }, []); 

  const {id}=useParams();
  console.log(blog)

  
    const similarProjects = [
        {
          title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
          description: "Learn about the new rules introduced by the Dubai Land Department aimed at increasing transparency.",
          imgSrc: image3,
          link: "/SpecificBlog",
        },
        {
          title: "Unlocking Opportunities in Real Estate",
          description: "Discover the challenges and opportunities that define the journey of a real estate agent in Dubai.",
          imgSrc: image4,
          link: "/SpecificBlog",
        },
        {
          title: "Investment Insights: Dubai’s Real Estate Trends",
          description: "Explore key real estate trends shaping the Dubai property market and how to make the best investment decisions.",
          imgSrc: image5,
          link: "/SpecificBlog",
        },
      ];

  return (
    <div style={{ backgroundColor: '#041d1a', padding: '20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#ffffff' }}>
      <div style={{ paddingTop: 120, color: "#041d1a" }}>
  .
         </div>

        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#cccccc', textAlign: 'left' }}>
          <a href="#" style={{ color: '#cccccc', textDecoration: 'none', marginRight: '10px' }}>Dubai Properties</a>
          <span style={{ color: '#777777', marginRight: '10px' }}>&gt;</span>
          <a href="#" style={{ color: '#cccccc', textDecoration: 'none' }}>Dubai Real Estate News</a>
        </nav>

        {/* Blog Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          {/* Title */}
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '20px', lineHeight: '1.2' }}>
            {blog.title}
          </h1>
          {/* Author Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
            {/* Author Image */}
            <img
              src={blog.agent}
              alt="Author"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '2px solid #eaeaea',
              }}
            />
            {/* Metadata */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1rem', color: '#cccccc' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <i className="fa fa-user-circle" style={{ color: '#cccccc', marginRight: '5px' }}></i>
                Nabeel Hammudeh
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <i className="fa fa-calendar" style={{ color: '#cccccc', marginRight: '5px' }}></i>
                Monday, 22 July, 2024
              </span>
    
            </div>
          </div>
        </header>

        {/* Blog Image */}
        <div style={{ marginBottom: '40px' }}>
          <img
            src={blog.image}
            alt="Blog banner"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Blog Content */}
        <article style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ffffff' }}>
          <p>
            Choosing the right real estate agent in Dubai is an essential step in making your real estate journey smooth
            and successful. With the rapidly growing real estate market in Dubai, having the best agent by your side
            ensures you have access to valuable insights and guidance tailored to your needs.
          </p>
          <p>
            At fäm Properties, we pride ourselves on connecting you with experienced agents who understand the complexities
            of Dubai's dynamic real estate market. Our agents specialize in providing personalized services to help you
            find your dream home, investment property, or rental opportunity.
          </p>

          {/* Additional Content */}
          <section>
            <h2
              style={{
                fontSize: '1.8rem',
                marginTop: '30px',
                marginBottom: '15px',
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
                paddingBottom: '5px',
              }}
            >
              Key Factors to Consider When Choosing a Real Estate Agent in Dubai
            </h2>
            <p>
              <strong>Experience & Expertise:</strong> Selecting a broker with extensive experience and a proven track
              record is crucial. An experienced agent brings superior negotiation skills, invaluable market insights,
              and a deep understanding of Dubai’s real estate landscape, significantly enhancing your transaction's
              success.
            </p>
            <p>
              <strong>Local Market Knowledge:</strong> Dubai’s real estate market is vast and rapidly evolving. Choose an
              agency well-versed in the neighborhoods you’re interested in, and knowledgeable about property values,
              market trends, and future development plans.
            </p>

            <h2
              style={{
                fontSize: '1.8rem',
                marginTop: '30px',
                marginBottom: '15px',
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
                paddingBottom: '5px',
              }}
            >
              Finding a Reputable Real Estate Agent in Dubai
            </h2>
            <p>
              <strong>Seek Recommendations:</strong> Reach out to friends, family, or colleagues who have recently engaged
              in property transactions in Dubai. Their experiences can provide valuable insights into potential agents.
            </p>

            <h2
              style={{
                fontSize: '1.8rem',
                marginTop: '30px',
                marginBottom: '15px',
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
                paddingBottom: '5px',
              }}
            >
              Essential Questions to Ask Before Hiring a Real Estate Agent
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Can you share testimonials or contacts of previous clients for reference?</li>
              <li>What is your level of experience in the real estate industry?</li>
            </ul>

            <h2
              style={{
                fontSize: '1.8rem',
                marginTop: '30px',
                marginBottom: '15px',
                color: '#ffffff',
                borderBottom: '2px solid #ffffff',
                paddingBottom: '5px',
              }}
            >
              Tips for Choosing the Best Real Estate Agent in Dubai
            </h2>
            <p>
              <strong>Meet Multiple Agents:</strong> Don’t settle on the first agent you meet. Interview several certified
              brokers to find the one that best matches your requirements.
            </p>
          </section>
        </article>

        {/* Similar Projects Section */}
<section style={{ marginTop: '60px' }}>
  <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', borderBottom: '2px solid #ffffff', paddingBottom: '5px' }}>
    Similar Topics
  </h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
    {allblogs.map((project) => (
      <a
        href={`/SpecificBlog/${project._id}`} // Dynamically link to SpecificBlog/:id
        key={project._id} // Use _id as the unique key
        style={{
          backgroundColor: '#1c1e1b',
          borderRadius: '10px',
          overflow: 'hidden',
          textDecoration: 'none',
          color: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src={project.image || "https://via.placeholder.com/300"} // Fallback image
          alt={project.title || "No Title"}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
        />
        <div style={{ padding: '15px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
            {project.title || "No Title"}
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#a0b3b1' }}>
            {project.description ? project.description.slice(0, 100) + "..." : "No description available."}
          </p>
        </div>
      </a>
    ))}
  </div>
</section>

      </div>
    </div>
  );
}
