import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import { ThemeContext } from "../contexts/ThemeContext";
import CloseIcon from "@material-ui/icons/Close";

const Modal = () => {
  const { closeModalHandler } = useContext(NotesContext);
  const {
    theme,
    handleThemeColor,
    banner,
    setBanner,
    handleModalSubmit,
    removeBanner,
  } = useContext(ThemeContext);
  console.log(banner);

  return (
    <>
      <div onClick={closeModalHandler} className="bg"></div>
      <div className="modal-wrapper">
        <form onSubmit={handleModalSubmit} className="form-modal">
          <h2>selecionar tema</h2>
          <CloseIcon onClick={closeModalHandler} className="close-modal" />
          <div className="color-container">
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(56, 161, 105)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(97, 170, 229)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(128, 90, 213)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(229, 62, 62) " }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(221, 107, 32)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(90, 103, 216)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(49, 151, 149)" }}
            ></div>
            <div
              onClick={handleThemeColor}
              className="themeColor"
              style={{ background: "rgb(113, 128, 150)" }}
            ></div>
            <div
              onClick={handleThemeColor}
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
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
                placeholder="ex: https://picsum.photos/1200/400?random=2"
              />
              <button
                onClick={removeBanner}
                style={{ backgroundColor: theme }}
                type="text"
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
