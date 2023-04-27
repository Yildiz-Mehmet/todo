function Home() {
  return (
    <>
      <h1 className="mt-4  text-success">TO-DO LİST</h1>
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputName2"
            placeholder="Enter somethings that you will do"
          />
        </div>

        <button type="submit" className="btn btn-success mt-2">
          ADD TO-DO
        </button>
      </form>
    </>
  );
}

export default Home;
