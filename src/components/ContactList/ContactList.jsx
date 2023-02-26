import styles from './contactList.module.css';
import { deleteContacts } from '../../redux/contacts/contacts-slice';
import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from '../../redux/contacts/contacts-selectots';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItems}>
          <p className={styles.name}>{name}</p>
          <p className={styles.number}>{number}</p>
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
