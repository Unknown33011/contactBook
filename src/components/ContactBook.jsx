import React, { useState } from "react";
import "../components/ContactBook.css";
import Contact from "./Contact";

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="block">
      <h1>Contact Book</h1>
      <form onSubmit={handleAddContact}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Photo URL" />
        <input type="text" placeholder="Phone Number" />
        <button>Add Contact</button>
      </form>
      <div>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            name={contact.name}
            photo={contact.photo}
            phone={contact.phone}
          />
        ))}
      </div>
    </div>
  );

  function handleAddContact(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const photo = event.target[1].value;
    const phone = event.target[2].value;

    if (name && photo && phone) {
      addContact({ name, photo, phone });
      event.target.reset();
    }
    if (!name && !photo && !phone.trim()) {
      alert("Заполните все поля!");
      return;
    }
  }
};

export default ContactBook;
