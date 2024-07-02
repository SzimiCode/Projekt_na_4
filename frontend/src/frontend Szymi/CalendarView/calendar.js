document.addEventListener('DOMContentLoaded', () => {
    const events = {
        '2020-02-01': [{ name: 'All Day Event', type: 'all-day' }],
        '2020-02-06': [{ name: 'Long Event', type: 'long-event' }],
        '2020-02-07': [{ name: 'Long Event', type: 'long-event' }],
        '2020-02-09': [
            { name: 'Long Event', type: 'long-event' },
            { name: '4p Repeating Event', type: 'repeating-event' }
        ],
        '2020-02-11': [{ name: 'Conference', type: 'conference' }],
        '2020-02-12': [{ name: '7a Birthday Party', type: 'birthday-party' }],
        '2020-02-16': [{ name: '4p Repeating Event', type: 'repeating-event' }],
        '2020-02-27': [{ name: 'Click for Google', type: 'other' }],
    };

    const monthYearElem = document.getElementById('monthYear');
    const weekdaysElem = document.getElementById('weekdays');
    const calendarElem = document.getElementById('calendar');
    const eventModal = document.getElementById('event-modal');
    const eventDetails = document.getElementById('event-details');
    const closeBtn = document.getElementsByClassName('close')[0];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function renderCalendar() {
        const currentDate = new Date(2020, 1);  // February 2020
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        monthYearElem.textContent = `${monthNames[month]} ${year}`;

        dayNames.forEach(day => {
            const dayElem = document.createElement('div');
            dayElem.textContent = day;
            weekdaysElem.appendChild(dayElem);
        });

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyElem = document.createElement('div');
            emptyElem.classList.add('day');
            calendarElem.appendChild(emptyElem);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayElem = document.createElement('div');
            dayElem.classList.add('day');
            dayElem.dataset.date = dateStr;
            dayElem.innerHTML = `<strong>${day}</strong>`;
            if (events[dateStr]) {
                events[dateStr].forEach(event => {
                    const eventElem = document.createElement('div');
                    eventElem.classList.add('event', event.type);
                    eventElem.textContent = event.name;
                    dayElem.appendChild(eventElem);
                });
            }
            calendarElem.appendChild(dayElem);
        }
    }

    function showModal(date) {
        eventDetails.innerHTML = '';
        if (events[date]) {
            events[date].forEach(event => {
                const eventElem = document.createElement('div');
                eventElem.textContent = event.name;
                eventDetails.appendChild(eventElem);
            });
        }
        eventModal.style.display = 'block';
    }

    calendarElem.addEventListener('click', (e) => {
        if (e.target.classList.contains('day') || e.target.parentElement.classList.contains('day')) {
            const dayElem = e.target.classList.contains('day') ? e.target : e.target.parentElement;
            const date = dayElem.dataset.date;
            showModal(date);
        }
    });

    closeBtn.addEventListener('click', () => {
        eventModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == eventModal) {
            eventModal.style.display = 'none';
        }
    });

    renderCalendar();
});
