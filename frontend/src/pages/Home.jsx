import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
import React from 'react';
import catImage from '../assets/Images/cat.jpg'; // Zaimportowane obrazy do przykładu
import womanImage from '../assets/Images/woman.jpg';
import manWorkingImage from '../assets/Images/Man-working.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Zaimportowanie Bootstrapa CSS


function Home() {
  return (
    <div id="wrapper" >
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
              <Route path="/logout" element={<Logout />} />
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-flex justify-content-center mb-4 mt-4">
              <h1 className="h1 text-gray-800 fw-bold">Dashboard</h1>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Gained XP (Weekly) Card Example */}
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-violet text-uppercase mb-1">Gained Xp (WEEKLY)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">30000 XP</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gained XP (Total) Card Example */}
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-pink text-uppercase mb-1">Gained Xp (Total)</div>
                        <div className="h5 mb-0 font-weight-bold text-dark">500000 XP</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasks Card Example */}
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-violet text-uppercase mb-1">Tasks</div>
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-violet-800">50%</div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div className="progress-bar bg-custom-pink" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-3">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between gradient-background">
                    <h6 className="m-0 font-weight-bold text-light">XP Weekly Overview</h6>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="chart-area">
                      {/* Canvas for Chart */}
                      <canvas id="myAreaChart" className="chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-3">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between gradient-background">
                    <h6 className="m-0 font-weight-bold text-light">Incoming Tasks</h6>
                  </div>
                  {/* Card Body */}
                  <div className="list-group text-light">
                    {/* List Group for Tasks */}
                    <a href="#" className="list-group-item list-group-item-action list-group-item-violet">Go to gym</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-pink">Visit Grandma</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-violet">Do Informatic Task</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-pink">Plant Waters</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-violet">Eat healthy today</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-pink">This is a info list group item</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-violet">This is a light list group item</a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-pink">This is a dark list group item</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}

        {/* Footer */}
        <footer className="mt-auto gradient-background footer text-white">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top text-white">
              {/* Footer Content */}
              <div className="col mb-3">
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none text-white">
                  <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                </a>
                <p className="text-white">TaskHero© 2024</p>
              </div>
              <div className="col mb-3"></div>
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
      {/* End of Content Wrapper */}
    </div>
  );
}

export default Home;
    /* 
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        
    );
    */

