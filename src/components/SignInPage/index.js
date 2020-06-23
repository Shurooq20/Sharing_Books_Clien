import React, { Component } from 'react'
import { Session } from '../../requests'

class SignInPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
    }
    this.createSession = this.createSession.bind(this)
  }

  createSession(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    // submit a request to sessions#create
    Session.create({
      email: formData.get('email'),
      password: formData.get('password'),
    }).then((data) => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: 'Wrong credentails' }],
        })
      } else {
        this.props.history.push('/')
        if (typeof this.props.signIn === 'function') {
          this.props.signIn()
        }
      }
    })
  }

  render() {
    const { errors } = this.state
    return (
      <main>
        
        <form className='signin_form' onSubmit={this.createSession}>
        {errors.length > 0 ? (
          <div>{errors.map((e) => e.message).join(', ')}</div>
        ) : null}
        <h1 className='signin_header'> Sign In</h1>
        
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
        
         
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
        
          <input className='signin_button' type='submit' value='Sign In' />
        </form>
      </main>
    )
  }
}

export default SignInPage
