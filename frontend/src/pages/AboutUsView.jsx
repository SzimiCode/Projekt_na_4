
import React, { useEffect } from "react";
import "../styles/style.css";
import catImage from '../assets/Images/cat.jpg';
import womanImage from '../assets/Images/woman.jpg';
import manWorkingImage from '../assets/Images/Man-working.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AboutUsView() {
  
  return (
    <div>
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
          </div>
        </div>
      </nav>
    <div className="container-fluid p-0" style={{ marginTop: '0px' }}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={catImage} className="d-block w-100" alt="couple" />
            <div className="carousel-caption">
              <h1>Task Managment</h1>
              <p>Easily create, organize, and prioritize your tasks. With our intuitive interface, you'll be able to keep everything in check and never feel overwhelmed.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={womanImage} className="d-block w-100" alt="dog" />
            <div className="carousel-caption">
              <h1>XP and Rewards</h1>
              <p>Turn your productivity into a game! Earn experience points (XP) as you complete tasks and reach new levels. Unlock rewards and badges to keep you motivated.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={manWorkingImage} className="d-block w-100" alt="family" />
            <div className="carousel-caption">
              <h1>Never Be Late</h1>
              <p>With Task Hero, you will receive timely reminders and notifications, so you will never miss an important task or appointment again. Stay ahead of your schedule and make procrastination a thing of the past.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <h1 className="h1 text-gray-800 fw-bold">Pricing</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-5 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 Tasks limit</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-pink">Sign up for free</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>100 Tasks Limit</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-pink">Get started</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm ">
            <div className="card-header py-3 text-bg-pink border-pink">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Unlimited Tasks</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-pink">Contact us</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto gradient-background footer text-white">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top text-white">
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
    </div>
  );
}

export default AboutUsView;
