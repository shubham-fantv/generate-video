import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const RotatingShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const images = [1, 2, 3, 1, 1, 1, 2, 3];

  // Create duplicate items for seamless loop
  const allImages = [...images, ...images];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden aspect-[657/537] bg-[#0e0e0e]"
    >
      <div className="flex absolute inset-0 items-center">
        <h2 className="text-white text-2xl font-semibold p-6 z-10">
          AI-Powered Product <br /> Advertisements
        </h2>

        {/* First column with continuous upward scroll */}
        <div className="absolute right-10 h-full overflow-hidden">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ y: 0 }}
            animate={{
              y: [0, `-${100}%`],
            }}
            transition={{
              y: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            style={{
              willChange: "transform",
            }}
          >
            {allImages.map((item, i) => (
              <div
                key={i}
                className="w-24 h-32 rounded-xl overflow-hidden"
                style={{
                  opacity: isHovered ? 1 : 0.8,
                  transition: "opacity 0.3s ease",
                }}
              >
                <img
                  src={`/images/use-case/ai-powred/ai${item}.png`}
                  alt={`Rotating image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second column with continuous downward scroll */}
        <div className="absolute right-40 h-full overflow-hidden">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ y: `-${100}%` }}
            animate={{
              y: ["-100%", "0%"],
            }}
            transition={{
              y: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            style={{
              willChange: "transform",
            }}
          >
            {allImages.map((item, i) => (
              <div
                key={i}
                className="w-24 h-32 rounded-xl overflow-hidden"
                style={{
                  opacity: isHovered ? 1 : 0.8,
                  transition: "opacity 0.3s ease",
                }}
              >
                <img
                  src={`/images/use-case/ai-powred/ai${item}.png`}
                  alt={`Rotating image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RotatingShowcase;
