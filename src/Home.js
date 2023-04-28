import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

function Home() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.todoItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <>
      <h1 className="my-4  text-success">TO-DO LİST </h1>

      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputName2"
            placeholder="Enter somethings that you will do"
          />
        </div>

        <button type="submit" className="btn btn-success mt-4">
          ADD TO-DO
        </button>
      </form>
      <ul className="d-flex flex-column p-3 ">
        {todoItems?.map((data, index) => (
          <li className="p-2 bg-light border list-unstyled flex " key={index}>
            <TodoInput data={data} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
