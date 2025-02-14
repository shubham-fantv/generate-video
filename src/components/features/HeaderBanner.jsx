import React, { useCallback, useRef, useState } from "react";
import VideoCharacterTabs from "./Section2";
import { Tabs, Tab, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AutoFillInput from "../common/AutoFillInput";
import { throttle } from "lodash";

const videoList = [
  { id: "1", url: "/video/new1.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "2", url: "/video/new2.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "3", url: "/video/new3.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "4", url: "/video/new4.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "5", url: "/video/new5.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "6", url: "/video/new6.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "7", url: "/video/new7.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  { id: "8", url: "/video/new8.mp4", lyrics: "dgfask dgaks askdf askdfka" },
];

const charecter = [
  {
    id: "0",
    url: "/icons/charecter/cat1.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
  {
    id: "1",
    url: "/icons/charecter/cat2.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
  {
    id: "2",
    url: "/icons/charecter/cat3.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
  {
    id: "3",
    url: "/icons/charecter/cat4.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
  {
    id: "4",
    url: "/icons/charecter/cat5.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
  {
    id: "5",
    url: "/icons/charecter/cat6.png",
    items: [
      { id: "1", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "2", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "3", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "4", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
      { id: "5", url: "/icons/charecter/image1.png", lyrics: "dgfask dgaks askdf askdfka" },
    ],
  },
];

const HeaderBanner = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [videoCategory, setVideoCategory] = useState("all");

  const [selectedCharacters, setSelectedCharacters] = useState("0");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const videoCategories = [
    "All",
    "Funny",
    "Reel",
    "Explainer Video",
    "YouTube",
    "Professional",
    "Sales Pitch",
  ];

  const tabs = [
    { id: "video", label: "Video" },
    { id: "character", label: "Character" },
  ];

  const handleTabChange = (tabId) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const newIndex = tabs.findIndex((tab) => tab.id === tabId);
    setSlideDirection(newIndex > currentIndex ? "right" : "left");
    setActiveTab(tabId);
  };

  // Throttled function
  const handleMouseEnter = useCallback(
    throttle((index) => {
      setHoveredIndex(index);
    }, 500), // Adjust the delay as needed
    []
  );

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const swiperRef = useRef(null);
  const charSwiperRef = useRef(null);

  return (
    <div>
      <div className="relative p-6 md:p-6 text-white bg-[url('/images/bannerBg.png')] bg-cover bg-center">
        {/* Responsive Navbar */}
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-[#1E1E1E] backdrop-blur-md rounded-full">
          <div className="text-xl font-bold">Logo</div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <img src="/icons/menu.svg" alt="menu" className="w-6 h-6" />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1E1E1E] p-4 rounded-lg md:hidden">
              <ul className="space-y-4">
                <li className="cursor-pointer font-nineties">Platform</li>
                <li className="cursor-pointer font-nineties">Solutions</li>
                <li className="cursor-pointer font-nineties">Resources</li>
                <li className="cursor-pointer font-nineties">Pricing</li>
              </ul>
            </div>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li className="cursor-pointer font-nineties">Platform</li>
            <li className="cursor-pointer font-nineties">Solutions</li>
            <li className="cursor-pointer font-nineties">Resources</li>
            <li className="cursor-pointer font-nineties">Pricing</li>
          </ul>
          <button className="hidden md:block bg-white text-[#1E1E1E] font-bold px-4 py-2 rounded-full">
            Launch App
          </button>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-[50px] md:pb-[150px] px-4 md:px-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-[64px] leading-tight md:leading-[64px] text-[#FFF] font-nineties">
              Transform your stories with living, Breathing AI Characters
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-[#FFF]">
              Create unforgettable stories with characters who write themselves. Our revolutionary
              AI technology brings your imagination to life, helping you craft deeper narratives
              with personalities that feel genuinely human.
            </p>
            <button
              style={{
                background: "linear-gradient(180deg, #5A5A5A 0%, #1E1E1E 100%)",
                border: "1px solid #FFFFFF",
                boxShadow: "0px 1px 6px 0px #00000059",
              }}
              className="text-sm font-bold mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded-xl w-full md:w-auto"
            >
              Launch App
            </button>
          </div>

          {/* Right Side TV Image */}
          <div className="w-full lg:w-[50%]">
            <img src="/images/tv.png" alt="Retro TV" className="w-full md:w-[672px] rounded-lg" />
          </div>
        </div>

        {/* Concept Section */}
        <div className="text-white p-4 md:p-8">
          <h1 className="text-center text-[#FFF] text-3xl md:text-[56px] font-nineties font-bold">
            From Concept to Creation
          </h1>
          <p className="m-auto flex text-[#D2D2D2] text-center mt-2 text-base md:text-lg max-w-2xl">
            Create unforgettable stories with characters who write themselves. Our revolutionary AI
            technology brings your imagination to life, helping you craft deeper narratives with
            personalities that feel genuinely human.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="p-4">
        <div className="flex items-center justify-center">
          <div
            style={{ border: "1px solid #FFFFFF33" }}
            className="bg-[#FFFFFF0D] p-2 rounded-full flex gap-1 relative w-full md:w-auto"
          >
            <div
              className={`absolute transition-all duration-300 ease-out
              ${activeTab === "video" ? "left-2" : "left-[calc(50%_-_2px)]"}
              bg-gradient-to-r from-pink-300 to-orange-300 
              h-[calc(100%_-_16px)] w-[calc(50%_-_8px)] rounded-full
              border-4 border-white shadow-[0px_0px_19px_0px_#FFFFFFBF]`}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                px-4 md:px-8 py-3 rounded-full transition-all duration-300
                relative z-10 flex-1 md:flex-none md:min-w-[120px]
                ${activeTab === tab.id ? "text-black" : "text-gray-400 hover:text-gray-200"}
              `}
              >
                <span className={`block transition-all duration-300`}>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-4 md:px-8">
        {activeTab === "video" && (
          <div className="mt-6">
            {/* Video Categories */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 text-sm md:text-base">
              {videoCategories.map((category) => (
                <Button
                  key={category}
                  variant={videoCategory === category.toLowerCase() ? "contained" : "none"}
                  onClick={() => setVideoCategory(category.toLowerCase())}
                  className="capitalize w-[110px] md:w-[150px] text-sm md:text-base"
                  style={{
                    background: videoCategory === category.toLowerCase() ? "#FFF" : "#FFFFFF0D",
                    color: videoCategory === category.toLowerCase() ? "#1E1E1E" : "#D2D2D2",
                    borderRadius: "12px",
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Video Swiper */}
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                1024: { slidesPerView: 3.2, spaceBetween: 30 },
              }}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
            >
              {videoList.map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-gray-800 p-[1px] rounded-[24px] md:rounded-[48px] relative border-2 border-transparent before:absolute before:inset-0 before:rounded-[24px] md:before:rounded-[48px] before:border-2 before:border-transparent before:bg-gradient-to-b before:from-[#FFA0FF] before:to-[#FFCEA0] before:-z-10"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <video
                      src={video.url}
                      className="rounded-[24px] md:rounded-[48px] w-full h-[250px] md:h-[400px] object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                    {hoveredIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white rounded-[24px] md:rounded-[48px] pointer-events-none">
                        <img src="/icons/play-circle.png" className="w-12 md:w-auto" />
                      </div>
                    )}
                    {hoveredIndex === index && (
                      <div className="border w-[90%] left-0 right-0 mx-auto bottom-6 border-white absolute rounded-[24px] md:rounded-[48px] pointer-events-none">
                        <AutoFillInput />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="hidden md:flex justify-between mt-4">
                <div className="left-shadow">
                  <button className="custom-swiper-button-prev bg-white absolute top-1/2 left-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-black rounded-full transition">
                    <img src="/icons/left-arrow.png" />
                  </button>
                </div>
                <div className="right-shadow">
                  <button className="custom-swiper-button-next bg-white absolute top-1/2 right-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-black rounded-full transition">
                    <img src="/icons/right-arrow.png" />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        )}

        {activeTab === "character" && (
          <div className="mt-8">
            {/* Character Selection */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {charecter.map((item) => (
                <div
                  key={item.id}
                  style={{
                    boxShadow: item.id === selectedCharacters ? "0px 0px 11px 0px #FFA0FF" : null,
                    border:
                      item.id === selectedCharacters
                        ? "3px solid #FFA0FF"
                        : "3px solid transparent",
                  }}
                  className="cursor-pointer rounded-full w-16 h-16 md:w-auto md:h-auto"
                  onClick={() => setSelectedCharacters(item?.id)}
                >
                  <img src={item?.url} className="w-full h-full object-cover rounded-full" />
                </div>
              ))}
            </div>

            {/* Character Swiper */}
            <Swiper
              slidesPerView={1.3}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: 2.3, spaceBetween: 10 },
                1024: { slidesPerView: 3.3, spaceBetween: 10 },
              }}
              modules={[Navigation]}
              onSwiper={(swiper) => (charSwiperRef.current = swiper)}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              className="mt-8 md:mt-12"
            >
              {charecter[selectedCharacters].items.map((character, index) => (
                <SwiperSlide key={index} className="p-1 m-0">
                  <img
                    src={character.url}
                    alt="Character"
                    className="rounded-xl w-full md:w-[400px] object-cover"
                  />
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="hidden md:flex justify-between mt-4">
                <div className="left-shadow">
                  <button className="custom-swiper-button-prev bg-white absolute top-1/2 left-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-black rounded-full transition">
                    <img src="/icons/left-arrow.png" />
                  </button>
                </div>
                <div className="right-shadow">
                  <button className="custom-swiper-button-next  bg-white absolute top-1/2 right-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center  text-black rounded-full transition">
                    <img src="/icons/right-arrow.png" />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBanner;
