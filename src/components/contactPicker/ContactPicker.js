import React from "react";

export const ContactPicker = ({ contactsArray, onChange, value, name, id }) => {
  return (
    <select
      id={id}
      name={name}
      className="form-select"
      onChange={onChange}
      value={value}
    >
      <option value="">No contact selected</option>
      {contactsArray.map((contact, index) => {
        return (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
