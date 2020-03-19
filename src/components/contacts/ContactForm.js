import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  // store the user input into the state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    // don't lose any data
    e.preventDefault()
    // call another add action
    this.props.addContact(this.state)
    // this.props.addContact({...this.state})
    // clear form
    this.setState({ firstName: '', phone: '' })
  }

  render() {
    const { firstName, phone } = this.state
    // const  firstName  = this.state.firstName
    // const  phone  = this.state.phone
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='first name'
          required

          name='firstName' 
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label='phone'
          required

          name='phone'
          value={phone}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ContactForm; 