import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice";
import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TodoInput = ({ data }) => {
  const [decoration, setDecoration] = useState(true);
  const [show, setShow] = useState(false);
  const editItemss = useSelector((state) => state.editItem);
  console.log(editItemss);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(editTodo({ id: id }));
    setShow(true);
  };

  const ref = useRef();
  const dispatch = useDispatch();
  const { id, text, completed } = data;
  const deleteSubmit = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const clickHandler = (e) => {
    setDecoration(!decoration);
    {
      decoration
        ? ref.current.classList.add("text-decoration-line-through")
        : ref.current.classList.remove("text-decoration-line-through");
    }
  };
  return (
    <>
      <style type="text/css">
        {`
.fa-solid:hover{
  color: red;
}
.fas:hover{
  color: red;
}
input:focus{
  outline: none;
}
input{
  cursor: pointer;
  
}


`}
      </style>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="h-100">
        <input
          type="text"
          value={text}
          className="bg-light w-75 h-100 border border-0 text-success transition: cursor 4s linear 2s; "
          disabled={false}
          onClick={clickHandler}
          ref={ref}
        />

        <button onClick={handleShow} className="border border-0 bg-light">
          <i className="fa-solid fa-pen me-4 "></i>
        </button>
        <button onClick={deleteSubmit} className="border border-0 bg-light">
          <i className=" fas fa-trash "></i>
        </button>
      </div>
    </>
  );
};

export default TodoInput;
