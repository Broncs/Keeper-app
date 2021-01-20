import { useRef, useEffect } from "react";
import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import CloseIcon from "@material-ui/icons/Close";

const Modal = () => {
  const { closeModalHandler } = useContext(NotesContext);

  return (
    <>
      <div className="bg"></div>
      <div className="modal-wrapper">
        <form className="form-modal">
          <h2>selecionar tema</h2>
          <CloseIcon onClick={closeModalHandler} className="close-modal" />
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
          <div className="banner-settings">
            <p>
              Banner Link <span>(opcional)</span>
            </p>
            <div className="imgContainer">
              <input
                type="text"
                placeholder="ex: https://picsum.photos/1200/400?random=2"
              />
              <button type="text">Remover imagem</button>
            </div>
          </div>
          <div className="button-container">
            <button>cancelar</button>
            <button>Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
