import React, { useState } from 'react';
import ToDoBoard from './components/ToDoBoard';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <input 
        value={inputValue} 
        type="text" 
        onChange={(event) => setInputValue(event.target.value)} 
      />
      <button onClick={addItem}>Add</button>
      <ToDoBoard todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
