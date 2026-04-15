import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppoinments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addNewContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };

    setContacts((prev) => [...prev, newContact]);
  };

  const addNewAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };

    setAppoinments((prev) => [...prev, newAppointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contactsArray={contacts}
              addNewContact={addNewContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointmentsArray={appointments}
              contactsArray={contacts}
              addNewAppointment={addNewAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
