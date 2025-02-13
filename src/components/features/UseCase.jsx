import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import RotatingShowcase from "../common/RotatingImage";

// const videos = ["/video/new1.mp4", "/video/new2.mp4", "/video/new3.mp4", "/video/new4.mp4"];

const videos = [
  { poster: "/icons/charecter/image1.png", video: "/video/new1.mp4" },
  { poster: "/icons/charecter/image1.png", video: "/video/new2.mp4" },
  { poster: "/icons/charecter/image1.png", video: "/video/new3.mp4" },
  { poster: "/icons/charecter/image1.png", video: "/video/new4.mp4" },
];

const avatars = [
  { src: "/icons/charecter/cat1.png" },
  { src: "/icons/charecter/cat2.png" },
  { src: "/icons/charecter/cat3.png" },
  { src: "/icons/charecter/cat4.png" },
  { src: "/icons/charecter/cat5.png" },
  { src: "/icons/charecter/cat6.png" },
  { src: "/icons/charecter/image1.png" },
];
const UseCasesGrid = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [activeIndexCourasel, setActiveIndexCourasel] = useState(0);
  const swiperRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className=" min-h-screen p-8">
      <h2 className="text-white text-[56px] font-serif font-nineties text-center mb-8">
        Use Cases
      </h2>

      <div className="max-w-8xl mx-auto grid grid-cols-2 gap-4">
        <div className="relative rounded-[48px] bg-[url('/images/use-case/bg1.png')] bg-cover bg-center  overflow-hidden">
          <h1 className="text-white text-2xl pt-20 flex m-auto justify-center  shadow-[0px 5px 14px 0px #000000BF]">
            AI-Enhanced Podcast Creation
          </h1>

          {/* <div className="w-full max-w-4xl mx-auto mt-20 py-5 relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              loop={true}
              //   autoplay={{ delay: 3000, disableOnInteraction: false }}
              autoplay={false}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {videos.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center w-full "
                  style={{ width: "500px !important" }}
                >
                  {activeIndex === index ? (
                    <video
                      className="w-[500px] h-[287px] rounded-xl shadow-lg object-cover"
                      src={item.video}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <img
                      className="w-[500px] h-[287px] rounded-xl shadow-lg object-cover"
                      src={item.poster}
                      alt={`Video ${index + 1}`}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

          <div className="w-full max-w-4xl mx-auto mt-20 py-5 relative">
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={2}
              loop
              autoplay={false}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="w-full"
              onSlideChange={(swiper) => setActiveIndexCourasel(swiper.realIndex)}
              ref={swiperRef}
            >
              {videos.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center w-full">
                  <div className="relative w-[500px] h-[287px]">
                    {activeIndexCourasel === index ? (
                      <video
                        className="w-full h-full rounded-xl shadow-lg object-cover"
                        src={item.video}
                        poster={item.poster}
                        muted
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                        onEnded={handleVideoEnd}
                      />
                    ) : (
                      <img
                        className="w-full h-full rounded-xl shadow-lg object-cover"
                        src={item.poster}
                        alt={`Video ${index + 1}`}
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl overflow-hidden aspect-[657/537]  bg-[url('/images/use-case/bg2.png')] bg-cover bg-center"
        >
          <div className="flex absolute inset-0 items-center relative">
            <h2 className="text-white text-2xl font-semibold p-6">
              AI-Powered Product <br /> Advertisements
            </h2>
            <motion.div
              className="absolute right-10 top-0 h-full flex flex-col gap-4"
              animate={isInView ? { y: isHovered ? "-100%" : "0%" } : { y: "0%" }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3, 1, 1, 1, 2, 3].map((item, i) => (
                <img
                  key={i}
                  src={`/images/use-case/ai-powred/ai${item}.png`}
                  className="w-24 h-32 rounded-xl object-cover"
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute right-40 top-0 h-full flex flex-col gap-4"
              animate={isInView ? { y: isHovered ? "100%" : "0%" } : { y: "0%" }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3, 1, 1, 1, 2, 3].map((item, i) => (
                <img
                  key={i}
                  src={`/images/use-case/ai-powred/ai${item}.png`}
                  className="w-24 h-32 rounded-xl object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
        {/* <RotatingShowcase /> */}
        <div className="relative rounded-2xl overflow-hidden aspect-[670/350]  bg-[url('/images/use-case/bg3.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <h1 className="text-white text-2xl pt-12 flex m-auto justify-center">
              AI-Generated Music Videos
            </h1>
            <div className="flex">
              <div className="flex items-center">
                <img src="/images/use-case/music-left.png" />
              </div>
              <div>
                <img src="/images/use-case/mic.png" />
              </div>
              <div className="flex items-center">
                <img src="/images/use-case/music-right.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[670/350] bg-[url('/images/use-case/bg4.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <h1 className="text-white text-2xl pt-12 flex m-auto justify-center">
              Automated Video Editing for Creators
            </h1>
            <img
              className=" h-[287px] rounded-xl shadow-lg object-cover"
              src={"/images/use-case/automated.png"}
              alt={`Video `}
            />
          </div>
        </div>
        {/* Bottom row - full width */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/6] col-span-2 bg-[url('/images/use-case/bg5.png')] bg-cover bg-center">
          <h1 className="text-white text-2xl pt-12 flex m-auto justify-center  shadow-[0px 5px 14px 0px #000000BF]">
            Social Media Content Creation
          </h1>
          <div className="flex justify-center">
            <img src="/images/socialImg.png" />
          </div>
        </div>
        {/* <div className="relative rounded-2xl overflow-hidden aspect-[670/440]  bg-[url('/images/use-case/bg6.png')] bg-cover bg-center">
          <div className="">
            <h1 className="text-white text-2xl pt-12 flex m-auto justify-center">
              Language specific video content
            </h1>
            <div className="flex absolute  right-10 bottom-0">
              <video
                className="w-[500px] h-[287px] rounded-xl shadow-lg object-cover"
                src={"/video/new4.mp4"}
                // poster={item.poster}
                autoPlay={false}
                loop
                muted
              />
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[670/440] bg-[url('/images/use-case/bg4.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <h1 className="text-white text-2xl pt-12 flex m-auto justify-center">
              Corporate training & presentaion videos
            </h1>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[670/440]  bg-[url('/images/use-case/bg8.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <h1 className="text-white text-2xl pt-12 flex m-auto justify-center">
              Educational Videos
            </h1>
            <div className="flex">
              <div className="flex absolute  justify-center right-0 left-0 m-auto bottom-0">
                <video
                  style={{ boxShadow: "10px 10px 24px 0px #000000A6" }}
                  className="w-[580px] h-[327px] rounded-xl shadow-lg object-cover"
                  src={"/video/new4.mp4"}
                  // poster={item.poster}
                  autoPlay={false}
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[670/440] bg-[url('/images/use-case/bg9.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <h1 className="text-white text-2xl p-12 flex m-auto justify-center">
              Personalized AI Avatars for branding
            </h1>
            <div className="grid grid-cols-4 gap-6 px-12">
              {avatars.map((avatar, index) => (
                <div
                  style={{ boxShadow: "0px 0px 24px 0px #000000" }}
                  key={index}
                  className={`relative w-[107px] h-[107px] rounded-full overflow-hidden transition-all "border-4 border-blue-500 shadow-lg`}
                >
                  <img
                    src={avatar.src}
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-full object-cover shadow-[0px 0px 24px 0px #000000]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UseCasesGrid;
