import React, { Component } from 'react';
import ContactsList from './components/contacts/ContactsList';
import ContactForm from './components/contacts/ContactForm';
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'Fred', phone: '801-123-1234'},
    { id: 2, firstName: 'Jill', phone: '801-333-1234'},
    { id: 3, firstName: 'Jammy', phone: '801-123-3221'},
  ],
    showForm: true
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

                    // 2
  deleteContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
            // 1              1
      if (contact.id !== id ) {
        return contact 
      }
    })
    this.setState({ contacts })
    // this.setState({ contacts: [...contacts]  })
  }

  // deleteContact()

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addContact = (incomingContact) => {
    // let newContact = { id: this.getId(), firstName: incomingContact.firstName, ...}
    let newContact = { id: this.getId(), ...incomingContact }
    this.setState({ contacts: [newContact, ...this.state.contacts]})
  }

  render() {
    const { contacts, showForm } = this.state 
    // const contacts = this.state.contacts 
    // const { deleteContact } = this
    return(
      <div>
        <h1>React contact list</h1>
        <Button onClick={this.toggleForm}>
          <Icon name={showForm ? 'angle double up' : 'angle double down'} />
        </Button>

        {
          showForm ? <ContactForm addContact={this.addContact} /> : null
        }
        
        <ContactsList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default App;