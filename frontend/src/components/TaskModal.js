// src/components/TaskModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskModal = ({ addTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    category: '',
    xp: '',
    date: ''
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTaskData({ ...taskData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    handleClose();
  };

  return (
    <>
      <div className="modal-container">
        <Button variant="primary" onClick={handleShow}>
          Add Task
        </Button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="taskTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter task title" onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="taskDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter task description" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="taskCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue="Select a category" onChange={handleChange} required>
                  <option disabled>Select a category</option>
                  <option value="Family">Family</option>
                  <option value="Work">Work</option>
                  <option value="Life">Life</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="taskXp">
                <Form.Label>XP</Form.Label>
                <Form.Control type="number" placeholder="Enter task XP" onChange={handleChange} required min="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="taskDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter task date" onChange={handleChange} required />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default TaskModal;