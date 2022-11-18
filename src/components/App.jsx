import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/users/users-selectors';

function App() {
  const contacts = useSelector(selectContacts);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   try {
  //     const LSContacts = localStorage.getItem('contacts');
  //     if (LSContacts !== null) {
  //        setContacts(prev => [...prev, ...JSON.parse(LSContacts)]);
  //     }
  //   } catch (error) {
  //     console.error('Get state error: ', error.message);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
