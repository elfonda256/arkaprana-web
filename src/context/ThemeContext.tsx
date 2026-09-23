"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check existing theme from document or localStorage
    const saved = localStorage.getItem("arkaprana_theme") as Theme | null;
    const initialTheme = saved || (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    
    setThemeState(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return;

    // Add smooth transition class
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("arkaprana_theme", newTheme);
    setThemeState(newTheme);

    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 450);

    return () => clearTimeout(timer);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
