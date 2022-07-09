import { Component } from 'react';
import shortid from 'shortid';

import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { initialContacts } from 'constants';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let savedContacts = localStorage.getItem('contacts');
    savedContacts = JSON.parse(savedContacts);

    if (savedContacts) {
      return this.setState({ contacts: savedContacts });
    }
    this.setState({ contacts: initialContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const actContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (actContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(actContacts));
    }
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: shortid.generate(),
          name,
          number,
        },
      ],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  updateFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Box
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter name={this.state.filter} onChange={this.updateFilter}></Filter>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Box>
    );
  }
}
