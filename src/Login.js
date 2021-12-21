import { Button } from '@mui/material';
import React from 'react';
import './Login.css'
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider' 

function Login() {
	const [state, dispatch] = useStateValue();

     const signIn = () => {
		// sign In
                const provider = new GoogleAuthProvider();
					signInWithPopup(auth, provider)
					.then((result) => {

						dispatch({
							type: actionTypes.SET_USER,
							user: result.user,
						});
						console.log(result.user);
					})
					.catch((error) => alert(error.message));
			};
    return (
			<div className='login'>
				<div className='login_logo'>
					<img src='https://i.imgur.com/bbKKvPv.png' alt='devbranch-logo-transparent' />
				</div>

				<h1>DevBranch</h1>
				
				<Button type="submit" onClick={signIn}>
					Sign In
				</Button>
			</div>
		);
}

export default Login;