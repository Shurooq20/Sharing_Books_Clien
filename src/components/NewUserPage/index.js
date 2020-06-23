import React, { Component } from 'react';
import { User } from '../../requests';

class NewUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const params = {
      user: {
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('passwordConfirmation')
      }
    }
    User.create(params)
      .then(data => {
        if (data.status === 422) {
          this.setState((state) => {
            return {
              errors: data.errors
            }
          })
        } else {
          this.props.history.push('/sign_in', 'hello')
        }
      })
  }

  render() {
    return(
      <main>
        {/* <h1>New User Page</h1>
        { Object.keys(this.state.errors).length > 0 ? (
          <div>Failed to create User</div>
        ) : null
        } */}
        <form className='user_form' onSubmit={this.handleSubmit}>
              <h1 className='user_header'>New User Page</h1>
              { Object.keys(this.state.errors).length > 0 ? (
                <div>Failed to create User</div>
              ) : null
              }
         
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName'/>
         
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName'/>
         
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'/>
         
            <label htmlFor='password'>Password</label>
            <input type='password' name='password'/>
         
            <label htmlFor='passwordConfirmation'>Confirm Password</label>
            <input type='password' name='passwordConfirmation'/>
        
          <input className='user_button' type='submit' value='Create User'/>
        </form>
      </main>
       )
    }
  }
  
  export default NewUserPage