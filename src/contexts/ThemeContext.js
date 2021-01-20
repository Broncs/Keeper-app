import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("#f5ba13");

  const handleThemeColor = (e) => {
    const bg = e.target.getAttribute("style").slice(12, -1);

    setTheme(bg);
  };

  return (
    <ThemeContext.Provider value={{ handleThemeColor, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
