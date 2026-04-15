import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointmentsArray,
  contactsArray,
  addNewAppointment,
}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addNewAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div className="page-content">
      <section className="section-card">
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contactsArray={contactsArray}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      {appointmentsArray.length > 0 && (
        <>
          <hr />
          <section className="section-card">
            <h2>Appointments</h2>
            <TileList data={appointmentsArray} />
          </section>
        </>
      )}
    </div>
  );
};
