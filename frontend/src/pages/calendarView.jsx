import React, { useState, useEffect } from 'react';
import "../styles/style.css";

const CalendarView = () => {
  const [events] = useState({
    '2020-02-01': [{ name: 'All Day Event', type: 'all-day' }],
    '2020-02-06': [{ name: 'Long Event', type: 'long-event' }],
    '2020-02-07': [{ name: 'Long Event', type: 'long-event' }],
    '2020-02-09': [
      { name: 'Long Event', type: 'long-event' },
      { name: '4p Repeating Event', type: 'repeating-event' },
    ],
    '2020-02-11': [{ name: 'Conference', type: 'conference' }],
    '2020-02-12': [{ name: '7a Birthday Party', type: 'birthday-party' }],
    '2020-02-16': [{ name: '4p Repeating Event', type: 'repeating-event' }],
    '2020-02-27': [{ name: 'Click for Google', type: 'other' }],
  });

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalData, setModalData] = useState({ isOpen: false, events: [], date: '' });

  useEffect(() => {
    renderCalendar();
  }, [currentDate]);

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const eventsForDay = events[dateStr] || [];

      calendarDays.push(
        <div key={dateStr} className="day" onClick={() => showModal(dateStr)}>
          <strong>{day}</strong>
          {eventsForDay.map((event, index) => (
            <div key={`${dateStr}-${index}`} className={`event ${event.type}`}>
              {event.name}
            </div>
          ))}
        </div>
      );
    }

    return calendarDays;
  };

  const showModal = (date) => {
    const eventDetails = events[date] || [];
    setModalData({ isOpen: true, events: eventDetails, date });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, events: [], date: '' });
  };

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };

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
      {/* Kalendarz */}
      <div className="calendar-container mt-5">
        <div id="monthYear" className="month-year">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <div id="weekdays" className="weekdays">
          {dayNames.map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div id="calendar" className="days">
          {renderCalendar()}
        </div>
        <div className="calendar-navigation">
          <button className="nav-button" onClick={handlePrevMonth}>Previous Month</button>
          <button className="nav-button" onClick={handleNextMonth}>Next Month</button>
        </div>
      </div>

      {/* Modal */}
      {modalData.isOpen && (
        <div id="event-modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Events for {modalData.date}</h2>
            <div id="event-details">
              {modalData.events.map((event, index) => (
                <div key={index} className={`event ${event.type}`}>
                  {event.name}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      )}
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

  );
};

export default CalendarView;
