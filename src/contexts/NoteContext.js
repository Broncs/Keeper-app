import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { key: 1, title: "this is a title", content: "this is a content" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // handle Form submit===========
  const handleSubmit = (e) => {
    e.preventDefault();

    setNotes([...notes, { key: uuidv4(), title, content }]);
    setTitle("");
    setContent("");
  };

  // Delete Note ======
  const deleteNote = (id) => {
    setNotes(notes.filter(({ key }) => key !== id));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        title,
        setTitle,
        content,
        setContent,
        handleSubmit,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
