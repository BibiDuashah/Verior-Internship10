import React from "react";

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
