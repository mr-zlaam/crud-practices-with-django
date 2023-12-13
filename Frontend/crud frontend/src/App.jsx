import { useEffect, useState } from "react";
import TodoApp from "./Components/TodoApp";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note_id, setNote_id] = useState(0);

  const NoteSaver = async () => {
    try {
      const editReplaceData = await axios.patch(
        `http://127.0.0.1:8000/v1/api/todo/${note_id}/`,
        { title, description }
      );

      setTitle((editReplaceData.data.title = title));
      setDescription((editReplaceData.data.description = description));

      console.log(editReplaceData.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const Delete_Note = async () => {
  //   try {
  //     await axios.delete(`http://127.0.0.1:8000/v1/api/todo/${note_id}/`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div>
        <TodoApp
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          NoteSaver={NoteSaver}
          setNote_id={setNote_id}
          // Delete_Note={Delete_Note}
        />
      </div>
    </>
  );
};

export default App;
