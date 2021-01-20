import { useRef, useEffect } from "react";
import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(NotesContext);

  return (
    <div className="bg">
      <div className="modal-wrapper">
        <form className="form-modal">
          <h2>selecionar tema</h2>
          <div className="color-container">
            <div
              className="themeColor"
              style={{ background: "rgb(56, 161, 105)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(97, 170, 229)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(128, 90, 213)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(229, 62, 62) " }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(221, 107, 32)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(90, 103, 216)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(49, 151, 149)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(113, 128, 150)" }}
            ></div>
            <div
              className="themeColor"
              style={{ background: "rgb(214, 158, 46)" }}
            ></div>
          </div>
          <div className="button-container">
            <button>cancelar</button>
            <button>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
