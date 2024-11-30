import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "INTEGRITY",
      content:
        "We act with honesty and transparency in all our dealings, ensuring trust and loyalty from clients and partners.",
    },
    {
      title: "EXCELLENCE",
      content:
        "We strive for the highest standards in every transaction, with attention to detail and a commitment to quality service.",
    },
    {
      title: "EMPOWERMENT",
      content:
        "We believe in empowering both our clients and team members to achieve financial freedom and personal growth by providing the tools, knowledge, and support they need to succeed.",
    },
    {
      title: "CLIENT-CENTRIC",
      content:
        "We focus on understanding and fulfilling our clients' unique needs, creating tailored solutions for their real estate aspirations.",
    },
    {
      title: "INNOVATION",
      content:
        "We stay ahead of market trends and embrace technology to offer a competitive edge in both client service and team operations.",
    },
    {
      title: "LONG-TERM RELATIONSHIPS",
      content:
        "We believe in building lasting relationships with clients, partners, and team members, ensuring mutual growth and loyalty.",
    },
  ];

  return (
    <div className="bg-[#041d1a] py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[#a0b3b1] font-bold mb-3 text-lg md:text-xl lg:text-2xl">
          SETTING NEW INDUSTRY STANDARDS
        </p>
        <h1 className="text-4xl md:text-5xl text-[#f1f0ec] font-bold mb-10">
          OUR VALUES
        </h1>
      </div>

      {/* Table-Like Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#111612] border border-[#354948] p-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center group"
          >
            <h2 className="text-xl md:text-2xl text-[#f1f0ec] font-bold mb-4 uppercase group-hover:scale-105 transition-transform duration-300">
              {value.title}
            </h2>
            <p className="text-[#a2a39b] text-base md:text-lg group-hover:opacity-80 group-hover:translate-y-1 transition-all duration-300">
              {value.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
