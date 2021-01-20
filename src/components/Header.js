import HighlightIcon from "@material-ui/icons/Highlight";
import Settings from "./Settings";

import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import Modal from "../components/Modal";

const Header = () => {
  const { isModalOpen } = useContext(NotesContext);

  return (
    <header>
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
