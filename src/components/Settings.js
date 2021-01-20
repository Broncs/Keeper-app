import SettingsIcon from "@material-ui/icons/Settings";
import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const Settings = () => {
  const { isModalOpen, setIsModalOpen } = useContext(NotesContext);
  return (
    <div onClick={() => setIsModalOpen(!isModalOpen)} className="settings">
      <SettingsIcon />
      <p>Tema</p>
    </div>
  );
};

export default Settings;
