import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AgentSlider() {
  const agentsData = [
    {
      image: "https://i.imgur.com/MNCx91k.png",
      // name: "maryam island",
    },
    {
      image: "https://i.imgur.com/nocvyoR.png",
      // name: "mag property development",
    },
    {
      image: "https://i.imgur.com/5ehWJJH.png",
      // name: "meras",
    },
    {
      image: "https://i.imgur.com/478spob.png",
      // name: "sobha realty",
    },
    {
      image: "https://i.imgur.com/TmcjRAJ.png",
      // name: "alef group",
    },
    {
      image: "https://i.imgur.com/T5hDhjU.png",
      // name: "arada",
    },
    {
      image: "https://i.imgur.com/xEHpGLO.png",
      // name: "leos",
    },
    {
      image: "https://i.imgur.com/qd8weQ7.png",
      // name: "dubai holding",
    },
    {
      image: "https://i.imgur.com/ZpoFCxV.png",
      // name: "azizi developments",
    },
    {
      image: "https://i.imgur.com/f3pals3.png",
      // name: "binghatti",
    },
    {
      image: "https://i.imgur.com/M9wkuwh.png",
      // name: "damac",
    },
    {
      image: "https://i.imgur.com/khIsqmC.png",
      // name: "emaar",
    },
    {
      image: "https://i.imgur.com/DVvUlES.png",
      // name: "samana developers",
    },
    {
      image: "https://i.imgur.com/YR9yKH2.png",
      // name: "meraki developers",
    },
    {
      image: "https://i.imgur.com/v22vzTo.png",
      // name: "aqua",
    },
    {
      image: "https://i.imgur.com/0aqtwf9.png",
      // name: "nakheel",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mt-10 agent-slider">
      <div className="text-center">
        <p className="text-[#f0ede6] font-header mb-3 text-sm md:text-base lg:text-lg">
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className="text-2xl md:text-4xl text-[#f1f0ec] font-header mb-8">
        Our Partners
        </h1>
        <div className="mx-10 md:mx-14 mt-3 py-8 gap-x-2 slick-initialized" dir="ltr">
          <Slider {...settings}>
            {agentsData.map((agent, index) => (
              <div key={index} className="slick-slide">
                <div className="flex flex-col justify-center items-center bg-[#111612] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                  <div className="bg-[#f0ede6] w-fit mx-auto rounded-2xl">
                    <img
                      src={agent.image}
                      alt={`Agent Logo ${index + 1}`}
                      className="mx-auto w-60 h-36 object-contain rounded-xl border-2 border-[#698f8c]"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-[#f1f0ec] font-header font-semibold uppercase mt-3">
                    {agent.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AgentSlider;
