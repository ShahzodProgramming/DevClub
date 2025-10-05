import React, { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Languages } from "./components/Languages";
import { Footer } from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "text-white bg-gray-900" : "text-black bg-white"
      }`}
    >
      <Navbar
        theme={theme}
        setTheme={setTheme}
        handleThemeChange={handleThemeChange}
      />
      <Home theme={theme} />
      <Languages />

      <Footer />
    </div>
  );
};

export default App;
