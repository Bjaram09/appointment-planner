import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contactsArray,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form-layout">
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input
          className="form-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="contact">Contact</label>
        <ContactPicker
          id="contact"
          name="contact"
          value={contact}
          contactsArray={contactsArray}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="date">Date</label>
        <input
          className="form-input"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="time">Time</label>
        <input
          className="form-input"
          type="time"
          id="time"
          value={time}
          min={getTodayString()}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};
