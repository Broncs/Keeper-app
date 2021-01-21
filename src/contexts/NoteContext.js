import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../components/useLocalStorage";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage([], "notes");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isClicked, setIsClikcked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  // Open Modal ==============
  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  // Close Modal =============
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  // handle Form submit===========
  const handleSubmit = (e) => {
    e.preventDefault();

    // || content === ""
    if (!title) {
      setError("title");
      return;
    }
    if (!content) {
      setError("content");
      return;
    }
    setNotes((prevValue) => [...prevValue, { key: uuidv4(), title, content }]);
    setTitle("");
    setContent("");
    setError(false);
  };

  // Delete Note ======
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(({ key }) => key !== id);
    });
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
        isClicked,
        setIsClikcked,
        isModalOpen,
        setIsModalOpen,
        openModalHandler,
        closeModalHandler,
        error,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
