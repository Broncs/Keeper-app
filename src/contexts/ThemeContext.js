import { createContext, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("#f5ba13", "theme");

  const [banner, setBanner] = useLocalStorage("", "banner");
  const [active, setActive] = useState(0);

  const handleThemeColor = (color, id) => {
    // const bg = e.target.getAttribute("style").slice(12, -1);
    // const bg = color;
    setActive(id);
    setTheme(color);
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
        active,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
