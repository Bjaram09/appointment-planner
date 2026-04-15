import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="John Doe"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        id="phone"
        value={phone}
        pattern="[0-9]{4}-[0-9]{4}"
        placeholder="2222-2222"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="jdoe@gmail.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="Submit">Add</button>
    </form>
  );
};
