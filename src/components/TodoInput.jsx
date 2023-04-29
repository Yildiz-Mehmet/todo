import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import { useRef } from "react";

const TodoInput = ({ data }) => {
  const [decoration, setDecoration] = useState(true);

  const ref = useRef();
  const dispatch = useDispatch();
  const { id, text, completed } = data;
  const deleteSubmit = () => {
    dispatch(deleteTodo({ id: id }));
  };
  const editSubmit = () => {};
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

      <div className="h-100">
        <input
          type="text"
          value={text}
          className="bg-light w-75 h-100 border border-0 text-success transition: cursor 4s linear 2s; "
          disabled={false}
          onClick={clickHandler}
          ref={ref}
        />

        <button onClick={editSubmit} className="border border-0 bg-light">
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
