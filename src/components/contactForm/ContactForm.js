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
    <form onSubmit={handleSubmit} className="form-layout">
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={name}
          placeholder="John Doe"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input
          className="form-input"
          type="tel"
          id="phone"
          value={phone}
          pattern="[0-9]{4}-[0-9]{4}"
          placeholder="2222-2222"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={email}
          placeholder="jdoe@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="primary-button">
        Add
      </button>
    </form>
  );
};
