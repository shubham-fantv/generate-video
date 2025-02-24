import React, { useState } from "react";
import { Tabs, Tab, Button, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const VideoCharacterTabs = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [videoCategory, setVideoCategory] = useState("all");

  const isMobile = useMediaQuery("(max-width:768px)");
  const videoCategories = [
    "All",
    "Funny",
    "Reel",
    "Explainer Video",
    "YouTube",
    "Professional",
    "Sales Pitch",
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="mt-[150px] text-white  p-8">
      <h1 className="text-center text-4xl font-bold">From Concept to Creation</h1>
      <p className="text-center mt-2 text-lg">
        Create unforgettable stories with characters who write themselves. Our revolutionary AI
        technology brings your imagination to life, helping you craft deeper narratives with
        personalities that feel genuinely human.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mt-6">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab value="video" label="Video" />
          <Tab value="character" label="Character" />
        </Tabs>
      </div>

      {/* Video Section */}
      {activeTab === "video" && (
        <div className="mt-6">
          {/* Video Categories */}
          <div className="flex justify-center gap-3 mb-4">
            {videoCategories.map((category) => (
              <Button
                key={category}
                variant={videoCategory === category.toLowerCase() ? "contained" : "outlined"}
                onClick={() => setVideoCategory(category.toLowerCase())}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
          {/* Video Carousel */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            className="mt-4"
          >
            {[1, 2, 3, 4, 5].map((video, index) => (
              <SwiperSlide key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="relative">
                  <img
                    src={`https://source.unsplash.com/400x250/?technology,${index}`}
                    alt="Video Thumbnail"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg">
                    ▶
                  </button>
                </div>
                <p className="mt-2 text-center">Lorem ipsum dolor sit amet.</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Character Section */}
      {activeTab === "character" && (
        <div className="mt-6">
          {/* Character Carousel */}
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="mt-4"
          >
            {[1, 2, 3, 4, 5].map((character, index) => (
              <SwiperSlide key={index} className="bg-gray-900 p-4 rounded-lg">
                <img
                  src={`https://source.unsplash.com/200x200/?portrait,${index}`}
                  alt="Character"
                  className="rounded-full mx-auto w-24 h-24 object-cover border-4 border-pink-500"
                />
                <p className="text-center mt-2">Character {index + 1}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default VideoCharacterTabs;
