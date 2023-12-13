import { useEffect, useState } from "react";
import "./TodoApp.css";
import TodoModal from "./TodoModal";
import axios from "axios";
import UpdateTodoModal from "./UpdateTodoModal";
const TodoApp = ({ title, setTitle, description, setDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isData, setIsData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const EdithandleModal = (id) => {
    setEditModal(true);
    // console.log(id);
    const newSelectedData = isData.find((data) => {
      return data.id === id;
    });
    setSelectedData(newSelectedData);
    setTitle(newSelectedData.title);
    setDescription(newSelectedData.description);
  };

  const fetchData = async () => {
    try {
      const todos_Data = await axios.get("http://127.0.0.1:8000/v1/api/todo/");
      setIsData(todos_Data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const emptyhandleModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container">
        <div className="mini_container">
          <div className="data_controller">
            {isData &&
              isData.map((data) => (
                <div key={data.id}>
                  <div
                    onClick={() => {
                      EdithandleModal(data.id);
                    }}
                    className="data_container pointer"
                  >
                    <p>{new Date(data.createdAt).toLocaleDateString()}</p>
                    <h1>{data.title}</h1>
                    <h2>{data.description}</h2>
                  </div>
                </div>
              ))}
          </div>
          <div onClick={emptyhandleModal} className="create_note_btn">
            <span>+</span>
          </div>
          {isModalOpen && (
            <TodoModal
              isData={isData}
              setIsData={setIsData}
              setisModalOpen={setIsModalOpen}
              selectedData={selectedData}
            />
          )}
          {editModal && (
            <UpdateTodoModal
              setEditModal={setEditModal}
              selectedData={selectedData}
              setTitle={setTitle}
              setDescription={setDescription}
              title={title}
              description={description}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
