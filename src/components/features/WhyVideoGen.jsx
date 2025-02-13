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
    <div className="min-h-screen  pt-[100px] relative overflow-hidden px-[32px]">
      <div className="max-full mx-auto rounded-[2.5rem] border-[2px]  border-[#FFFFFF33] bg-gradient-to-b from-gray-900 to-gray-950 p-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white font-nineties mb-4">Why VideoGen</h2>
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
              <div className="relative rounded-3xl bg-gray-900 p-8 h-full">
                <h3 className="text-4xl font-bold text-white mb-4 font-nineties">
                  {feature.percentage}
                </h3>
                <h4 className="text-xl text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Background gradient effects */}
        <div className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-green-500/10 blur-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default VideoGenFeatures;
