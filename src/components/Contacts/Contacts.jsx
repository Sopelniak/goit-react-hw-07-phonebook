import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/users/contactsSlice';
import { selectContacts, selectFilter } from 'redux/users/users-selectors';
import s from './Contacts.module.scss';

function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <ul>
        {filteredContacts(contacts).map(({id,name,number}) => (
          <li className={s['contact-item']} key={id}>
            <span className={s.name}>{name}:</span>
            <div>
              <span className={s.number}>{number}</span>
              <button
                className={s['btn-delete']}
                id={id}
                onClick={()=>dispatch(deleteUser(id))}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Contacts };
