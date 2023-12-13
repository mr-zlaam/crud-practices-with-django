import { useState } from "react";
import TodoApp from "./Components/TodoApp";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div>
        <TodoApp
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </>
  );
};

export default App;
