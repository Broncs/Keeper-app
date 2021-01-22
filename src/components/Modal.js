import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import { ThemeContext } from "../contexts/ThemeContext";
import CloseIcon from "@material-ui/icons/Close";
import { colorData } from "../colorData";
import ThemeColor from "./ThemeColor";

const Modal = () => {
  const { closeModalHandler } = useContext(NotesContext);
  const { theme, banner, setBanner } = useContext(ThemeContext);

  // modal submit

  const handleModalSubmit = (e) => {
    e.preventDefault();
    closeModalHandler();
  };

  return (
    <>
      <div onClick={closeModalHandler} className="bg"></div>
      <div className="modal-wrapper">
        <form onSubmit={handleModalSubmit} className="form-modal">
          <h2>selecionar tema</h2>
          <CloseIcon onClick={closeModalHandler} className="close-modal" />
          <div className="color-container">
            {colorData.map((color, index) => {
              return <ThemeColor key={index} id={index} color={color} />;
            })}
          </div>

          <div className="banner-settings">
            <p>
              Link imagem <span>(opcional)</span>
            </p>
            <div className="imgContainer">
              <input
                type="text"
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
                placeholder="ex: https://picsum.photos/1200/400?random=2"
              />
              <button
                type="button"
                onClick={() => setBanner("")}
                style={{ backgroundColor: theme }}
              >
                Remover imagem
              </button>
            </div>
          </div>
          <div className="button-container">
            <button onClick={closeModalHandler}>cancelar</button>
            <button type="submit" style={{ backgroundColor: theme }}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
