import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoBoard = ({ todoList, setTodoList }) => {
  const handleDelete = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo-board">
      {todoList.map((item, index) => (
        <ToDoItem 
          key={index} 
          todoItem={item} 
          onDelete={() => handleDelete(index)} 
        />
      ))}
    </div>
  );
};

export default ToDoBoard;
