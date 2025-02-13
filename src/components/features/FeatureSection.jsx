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
    <section className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Features</h2>
      </div>

      {/* Main Container */}
      <div className="relative bg-[url('/images/featureBg.png')] bg-cover bg-center rounded-2xl py-[75px] px-[100px]  mx-auto shadow-lg">
        <div className="absolute inset-0 bg-[url('/path-to-pattern.svg')] opacity-20"></div>

        {/* Zigzag Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-6 ${
                feature.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                style={{ width: "40%" }}
                className="w-[500px] h-[320px] bg-black rounded-xl shadow-lg"
              ></div>
              <div style={{ width: "60%" }}>
                <h3 className="text-[48px] font-extrabold">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
      </div>
      {/* <div className="text-center mt-6">
        <button className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
          Show More ▼
        </button>
      </div> */}
    </section>
  );
};

export default FeatureSection;
