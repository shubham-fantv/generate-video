import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoCharacterTabs from "./Section2";
import { Tabs, Tab, Button, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AutoFillInput from "../common/AutoFillInput";
import { throttle } from "lodash";
import ReactPlayer from "react-player";

const videoList = [
  // {
  //   id: "0",
  //   title: "All",
  //   items: [
  //     { id: "1", url: "/video/new1.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  //     { id: "2", url: "/video/new2.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  //     { id: "3", url: "/video/new3.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  //     { id: "4", url: "/video/new4.mp4", lyrics: "dgfask dgaks askdf askdfka" },
  //   ],
  // },
  {
    id: "1",
    title: "Funny",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739986709017-replicate-prediction-st78n45txdrmc0cn14p8vps8t4.mp4",
        lyrics: "A penguin slipping on ice, then confidently walking away.",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739986787272-replicate-prediction-appxe9qmwhrma0cn14q9619d8c.mp4",
        lyrics:
          "A funny video of a cat trying to catch a laser pointer and crashing into a pillow and bursting.",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739986823240-replicate-prediction-gnnhecrbf9rme0cn14rs1k7n5c.mp4",
        lyrics: "A funny video of a robot attempting to do yoga but falling over.",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739986863494-replicate-prediction-htt0xeqx81rma0cn14qrjb5r9m.mp4",
        lyrics: "A funny video of a man giving a serious speech interrupted by a sneezing parrot.",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739986905744-replicate-prediction-4pvvym2x6hrma0cn2fjb5gfje0.mp4",
        lyrics: "A funny scene of a man slipping over a banana ",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739986942613-replicate-prediction-f92zjapkn5rma0cn14jt4vxez8.mp4",
        lyrics: "A funny video of a dog wearing sunglasses and dancing awkwardly.",
      },
    ],
  },
  {
    id: "2",
    title: "Music Videos",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739988320962-dj jam.mp4",
        lyrics: "A neon-lit DJ spinning tracks in a crowded club with pulsing lights",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739988377106-voilin.mp4",
        lyrics: "A violinist playing in a serene forest with leaves swirling around",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739988410486-Guitar.mp4",
        lyrics: "A guitarist playing by a bonfire under a starry night sky",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739988456383-jazzband.mp4",
        lyrics: "A jazz band performing in a cozy speakeasy with a smoky ambiance",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739988503216-tmpaitabpn8.mp4",
        lyrics:
          "Animated hip-hop artist rapping with graffiti-style visuals in the background “Beat drops, lights flash- make the moment last.",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739988552444-singinggirl2.mp4",
        lyrics:
          "A singer performing in the rain with dramatic lighting Lyrics: Dancing through the night feeling so right",
      },
    ],
  },
  {
    id: "3",
    title: "Social Content",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739987042181-replicate-prediction-jy81441xk9rma0cn18vrkawb78.mp4",
        lyrics: "A coffee enthusiast showing off latte art with a cheerful vibe",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739987102996-replicate-prediction-4p75kz4h5xrme0cn18vrf9vctr.mp4",
        lyrics: "A cute dog wearing sunglasses and “vlogging” its day",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739987137433-replicate-prediction-4h1nwhx85hrmc0cn18w9tvfqnc.mp4",
        lyrics: "A food blogger showcasing a sizzling street food dish",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739987175934-replicate-prediction-584y6g6n15rm80cn18w8c2my30.mp4",
        lyrics: "A travel vlogger standing on a cliff overlooking the ocean",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739987210360-replicate-prediction-j7f6mwa7t5rm80cn18wafqztbg.mp4",
        lyrics: "A fitness trainer demonstrating a quick home workout",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739987244163-replicate-prediction-vdnawczb79rma0cn2bssdzhsfg.mp4",
        lyrics: "A beauty influencer applying makeup with product names floating around",
      },
    ],
  },
  {
    id: "4",
    title: "Explainers",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739987277923-replicate-prediction-t734z1ghx1rmc0cn192tn447wm.mp4",
        lyrics: "A scientist explaining climate change using Earth models",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739987315546-replicate-prediction-yds4xm7rmsrma0cn193avs15xm.mp4",
        lyrics: "A doctor illustrating healthy eating habits with colorful visuals",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739987354241-replicate-prediction-y7k4t9623drme0cn193tw3mjww.mp4",
        lyrics: "A real teacher describing photosynthesis with playful plant animations",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739987409194-replicate-prediction-q0f7em16ynrma0cn1948814kr0.mp4",
        lyrics: "A financial advisor explaining investment basics with charts",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739987441432-replicate-prediction-zt62h4qzt5rm80cn195vt2xxtr.mp4",
        lyrics: "A fitness coach explaining the importance of hydration",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739987506611-replicate-prediction-fpnrr6sy01rmc0cn196rssq7e0.mp4",
        lyrics: "A space expert describing the solar system with 3D planets",
      },
      {
        id: "7",
        url: "https://assets.artistfirst.in/uploads/1739987538580-replicate-prediction-3mcz796j9hrmc0cn196sfss6tg.mp4",
        lyrics: "Animated video explaining how blockchain works with simple visuals",
      },
    ],
  },
  {
    id: "5",
    title: "Professional",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739987818373-replicate-prediction-h7xdnxg7wsrmc0cn19f920v644.mp4",
        lyrics: "A virtual assistant explaining productivity tips",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739987845504-replicate-prediction-4q6008c3c1rme0cn19f93dyh10.mp4",
        lyrics: "A CEO delivering a motivational speech in a modern office",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739987875383-replicate-prediction-se2860p4fxrme0cn19f8am1vew.mp4",
        lyrics: "An HR rep explaining workplace policies with icons floating around",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739987904039-replicate-prediction-39n4r47wq9rme0cn19f9pcszdc.mp4",
        lyrics: "A digital marketer presenting a campaign plan with graphs",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739987932097-replicate-prediction-05cd6pjwrdrmc0cn19fsfqkk1r.mp4",
        lyrics: "A lawyer giving quick legal advice on contracts",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739987969038-replicate-prediction-ncdbkw4r5hrma0cn19fvs9fhy4.mp4",
        lyrics: "A real estate agent showcasing a new property listing",
      },
      {
        id: "7",
        url: "https://assets.artistfirst.in/uploads/1739987998256-replicate-prediction-f3yt64f751rm80cn19fv22qdg0.mp4",
        lyrics: "A recruiter sharing interview preparation tips",
      },
    ],
  },
  {
    id: "6",
    title: "Custom Characters",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739987584893-replicate-prediction-9vf4jx4yq9rm80cn19a99dskyg.mp4",
        lyrics: "A medieval knight telling a story by the fire",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739987616845-replicate-prediction-wmd384z1nsrm80cn19a9h1h8zr.mp4",
        lyrics: "A futuristic AI assistant with a glowing, robotic appearance",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739987659553-replicate-prediction-4kpfdb992hrma0cn19asne0n34.mp4",
        lyrics: "A pirate character describing a treasure hunt",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739987720364-replicate-prediction-51yf89cqm5rme0cn19asw596z8.mp4",
        lyrics: "A wizard casting spells in a mystical forest",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739987756152-replicate-prediction-1n8h1ayyzdrm80cn19as5dns08.mp4",
        lyrics: "A superhero posing dramatically in a cityscape",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739987785515-replicate-prediction-7zsbgj9sqnrme0cn19baa4azc8.mp4",
        lyrics: "A historical character talking about life in ancient times",
      },
    ],
  },
  {
    id: "7",
    title: "Lifestyle",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739988040199-replicate-prediction-1evbxvbh5drmc0cn0kna88yksg.mp4",
        lyrics: "Horses running in a field. make it look vintage",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739988073763-replicate-prediction-w7n0kmbf3hrma0cn152s9fmvk8.mp4",
        lyrics: "Pasta sizzling in a pan with steam rising deliciously.",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739988128475-replicate-prediction-yne1mz8phdrma0cn19mvsmdhp4.mp4",
        lyrics: "A minimalist organizing a clean, modern desk",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739988166651-replicate-prediction-nsbc22bapxrm80cn19mtdkk9em.mp4",
        lyrics: "A book lover relaxing with a novel by the fireplace",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739988202894-replicate-prediction-j5jtkd01k5rm80cn19n9j7251g.mp4",
        lyrics: "A couple enjoying a picnic in the park",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739988243819-replicate-prediction-6zw1vr5cfhrme0cn19nv8jb6ng.mp4",
        lyrics: "A skincare enthusiast doing a morning routine",
      },
      {
        id: "7",
        url: "https://assets.artistfirst.in/uploads/1739988278650-replicate-prediction-etpbhk8fthrm80cn19r97vh7zr.mp4",
        lyrics: "A coffee lover enjoying a cup in a cozy café",
      },
    ],
  },
];

const charecter = [
  {
    id: "0",
    url: "https://assets.artistfirst.in/uploads/1739988631447-g1.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739988631447-g1.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739988787687-g1-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      // {
      //   id: "3",
      //   url: "https://assets.artistfirst.in/uploads/1739988824197-g1-3.mp4",
      //   lyrics: "dgfask dgaks askdf askdfka",
      // },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739988881075-g1-4.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739988914862-g1-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739988945198-g1-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "7",
        url: "https://assets.artistfirst.in/uploads/1739988981349-g1-7.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
  {
    id: "1",
    url: "https://assets.artistfirst.in/uploads/1739989030284-G2-1.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739989030284-G2-1.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739989065263-G2-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      // {
      //   id: "3",
      //   url: "https://assets.artistfirst.in/uploads/1739989125883-G2-4.mp4",
      //   lyrics: "dgfask dgaks askdf askdfka",
      // },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739989186184-G2-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989202614-G2-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739989202614-G2-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "7",
        url: "https://assets.artistfirst.in/uploads/1739989219325-G2-7.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
  {
    id: "2",
    url: "https://assets.artistfirst.in/uploads/1739989341506-G3-1.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739989341506-G3-1.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739989360542-g3-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739989371504-g3-3.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739989382537-g3-4.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989392648-g3-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },

      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739989402850-g3-6.mp4",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
  {
    id: "3",
    url: "https://assets.artistfirst.in/uploads/1739989511492-g4-1.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739989511492-g4-1.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739989533956-g4-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739989545884-g4-3.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739989557607-g4-4.mp4",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989570025-g4-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "6",
        url: "https://assets.artistfirst.in/uploads/1739989581833-g4-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
  {
    id: "4",
    url: "https://assets.artistfirst.in/uploads/1739989733110-g5-2.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739989733110-g5-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739989747746-g5-3.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739989761290-g5-4.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739989774182-g5-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989789077-g5-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
  {
    id: "5",
    url: "https://assets.artistfirst.in/uploads/1739989897831-g6-1.webp",
    items: [
      {
        id: "1",
        url: "https://assets.artistfirst.in/uploads/1739989897831-g6-1.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "2",
        url: "https://assets.artistfirst.in/uploads/1739989918271-g6-2.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "3",
        url: "https://assets.artistfirst.in/uploads/1739989926511-g6-3.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "4",
        url: "https://assets.artistfirst.in/uploads/1739989936496-g6-4.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989945558-g6-5.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
      {
        id: "5",
        url: "https://assets.artistfirst.in/uploads/1739989954593-g6-6.webp",
        lyrics: "dgfask dgaks askdf askdfka",
      },
    ],
  },
];

const HeaderBanner = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [videoCategory, setVideoCategory] = useState("0");

  const [selectedCharacters, setSelectedCharacters] = useState("0");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const isMobile = useMediaQuery("(max-width:768px)");

  const videoCategories = [
    // "All",
    "Funny",
    "Music Videos",
    "Social Content",
    "Explainers",
    "Professional",
    "Custom Characters",
    "Lifestyle",
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

  useEffect(() => {
    setVideoCategory(0);
  }, []);

  return (
    <div className=" relative">
      <nav
        style={{ zIndex: 1 }}
        className="flex w-full absolute top-1 z-1 justify-between items-center px-4 md:px-8 py-4  rounded-full"
      >
        <div className="text-xl text-white font-bold">
          <img src="/icons/logo.svg" alt="menu" className="w-[140px]" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src="/icons/menu.svg" alt="menu" className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer text-white font-nineties">Platform</li>
          <li className="cursor-pointer text-white font-nineties">Solutions</li>
          <li className="cursor-pointer text-white font-nineties">Resources</li>
          <li className="cursor-pointer text-white font-nineties">Pricing</li>
        </ul> */}
        <button className="hidden md:block bg-white text-[#1E1E1E] font-bold px-4 py-2 rounded-full">
          Launch App
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{ zIndex: 1 }}
          className="absolute z-1  left-0 right-0  bg-[#1E1E1E] p-4 rounded-lg md:hidden"
        >
          <ul className="space-y-4">
            <li className="cursor-pointer text-white font-nineties">Platform</li>
            <li className="cursor-pointer text-white font-nineties">Solutions</li>
            <li className="cursor-pointer text-white font-nineties">Resources</li>
            <li className="cursor-pointer text-white font-nineties">Pricing</li>
          </ul>
        </div>
      )}

      <div className="relative p-6 h-screen md:p-6 text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/banner-video.mp4"
          autoPlay
          poster="/images/poster/banner-poster.png"
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Left Gradient Overlay */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        )}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>

        <div className="flex absolute md:inset-y-0  bottom-[10px] left-0 right-0 m-auto flex-col lg:flex-row items-center justify-between pb-[50px] md:pb-[0px] px-4 md:px-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-[64px] leading-tight md:leading-[64px] text-[#FFF] font-nineties">
              Bring Your Stories to Life with AI Characters
            </h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-[#FFF]">
              Craft unforgettable narratives with characters that think, feel, and evolve- powered
              <br /> by advanced AI that makes your imagination real.
            </p>
            <button
              style={{
                background: "linear-gradient(180deg, #5A5A5A 0%, #1E1E1E 100%)",
                border: "1px solid #FFFFFF",
                boxShadow: "0px 1px 6px 0px #00000059",
              }}
              className=" font-bold mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-black text-white  w-full md:w-auto hidden md:block  px-4 py-2 rounded-full"
            >
              Launch App
            </button>
          </div>
        </div>
      </div>

      <div className="text-white p-4 mt-[68px] md:p-8">
        <h1 className="text-center text-[#FFF] text-3xl md:text-[56px] font-nineties font-bold">
          Bring Your Imagination to Life – Instantly!
        </h1>
        <p className="m-auto flex text-[#D2D2D2] text-center mt-6 text-base md:text-lg max-w-2xl">
          Generate stunning videos with prompts and craft unique characters using AI or our elements
          library. Effortless, instant, and limitless!
        </p>
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
            <div className="overflow-x-auto md:overflow-visible w-full hidden-scroll-bar">
              <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 mb-8 text-sm md:text-base">
                {videoCategories.map((category, i) => (
                  <Button
                    key={category}
                    variant={videoCategory === i ? "contained" : "none"}
                    onClick={() => setVideoCategory(i)}
                    className="w-[110px] md:w-[150px] text-sm md:text-base flex-shrink-0"
                    style={{
                      background: videoCategory === i ? "#FFF" : "#FFFFFF0D",
                      color: videoCategory === i ? "#1E1E1E" : "#D2D2D2",
                      borderRadius: "12px",
                      textTransform: "capitalize",
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
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
              {/* <video
                src={video.url}
                className="rounded-[24px] md:rounded-[48px] w-full h-[250px] md:h-[400px] object-cover"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              /> */}

              {videoList[videoCategory]?.items?.map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-gray-800 p-[1px] rounded-[24px] md:rounded-[48px] relative border-2 border-transparent before:absolute before:inset-0 before:rounded-[24px] md:before:rounded-[48px] before:border-2 before:border-transparent before:bg-gradient-to-b before:from-[#FFA0FF] before:to-[#FFCEA0] before:-z-10"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* ReactPlayer instead of video */}
                    <div className="rounded-[24px] md:rounded-[48px] w-full h-[293px] md:h-[400px] overflow-hidden">
                      <ReactPlayer
                        className="react-player"
                        url={video.url}
                        playing={hoveredIndex === index}
                        muted
                        loop
                        width="100%"
                        height="100%"
                        playsinline
                        config={{
                          file: {
                            attributes: {
                              preload: "metadata",
                            },
                          },
                        }}
                      />
                    </div>

                    {hoveredIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white rounded-[24px] md:rounded-[48px] pointer-events-none">
                        <img src="/icons/play-circle.png" className="w-12 md:w-auto" />
                      </div>
                    )}
                    {hoveredIndex === index && (
                      <div className="border w-[90%] left-0 right-0 mx-auto bottom-6 border-white absolute rounded-[24px] md:rounded-[48px] pointer-events-none">
                        <AutoFillInput text={video?.lyrics} />
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
            {/* <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
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
                  className="cursor-pointer rounded-full w-[100px] h-[100px] md:w-auto md:h-auto"
                  onClick={() => setSelectedCharacters(item?.id)}
                >
                  <img src={item?.url} className=" w-[100px] h-[100px] object-cover rounded-full" />
                </div>
              ))}
            </div> */}
            <div className="overflow-x-auto md:overflow-visible w-full scroll-container hidden-scroll-bar">
              <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 justify-start md:justify-center">
                {charecter.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      boxShadow:
                        item.id === selectedCharacters ? "0px 0px 11px 0px #FFA0FF" : undefined,
                      border:
                        item.id === selectedCharacters
                          ? "3px solid #FFA0FF"
                          : "3px solid transparent",
                    }}
                    className="cursor-pointer rounded-full w-[100px] h-[100px] md:w-auto md:h-auto flex-shrink-0"
                    onClick={() => setSelectedCharacters(item?.id)}
                  >
                    <img
                      src={item?.url}
                      className="w-[100px] h-[100px] object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
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
