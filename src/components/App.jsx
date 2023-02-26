import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContacts } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';

import { getAllContacts } from '../redux/contacts/contacts-selectots';
import { getFilter } from '../redux/filter/filter-selectors';

export const App = () => {
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const contacts = useSelector(store => store.contacts);

  const handleAddContact = ({ name, number }) => {
    const checkContact = allContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const getVisibleContacts = () => {
    const normolizeFilter = filter.toLowerCase();

    const result = contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normolizeFilter);
    });

    return result;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contact</h2>

      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={handleDeleteContact}
          />
        </>
      ) : (
        <h2>No contacts in your phonebook</h2>
      )}
    </>
  );
};
