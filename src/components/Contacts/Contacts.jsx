import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/users/contacts-selectors';
import { deleteContact } from 'redux/users/contactsOparations';
import s from './Contacts.module.scss';

function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts => {
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <ul>
        {filteredContacts(contacts).map(({id,name,phone}) => (
          <li className={s['contact-item']} key={id}>
            <span className={s.name}>{name}:</span>
            <div>
              <span className={s.number}>{phone}</span>
              <button
                className={s['btn-delete']}
                onClick={()=>dispatch(deleteContact(id))}
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
