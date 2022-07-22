import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };


const SignIn = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 	}
	// }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
	// handleChange = (event) =>
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	})
	const onSignIn = (event) => {
		event.preventDefault()
		const { msgAlert, setUser } = props
        const credentials = {email, password}
		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed',
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

return (
    <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>LOG IN</h3>
            <form onSubmit={onSignIn}>
                <Form.Group controlId='email'>
                    <input
                        required
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <input
                        required
                        name='password'
                        value={password}
                        type='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
           
                <button class="button-51" role="button" type='submit'>
                    SIGN IN
                </button>
                
            </form>
           <span>
            <a class="a" href="/sign-up">
                <button class="button-52" role="button" type='submit'>
                   CREATE AN ACCOUNT
                </button>
            </a>
            </span> 
        </div>
    </div>
)}

export default SignIn
