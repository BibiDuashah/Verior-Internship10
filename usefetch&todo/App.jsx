import React from "react";
import TodoApp from "./components/TodoApp";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

  return (
    <>
      <TodoApp />
      <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
        <h2>Sample API Fetch (5 items):</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {data && data.map((item) => (
          <p key={item.id}>🔹 {item.title}</p>
        ))}
      </div>
    </>
  );
};

export default App;
