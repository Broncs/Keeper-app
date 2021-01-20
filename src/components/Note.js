import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeContext } from "../contexts/ThemeContext";

const Note = () => {
  const { notes, deleteNote } = useContext(NotesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="note-container">
      {notes.length > 0
        ? notes.map((note) => (
            <div key={note.key} className="note">
              <h1>{note.title}</h1>
              <p>{note.content}</p>
              <button
                style={{ color: theme }}
                onClick={() => deleteNote(note.key)}
              >
                <DeleteIcon />
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default Note;
