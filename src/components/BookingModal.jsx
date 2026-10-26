import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Time slots grouped by part of the day
const SLOTS = {
  Morning: ["11:00 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
  Evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
};

// Turn a Date into "YYYY-MM-DD" using the local time zone
function toDateString(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + d;
}

// Build the list of bookable days: today + the next 7 days (8 days in total)
function getBookableDays() {
  const days = [];
  for (let i = 0; i <= 7; i++) {
    const day = new Date();
    day.setDate(day.getDate() + i);
    days.push(day);
  }
  return days;
}

export default function BookingModal({ restaurant, onClose }) {
  const navigate = useNavigate();
  const days = getBookableDays();

  const [selectedDate, setSelectedDate] = useState(toDateString(days[0]));
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

  function handleConfirm() {
    // Validate the date: it must be one of the allowed days
    const allowed = days.map(toDateString);
    if (!allowed.includes(selectedDate)) {
      setError("Please choose a date from today up to 7 days ahead.");
      return;
    }
    if (!selectedTime) {
      setError("Please choose a time slot.");
      return;
    }

    // Read the old bookings, add the new one, and save the array back
    const oldBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: Date.now(),
      name: restaurant["Restaurant Name"],
      address: restaurant["Address"],
      city: restaurant["City"],
      state: restaurant["State"],
      rating: restaurant["Overall Rating"],
      date: selectedDate,
      time: selectedTime,
    };
    localStorage.setItem("bookings", JSON.stringify([...oldBookings, newBooking]));

    onClose();
    navigate("/my-bookings");
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">×</button>

        <h2>{restaurant["Restaurant Name"]}</h2>
        <p className="muted">
          {restaurant["Address"]}, {restaurant["City"]}, {restaurant["State"]}
        </p>

        {/* Day picker: one chip per bookable day */}
        <Swiper spaceBetween={8} slidesPerView="auto" className="day-swiper">
          {days.map((day, index) => {
            const dateString = toDateString(day);
            const label = index === 0 ? "Today" : day.toLocaleDateString("en-US", { weekday: "short" });
            const active = dateString === selectedDate;
            return (
              <SwiperSlide key={dateString} className="day-slide">
                <div
                  className={"day-chip" + (active ? " active" : "")}
                  onClick={() => { setSelectedDate(dateString); setError(""); }}
                >
                  <p>{label}</p>
                  <span>{day.getDate()} {day.toLocaleDateString("en-US", { month: "short" })}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Time slots grouped by Morning / Afternoon / Evening */}
        {Object.keys(SLOTS).map((period) => (
          <div className="slot-group" key={period}>
            <p className="slot-title">{period}</p>
            <div className="slot-list">
              {SLOTS[period].map((time) => (
                <button
                  key={time}
                  type="button"
                  className={"slot" + (selectedTime === time ? " active" : "")}
                  onClick={() => { setSelectedTime(time); setError(""); }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}

        {error && <p className="form-error">{error}</p>}

        <button className="primary-btn wide" onClick={handleConfirm}>
          Confirm booking
        </button>
      </div>
    </div>
  );
}
