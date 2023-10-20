import React from "react";

const Contact = ({ name, photo, phone }) => {
  return (
    <div className="contact_block">
      <div className="contact">
        <img src={photo} alt={name} />
        <div className="name">
          <h2>{name}</h2>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
