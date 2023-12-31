import React, { Component } from 'react';
import './ContactForm.css';
import ContactAnyInput from '../ContactAnyInput';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    e.target.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form action="" className="MainForm" onSubmit={this.handleSubmit}>
        <ContactAnyInput
          LableText="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          handleChange={this.handleChange}
        />
        <ContactAnyInput
          LableText="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          handleChange={this.handleChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
