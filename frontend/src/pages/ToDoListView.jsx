import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Card } from 'react-bootstrap';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
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
    if (taskData.title && taskData.category && taskData.xp && taskData.date) {
      setTasks([...tasks, taskData]);
      setTaskData({
        title: '',
        description: '',
        category: '',
        xp: '',
        date: ''
      });
      handleClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div id="wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
     {/* Navbar */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary gradient-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="../">
            <img src="https://s3u.tmimgcdn.com/u37752224/43c1a0392276fa50b4cfa03170da0d9e.gif" alt="Box" height="20" />
            TaskHero
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="../">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../ToDoList">ToDoList</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../calendar">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../AboutUsView">About Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-outline-danger nav-link" to="/logout">Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Content */}
      <div className="container mt-5 flex-grow-1">
        <div className="button-container text-center mb-3">
          <Button variant="primary" onClick={handleShow}>
            <BsFillPlusCircleFill className="me-2" />
            Add Task
          </Button>
        </div>

        {tasks.map((task, index) => (
          <Card key={index} className="mb-3">
            <Card.Header className={`bg-custom-${task.category.toLowerCase()} text-black`}>
              <h5 className="mb-0">{task.category}</h5>
            </Card.Header>
            <ul className="list-group list-group-flush">
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
            </ul>
          </Card>
        ))}

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter task title" onChange={handleChange} value={taskData.title} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter task description" onChange={handleChange} value={taskData.description} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue="Select a category" onChange={handleChange} value={taskData.category} required>
                  <option disabled>Select a category</option>
                  <option value="Family">Family</option>
                  <option value="Work">Work</option>
                  <option value="Life">Life</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="xp">
                <Form.Label>XP</Form.Label>
                <Form.Control type="number" placeholder="Enter task XP" onChange={handleChange} value={taskData.xp} required min="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter task date" onChange={handleChange} value={taskData.date} required />
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
      
      {/* Footer */}
      <footer className="gradient-background footer text-white">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            <div className="col mb-3">
              <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none text-white">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
              </a>
              <p className="text-white">TaskHero© 2024</p>
            </div>
            <div className="col mb-3">
              <h5 className="text-white">Szymon Molitorys</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.facebook.com/profile.php?id=100011046400675" className="nav-link p-0 text-white">Facebook</a></li>
                <li className="nav-item mb-2"><a href="https://github.com/SzimiCode" className="nav-link p-0 text-white">Github</a></li>
                <li className="nav-item mb-2"><a href="https://www.instagram.com" className="nav-link p-0 text-white">Instagram</a></li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 className="text-white">Bartłomiej Piłot</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Facebook</a></li>
                <li className="nav-item mb-2"><a href="https://github.com/MFSTL1" className="nav-link p-0 text-white">Github</a></li>
                <li className="nav-item mb-2"><a href="https://www.instagram.com" className="nav-link p-0 text-white">Instagram</a></li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 className="text-white">Kacper Smyrak</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Facebook</a></li>
                <li className="nav-item mb-2"><a href="https://github.com/KasmyrA" className="nav-link p-0 text-white">Github</a></li>
                <li className="nav-item mb-2"><a href="https://www.instagram.com" className="nav-link p-0 text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;