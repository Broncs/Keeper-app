import React from "react";

const Note = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <div key={note.key} className="note">
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <button>DELETE</button>
        </div>
      ))}
    </>
  );
};

export default Note;
