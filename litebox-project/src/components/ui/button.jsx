import React from "react";
export function Button({ children, onClick, className = "", variant = "default" }) {
    const baseStyle = "px-4 py-2 rounded-xl font-medium transition";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      ghost: "text-blue-600 hover:underline",
    };
    return (
      <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  }
  