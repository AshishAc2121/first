import React, { useState } from 'react';
import Viewdate from '../components/Viewdate';

const DateMonthViewer = () => {
  const [inputDate, setInputDate] = useState('');
  const [datesInMonth, setDatesInMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setInputDate(event.target.value);

    // Get all dates in the month of the selected date
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-based index
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      const dates = [];
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(new Date(year, month, i).toLocaleDateString());
      }
      setDatesInMonth(dates);
    } else {
      setDatesInMonth([]); // Reset if the date is invalid
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2>Select a Date</h2>
      <input
        type="date"
        value={inputDate}
        onChange={handleDateChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <h3>Dates in the Month:</h3>
      <ul>
        {datesInMonth.map((date, index) => (
          <li key={index}>
            <button
              style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </button>
          </li>
        ))}
      </ul>
      <Viewdate selectedDate={selectedDate}></Viewdate>
     
      
    
    </div>
  );
};

export default DateMonthViewer;

