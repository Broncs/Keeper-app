import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { ThemeContext } from "../contexts/ThemeContext";

const CreateArea = () => {
  const { theme } = useContext(ThemeContext);

  const {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
    isClicked,
    setIsClikcked,
    error,
  } = useContext(NotesContext);

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isClicked && (
          <input
            className={error === "title" ? "error" : ""}
            type="text"
            name="title"
            placeholder="Titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}

        <textarea
          className={error === "content" ? "error" : ""}
          name="content"
          rows={isClicked ? "3" : "1"}
          placeholder="anotação"
          value={content}
          onClick={() => setIsClikcked(true)}
          onChange={(e) => setContent(e.target.value)}
        />
        <Zoom in={isClicked}>
          <Fab type="submit" style={{ backgroundColor: theme }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
