"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize state with a function to avoid hydration issues
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    // Apply the theme to the document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
