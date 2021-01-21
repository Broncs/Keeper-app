import { createContext, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("#f5ba13", "theme");

  const [banner, setBanner] = useLocalStorage("", "banner");

  const handleThemeColor = (e) => {
    const bg = e.target.getAttribute("style").slice(12, -1);

    setTheme(bg);
  };

  // // remove banner img
  // const removeBanner = () => {
  //   setBanner("");
  // };

  return (
    <ThemeContext.Provider
      value={{
        handleThemeColor,
        theme,
        banner,
        setBanner,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
