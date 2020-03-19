import React from 'react';
import { Button } from 'semantic-ui-react';

const Contact = ({ id, firstName, phone, deleteContact }) => (
  <div>
    <h3>{firstName}</h3>
    <h3>{phone}</h3>
    <Button color='red' onClick={() => deleteContact(id)}>
      Delete
    </Button>
  </div>
)

export default Contact;