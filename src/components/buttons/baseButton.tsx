import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const BaseButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="rounded bg-violet-500 px-4 py-2 font-bold text-white shadow-xl hover:bg-violet-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BaseButton;
