import { Box } from 'components/Box';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts , onDeleteContact}) => {
  return (
    <Box>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact ={onDeleteContact}
            ></Contact>
          </li>
        ))}
      </ul>
    </Box>
  );
};
