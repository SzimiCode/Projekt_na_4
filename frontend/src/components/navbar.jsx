import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const history = useHistory();

  const handleLogoutClick = () => {
    handleLogout();
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary gradient-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://s3u.tmimgcdn.com/u37752224/43c1a0392276fa50b4cfa03170da0d9e.gif"
            alt="Box"
            height="20"
          />
          TaskHero
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                ToDoList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
