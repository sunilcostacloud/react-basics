import { useState } from "react";

function DateTimePicker() {
  // Function to format date as "YYYY-MM-DD"
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <h2>Select Date and Time:</h2>
      <div>
        <label>Date: </label>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <br />
      <div>
        <label>Time: </label>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
      </div>
      <br />
      <p>Selected Date: {selectedDate}</p>
      <p>Selected Time: {selectedTime}</p>
    </div>
  );
}

export default DateTimePicker;
