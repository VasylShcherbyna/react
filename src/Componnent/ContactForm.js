import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    onAddContact({ name, number });

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash, and spaces. for instance Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Salary amount
        <input
          type="tel"
          name="number"
          // pattern="d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Currency must consist of numbers and may contain spaces, dashes, parentheses "
          required
          value={number}
          onChange={handleNumberChange}
        />
        
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
