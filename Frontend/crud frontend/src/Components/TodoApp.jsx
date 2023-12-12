import { useState } from "react";
import "./TodoApp.css";
import TodoModal from "./TodoModal";
const TodoApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container">
        <div className="mini_container">
          <div className="data_controller">
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
            <div onClick={handleModal} className="data_container"></div>
          </div>
          <div onClick={handleModal} className="create_note_btn">
            <span>+</span>
          </div>
          {isModalOpen && <TodoModal setisModalOpen={setIsModalOpen} />}
        </div>
      </div>
    </>
  );
};

export default TodoApp;
