import { useRef, useEffect } from "react";
import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(NotesContext);

  return (
    <div className="modal">
      <p>Modal is open</p>
    </div>
  );
};

export default Modal;
