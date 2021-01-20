import HighlightIcon from "@material-ui/icons/Highlight";
import Settings from "./Settings";

import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import Modal from "../components/Modal";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { isModalOpen } = useContext(NotesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme }}>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <Settings />
      {isModalOpen ? <Modal /> : null}
    </header>
  );
};

export default Header;
