import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    // Check localStorage first for a saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Then check the document attribute
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme) {
      return theme;
    }
  }
  return "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Update the data-theme attribute on root element
    document.documentElement.setAttribute("data-theme", theme);

    try {
      // Persist to localStorage
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.warn("Failed to save theme to localStorage:", e);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
