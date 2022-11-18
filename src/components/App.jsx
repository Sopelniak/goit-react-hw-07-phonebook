import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/users/contacts-selectors';
import { useEffect } from 'react';
import {fetchContacts} from '../redux/users/contactsOparations'

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </>
  );
}

export { App };
