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

  useEffect(() => {
    renderCalendar();
  }, []);

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="day"></div>);
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

    // Implementacja logiki otwierania modala lub innego rodzaju widoku szczegółów eventu
    console.log('Show details for:', date, eventDetails);
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
                <a className="nav-link" href="../ToDoListView/ToDoListView.html">ToDoList</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../calendarView">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../AboutUsView">About Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="../login">Log Out</a>
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
      </div>

      {/* Modal */}
      <div id="event-modal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Events</h2>
          <div id="event-details"></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;