import { useState, useEffect } from 'react';
import shortid from 'shortid';
import CssModule from './IndexModule.css';

import ContactForm from './Componnent/ContactForm';
import ContactList from './Componnent/ListContact';
import Filter from './Componnent/Filtr';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = task => {
    const taskNameNormalized = task.name.toLowerCase();
    const searchSameName = contacts.find(
      contact => contact.name.toLowerCase() === taskNameNormalized,
    );

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: shortid(),
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };
  const changeFilter = filter => {
    setFilter(filter);
  };

  const normalizeFilter = filter.toLowerCase();
  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <div>
      <h1> WYSTAWIENIE FAKTURY</h1>
      <ContactForm onAddContact={addContact} />

      <h2>LISTA FAKTUR</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      {getVisibleContacts && (
        <ContactList
          contacts={getVisibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
}

export default App;
