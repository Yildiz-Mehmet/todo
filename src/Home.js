import { useSelector } from "react-redux";
import TodoInput from "./components/TodoInput";

function Home() {
  const todoItems = useSelector((state) => state.todo.todoItems);

  return (
    <>
      <h1 className="my-4  text-success">TO-DO LİST</h1>
      <form className="form-inline">
        <div className="form-group">
          <input
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
            <TodoInput />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
