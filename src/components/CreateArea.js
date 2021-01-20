import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";

const CreateArea = () => {
  const { title, setTitle, content, setContent, handleSubmit } = useContext(
    NotesContext
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          rows="3"
          placeholder="anotação"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
