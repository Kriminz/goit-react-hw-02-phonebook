import React, { Component } from "react";
import { nanoid } from 'nanoid'
import css from './Form.module.css'

export class Form extends Component{
  state ={
    name: '',
    number: ''
  }

  inputId = nanoid();

  handleChange = e => {
    const {name, value} = e.currentTarget;

    this.setState({[name]: value});
  }

  onContactChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  onContactSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: ''});
  }

  render(){
    
    const { name, number } = this.state;

    return (
      <>
        <form className={css.form} onSubmit={this.onContactSubmit}>
          <label className={css.label} htmlFor={this.inputId}>
            Name
            <input className={css.input}
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.inputId}
              />
          </label>

          <label className={css.label} htmlFor={this.inputId}>
            Number
            <input className={css.input}
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.inputId}
              />
          </label>

          <button type="submit">Add contact</button>

        </form>
      </>
    )
  }
}