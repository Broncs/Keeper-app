import SettingsIcon from "@material-ui/icons/Settings";
import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const Settings = () => {
  const { openModalHandler } = useContext(NotesContext);
  return (
    <div onClick={openModalHandler} className="settings">
      <SettingsIcon />
      <p>Tema</p>
    </div>
  );
};

export default Settings;
