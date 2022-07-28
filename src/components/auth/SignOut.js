import { useNavigate } from 'react-router-dom'
import {Button, ButtonGroup} from 'react-bootstrap'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'


const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    const navigate = useNavigate()
    const onSignOut = () => {
		signOut(user)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

return (
    <>
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h2>Are you sure you want to sign out?</h2>
                <small>We hate to see you go...</small><br/>
                <button  onClick={onSignOut}>
                Sign Out
                </button>
            </div>
        </div>
    </>
)}

export default SignOut
