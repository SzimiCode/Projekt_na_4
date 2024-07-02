// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './components/ToDoList';

function ToDoListView () {
  return (
    <div className="ToDoListView">
      <ToDoList />
    </div>
  );
}

export default App;