import React from "react";

const VideoGenFeatures = () => {
  const features = [
    {
      percentage: "100%",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      gradient: "from-yellow-200/20 to-transparent",
    },
    {
      percentage: "100%",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      gradient: "from-blue-200/20 to-transparent",
    },
    {
      percentage: "100%",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      gradient: "from-green-200/20 via-purple-200/20 to-pink-200/20",
    },
  ];

  return (
    <div className="min-h-screen  py-[100px] relative overflow-hidden px-[32px]">
      <div className="max-full mx-auto rounded-[48px] bg-[url('/images/why-bg.png')] bg-cover bg-center p-12 relative before:absolute before:inset-0 before:rounded-[48px] before:bg-gradient-to-b before:from-black/80 before:to-transparent">
        <div className=" relative text-center mb-16 z-[999]">
          <h2 className="text-4xl text-white font-nineties mb-4">Why VideoGen</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Gradient border effect */}
              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-50 blur-sm`}
              />
              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-50`}
              />

              {/* Card content */}
              <div className="relative border border-white rounded-3xl bg-[#1E1E1E] p-8 h-full">
                <h3 className="text-4xl font-bold text-white mb-4 font-nineties">
                  {feature.percentage}
                </h3>
                <h4 className="text-xl text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGenFeatures;
