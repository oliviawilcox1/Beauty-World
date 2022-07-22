// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 		passwordConfirmation: '',
	// 	}
	// }    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const navigate = useNavigate()
	const onSignUp = (event) => {
		event.preventDefault()
		const { msgAlert, setUser } = props
        const credentials = {email, password, passwordConfirmation}
		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
                console.log(error)
			})
	}


return (
    <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>Create An Account</h3>
            <form onSubmit={onSignUp}>
                    <input
                       class="signup"
                        required
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        required
                        class="signup"
                        name='password'
                        value={password}
                        type='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        required
                        class="signup"
                        name='passwordConfirmation'
                        value={passwordConfirmation}
                        type='password'
                        placeholder='Confirm Password'
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
    
    <button class="button-51" role="button" type='submit'>
                    SIGN UP
                </button>
            </form>
        </div>
        </div>
    
)}

export default SignUp