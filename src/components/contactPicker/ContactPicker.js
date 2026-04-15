import React from "react";

export const ContactPicker = ({ contactsArray, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="" default>
        No Contact Selected
      </option>
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
