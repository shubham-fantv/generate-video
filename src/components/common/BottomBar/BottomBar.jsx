import React from "react";

const Button = ({ children, icon, onClick, bgColor, textColor }) => {
  return (
    <button
      className={`flex-1 flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors ${bgColor} ${textColor}`}
      onClick={onClick}
    >
      {icon && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          {icon}
        </svg>
      )}
      {children}
    </button>
  );
};

const BottomBar = ({ buttons }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center w-full pb-4 px-4 h-[70px]">
      <div className="flex rounded-[100px] overflow-hidden shadow-lg max-w-md w-full">
        {buttons.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            bgColor={button.bgColor}
            textColor={button.textColor}
            onClick={button.onClick}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
