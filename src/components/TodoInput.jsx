import React from "react";

const TodoInput = () => {
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

      <div className="h-100 ">
        <input type="text" className="bg-light w-75 h-100 border border-0 " />
        <button className="border border-0 bg-light">
          <i className="fa-solid fa-pen me-4 icon-link icon-link-hover"></i>
        </button>
        <button className="border border-0 bg-light">
          <i className=" fas fa-trash "></i>
        </button>
      </div>
    </>
  );
};

export default TodoInput;
