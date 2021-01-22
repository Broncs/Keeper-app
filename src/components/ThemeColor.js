import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeColor = ({ color, id }) => {
  const { handleThemeColor, active } = useContext(ThemeContext);

  return (
    <div
      onClick={(e) => handleThemeColor(color, id)}
      className={`themeColor ${active === id ? "active" : ""}`}
      value={id}
      style={{ background: color }}
    ></div>
  );
};

export default ThemeColor;
