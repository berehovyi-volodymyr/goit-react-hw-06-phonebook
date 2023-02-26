import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(store => store.contacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contact</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <h2>No contacts in your phonebook</h2>
      )}
    </>
  );
};
