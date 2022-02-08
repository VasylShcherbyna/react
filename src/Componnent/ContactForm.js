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
        Dane do faktury klienta
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Data can only contain letters, apostrophes, dashes and spaces."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Numer faktury
        <input
          type="tel"
          name="number"
          title="The number must consist of numbers and may contain spaces, dashes, parentheses "
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Dodać fakturę</button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
