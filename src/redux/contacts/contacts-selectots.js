import { getFilter } from '../filter/filter-selectors';
export const getAllContacts = store => store.contacts;

export const visibleContacts = ({ contacts, filter }) => {
  if (!getFilter) {
    return getAllContacts;
  }
  const normolizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normolizeFilter)
  );
};
