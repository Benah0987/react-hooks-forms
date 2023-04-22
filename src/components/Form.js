import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  
  //function firstName
  //passed an event asa parameter
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    
  }
  //handles the last name
  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  return (
    <form>
      <input type="text" onChange ={handleFirstNameChange} value={firstName} />
      <input type="text" onChange ={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
