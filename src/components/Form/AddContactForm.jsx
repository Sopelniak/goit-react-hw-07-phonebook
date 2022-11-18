import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/users/contactsSlice';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/users/users-selectors';
import s from './Form.module.scss';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

function AddContactForm() {
  const [contact, setContact] = useState(INITIAL_FORM_STATE);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addContact = () => {
    const newContact = {
      name: contact.name,
      number: contact.number,
      id: nanoid(),
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addUser(newContact));
    }
  };

  const handleInput = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact();
    setContact({ name: '', number: '' });
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span>Name</span>

          <input
            onChange={handleInput}
            value={contact.name}
            placeholder="Andrew Sopelniak"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>

          <input
            onChange={handleInput}
            value={contact.number}
            placeholder="xxx-xx-xx"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export { AddContactForm };
