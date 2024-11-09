import React from "react";

function ToDoItem({ todoItem, onDelete }) {
  return (
    <div className="todo-item">
      {todoItem}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
