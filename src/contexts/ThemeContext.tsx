import React, { useEffect, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

// Get initial theme state from localStorage
const getInitialState = () => {
  const theme = localStorage.getItem("savedTheme");
  return theme ? JSON.parse(theme) : "light";
};

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialState);

  // Save new theme setting to localStorage
  useEffect(() => {
    localStorage.setItem("savedTheme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
