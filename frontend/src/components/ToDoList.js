// src/components/ToDoList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskModal from './TaskModal';
import { Card } from 'react-bootstrap';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container mt-5">
      <div className="button-container text-center mb-3">
        <button className="btn gradient-button mx-2" onClick={() => setShowModal(true)}>Add</button>
      </div>

      {tasks.map((task, index) => (
        <Card key={index} className="mb-3">
          <Card.Header className={`bg-custom-${task.category.toLowerCase()} text-black`}>
            <h5 className="mb-0">{task.category}</h5>
          </Card.Header>
          <ul className="list-group list-group-flush">
            <TaskItem task={task} />
          </ul>
        </Card>
      ))}

      <TaskModal addTask={addTask} />
    </div>
  );
};

export default ToDoList;