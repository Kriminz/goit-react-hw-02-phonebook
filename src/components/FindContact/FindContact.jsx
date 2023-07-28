import React from "react";

const LookingFor = ({value, onChange}) => (
  <label>
    Find contacts by name
    <input
      onChange={onChange}
      type="text"
      name="name"
      value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  </label>
)

export {LookingFor};