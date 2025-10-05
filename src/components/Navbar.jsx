import React from "react";

export const Navbar = ({ theme, setTheme, handleThemeChange }) => {
  return (
    <div
      className={`flex items-center justify-between max-w-6xl mx-auto w-[90%] border-b-3`}
    >
      <p className={`text-3xl transition-all font-medium`}>Dev Club</p>
      <button onClick={handleThemeChange} className="text-2xl">
        {theme === "dark" ? (
          <i className="ri-sun-line transform transition-transform duration-700 ease-out hover:rotate-[360deg] hover:scale-125 inline-block"></i>
        ) : (
          <i className="ri-moon-line transform transition-transform duration-700 ease-out hover:rotate-[360deg] hover:scale-125 inline-block"></i>
        )}
      </button>
    </div>
  );
};
