import React, { Component } from "react";
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList"
import { LookingFor } from "./FindContact/FindContact"
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';

export class App extends Component{
  state = {
    contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: ''
  }

  addContact = data =>{
    // console.log(data);
    const {name, number} = data;
    const todo = {
      id: nanoid(),
      name,
      number
    };

    const checkCont = this.state.contacts
    .filter(contact => contact.name)
    .map(contact => contact.name)

    if(checkCont.includes(data.name)){
      Notiflix.Notify.failure(`${data.name} is already in contacts`);
      // alert(`${data.name} is already in contacts`);
    }
    else{
      this.setState(prevState => ({
        contacts: [todo, ...prevState.contacts]
      }))
    }
    console.log(data);
  }

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
    // console.log(this.state.contacts.filter(contact => contact.name))
  }

  onDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((todo) => todo.id !== id),
    }))
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {

    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <p>PhoneBook</p>
          <Form onSubmit={this.addContact} />

        <p>Contacts</p>
          <LookingFor value={filter} onChange={this.findContact}/>
          <ContactList contacts={visibleContacts} onDeleteId={this.onDelete} /> 
      </>
    );
  }
};
