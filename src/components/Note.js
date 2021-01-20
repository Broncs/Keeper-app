import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = () => {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <div className="note-container">
      {notes.length > 0
        ? notes.map((note) => (
            <div key={note.key} className="note">
              <h1>{note.title}</h1>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note.key)}>
                <DeleteIcon />
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default Note;
