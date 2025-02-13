import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react"; // For the icon

const AutoFillInput = () => {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 50); // Adjust speed of typing
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="border border-white flex items-center justify-between w-full max-w-lg p-3 rounded-full backdrop-blur-[105px] shadow-[0px_0px_14px_0px_#FFFFFF33] bg-[linear-gradient(180deg,#000000_-36.59%,rgba(0,0,0,0)_144.51%)]  before:-z-10">
      <p className="text-white text-sm truncate mr-1 w-[85%]">{displayText}</p>
      <button className="w-[12%] h-10 flex items-center justify-center rounded-full bg-white shadow-md">
        <img src="/icons/star.png" />
      </button>
    </div>
  );
};

export default AutoFillInput;
