import React, { useState } from "react";

const EditContact = () => {
  
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button>&times;</button>
        </div>
        <input
          type="text"
          className="inp-edit"
        />
        <button>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default EditContact;
