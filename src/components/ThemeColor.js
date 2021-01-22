import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeColor = ({ color }) => {
  const { handleThemeColor } = useContext(ThemeContext);

  return (
    <div
      onClick={() => handleThemeColor(color)}
      className="themeColor"
      style={{ background: color }}
    ></div>
  );
};

export default ThemeColor;
