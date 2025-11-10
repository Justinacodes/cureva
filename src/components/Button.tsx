import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-9 py-2 rounded-3xl font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
