import React from "react";

const CreateArea = () => {
  return (
    <div>
      <form action="submit">
        <input type="text" name="title" placeholder="Titulo" />
        <textarea name="content" rows="3" placeholder="anotação" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
