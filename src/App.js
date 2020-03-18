import React, { Component } from 'react';
import ContactsList from './components/contacts/ContactsList';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'Fred', phone: '801-123-1234'},
    { id: 2, firstName: 'Jill', phone: '801-333-1234'},
    { id: 3, firstName: 'Jammy', phone: '801-123-3221'},
  ] }

  render() {
    const { contacts } = this.state 
    // const contacts = this.state.contacts 
    return(
      <div>
        <h1>React contact list</h1>
        <ContactsList contacts={contacts} />
      </div>
    )
  }
}

export default App;
