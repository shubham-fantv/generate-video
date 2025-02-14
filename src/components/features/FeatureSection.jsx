import React from "react";

const features = [
  {
    title: "Text to Character Generation",
    description:
      "Create unforgettable stories with characters who write themselves. Our revolutionary AI technology brings your imagination to life, helping you craft deeper narratives with personalities that feel genuinely human.",
    position: "left",
  },
  {
    title: "Character Consistency",
    description:
      "Create unforgettable stories with characters who write themselves. Our revolutionary AI technology brings your imagination to life, helping you craft deeper narratives with personalities that feel genuinely human.",
    position: "right",
  },
  {
    title: "Create Music Videos",
    description:
      "Create unforgettable stories with characters who write themselves. Our revolutionary AI technology brings your imagination to life, helping you craft deeper narratives with personalities that feel genuinely human.",
    position: "left",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-8 md:py-[100px] px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-[56px] font-nineties text-center mb-6 md:mb-8">
          Our Features
        </h2>
      </div>

      {/* Main Container */}
      <div className="relative bg-[url('/images/featureBg.png')] bg-cover bg-center rounded-lg md:rounded-2xl py-8 md:py-[75px] px-4 md:px-[100px] mx-auto shadow-lg">
        <div className="absolute inset-0 bg-[url('/path-to-pattern.svg')] opacity-20"></div>

        {/* Zigzag Layout */}
        <div className="grid grid-cols-1 gap-8 md:gap-10 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 md:space-x-6 ${
                feature.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Video Container */}
              <div className="w-full md:w-[40%] h-[240px] md:h-[320px] bg-black rounded-[24px] md:rounded-[48px] border-[6px] md:border-[12px] border-[#FFFFFF26]">
                <video
                  className="w-full h-full rounded-[20px] md:rounded-[40px] object-cover"
                  src={"/video/Crypto.mp4"}
                  poster={"/icons/charecter/image1.png"}
                  muted
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  onEnded={(e) => e.target.play()}
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[60%] text-center md:text-left">
                <h3 className="text-2xl md:text-[48px] font-extrabold mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
