import { createContext, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("#f5ba13");

  const [banner, setBanner] = useState("");

  const handleThemeColor = (e) => {
    const bg = e.target.getAttribute("style").slice(12, -1);

    setTheme(bg);
  };

  // modal submit

  const handleModalSubmit = (e) => {
    e.preventDefault();
  };

  // remove banner img
  const removeBanner = () => {
    setBanner("");
  };

  return (
    <ThemeContext.Provider
      value={{
        handleThemeColor,
        theme,
        banner,
        setBanner,
        handleModalSubmit,
        removeBanner,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
