// ThemeContext.js
import React, { useState, useEffect, createContext } from "react";

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create the provider component
export default function ThemeProvider({ children }) {
  // Check if there's a saved theme in localStorage, or use "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("appTheme") || "light";
  });

  // 3. Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
