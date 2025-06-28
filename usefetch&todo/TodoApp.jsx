import React, { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1.5rem",
      borderRadius: "12px",
      background: "#f3e5f5",
      boxShadow: "0 6px 20px rgba(74,20,140,0.2)"
    }}>
      <h1 style={{ color: "#6a1b9a", textAlign: "center" }}>Todo List</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            flex: 1,
            padding: "0.6rem",
            border: "1px solid #ba68c8",
            borderRadius: "8px",
            marginRight: "0.5rem"
          }}
        />
        <button
          type="submit"
          style={{
            background: "#8e24aa",
            color: "#fff",
            border: "none",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
