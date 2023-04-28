import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

const TodoInput = ({ data }) => {
  const dispatch = useDispatch();
  const { id, text, completed } = data;
  const deleteSubmit = () => {
    dispatch(deleteTodo({ id: id }));
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


`}
      </style>

      <div className="h-100">
        <input
          type="text"
          value={text}
          className="bg-light w-75 h-100 border border-0 text-success "
          disabled={true}
        />
        <button className="border border-0 bg-light">
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
