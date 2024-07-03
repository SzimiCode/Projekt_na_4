// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <input type="checkbox" className="task-checkbox" />
          <span className="ml-2">{task.title}</span>
        </div>
        <div className="d-flex align-items-center">
          <div className="date-badge ml-2">{task.date}</div>
          <div className="xp-badge ml-2">{task.xp}xp</div>
          <div className="category-badge ml-2">{task.category}</div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;