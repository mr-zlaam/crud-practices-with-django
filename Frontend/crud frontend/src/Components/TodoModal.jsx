import { useState } from "react";
import "./TodoApp.css";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";
const TodoModal = ({ setisModalOpen, Create_notes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const modal_closer = () => {
    return setisModalOpen(false);
  };
  return (
    <>
      <div className="modal_container">
        <div className="close_modal_control">
          <div onClick={modal_closer} className="close_modal">
            <FaArrowLeft size={20} />
          </div>
          <div onClick={Create_notes} className="save">
            <IoMdSave size={20} />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Title"
              className="title_input"
              name=""
              id=""
            ></input>
          </div>
          <div className="description">
            <textarea
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              value={description}
              placeholder="Description"
              className="description_input"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoModal;
