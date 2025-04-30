// ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // ✅ Make sure this matches the filename

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
  Switch to {theme === "light" ? "Dark" : "Light"} Mode
</button>

  );
}
