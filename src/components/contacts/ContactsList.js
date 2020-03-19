import React from 'react';
import Contact from './Contact';

const ContactsList = ({ contacts, deleteContact }) => (
  // contacts.map( contact => <Contact key={contact.id} id={contact.id} firstName={contact.firstName} phone={contact.phone} />)
  contacts.map( contact => <Contact
      key={contact.id} 
      {...contact} 
      deleteContact={deleteContact} 
    /> )
)

// const ContactsList = () => {

//   return(

//   )
// }


export default ContactsList;