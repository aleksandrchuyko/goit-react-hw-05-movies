import { Component } from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const currentInputName = e.currentTarget.name;
    this.setState({
      [currentInputName]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.contacts.find(contact => contact.name === this.state.name)) {
      window.alert(`${this.state.name} is already in contacts!`);
      return false;
    }

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Box>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaceSs, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit">Add contact</button>
        </form>
      </Box>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}
