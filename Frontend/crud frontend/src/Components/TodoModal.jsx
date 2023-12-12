import {} from "react";
import "./TodoApp.css";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";
const TodoModal = ({ setisModalOpen }) => {
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
          <div className="save">
            <IoMdSave size={20} />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <textarea
              placeholder="Title"
              className="title_input"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="description">
            <textarea
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
