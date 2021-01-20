import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const Note = () => {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <>
      {notes.length > 0
        ? notes.map((note) => (
            <div key={note.key} className="note">
              <h1>{note.title}</h1>
              <p>{note.content}</p>
              <button onClick={() => deleteNote(note.key)}>DELETE</button>
            </div>
          ))
        : "sem notas"}
    </>
  );
};

export default Note;
