import React, { useState, useEffect } from "react";

const DeveloperFocused = () => {
  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("app.jsx");

  const tabs = ["app.jsx", "components.tsx", "stream.jsx", "ai-generate.jsx"];

  const codeStrings = {
    "app.jsx": `import React from "react";

export default function App() {
  return <h1>Hello, World!</h1>;
}`,
    "components.tsx": `import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home`,
    "stream.jsx": `async function startStream() {
  const response = await fetch("/api/stream");
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    console.log(new TextDecoder().decode(value));
  }
}`,
    "ai-generate.jsx": `async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)
    agent = VoicePipelineAgent(
        vad=silero.VAD.load(),
        stt=deepgram.STT(),
        llm=openai.LLM(),
        tts=openai.TTS(),
        allow_interruptions=True,
    )
    participant = await ctx.wait_for_participant()
    agent.start(ctx.room, participant)
}`,
  };

  useEffect(() => {
    setTypedCode("");
    setCurrentIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (currentIndex < codeStrings[activeTab].length) {
      const timeout = setTimeout(() => {
        setTypedCode((prev) => prev + codeStrings[activeTab][currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, activeTab]);

  const getTokenColor = (char, precedingText) => {
    if (precedingText.trim().endsWith("async") || precedingText.trim().endsWith("await")) {
      return "text-purple-400";
    }
    if (precedingText.trim().endsWith("def")) {
      return "text-blue-400";
    }
    if (precedingText.includes("=")) {
      return "text-green-400";
    }
    if (char === "(" || char === ")" || char === "," || char === ":") {
      return "text-gray-400";
    }
    return "text-yellow-200";
  };

  const [activeTab1, setActiveTab1] = useState(0);
  const tabs1 = ["Build", "Deploy", "Scale", "Repeat"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab1((current) => (current + 1) % tabs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-8">
      <h1 className="flex pt-12 md:pt-[100px] font-nineties text-3xl md:text-[56px] text-[#FFF] justify-center text-center">
        Developer Focused
      </h1>
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-4">
          {tabs1.map((tab, index) => (
            <React.Fragment key={tab}>
              <div className="relative">
                <div
                  className={`px-4 md:px-10 py-2 border rounded-full transition-all duration-500 text-sm md:text-base
                  ${
                    activeTab1 === index
                      ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                      : "bg-[transparent] text-[#D2D2D2]"
                  }`}
                >
                  <span className="relative z-10 font-nineties">{tab}</span>
                  {activeTab1 === index && (
                    <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30 animate-pulse" />
                  )}
                </div>
              </div>

              {index < tabs.length - 1 && (
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 text-gray-600 hidden md:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFF"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="relative px-4 md:px-20 pt-8 md:pt-20 aspect-[1376/732] bg-[url('/images/devbg1.png')] bg-cover bg-center rounded-2xl md:rounded-[48px] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto rounded-xl border-t border-r border-l border-white bg-gray-950 text-gray-200">
          <div className="absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-b from-pink-500 to-transparent blur-2xl opacity-50"></div>

          <div className="p-3 md:p-6 bg-black rounded-xl h-[60vh] md:h-[100vh] overflow-scroll">
            <div className="rounded-lg bg-black/50 overflow-hidden">
              <div className="flex overflow-x-auto bg-black/30 border-b border-gray-800">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 md:px-4 py-2 text-xs md:text-sm focus:outline-none transition-colors relative whitespace-nowrap
                    ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-3 md:p-6 font-mono text-xs md:text-sm">
                {typedCode.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-6 md:w-8 text-gray-600 select-none">{i + 1}</span>
                    <span className="flex-1 overflow-x-auto">
                      {line.split("").map((char, j) => (
                        <span
                          key={j}
                          className={`${char === " " ? "whitespace-pre" : ""} 
                          ${getTokenColor(char, line.slice(0, j))}`}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperFocused;
