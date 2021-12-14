import { Button } from '@mui/material';
import React from 'react';
import './Login.css'
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {

     const signIn = () => {
		// sign In
                const provider = new GoogleAuthProvider();
					signInWithPopup(auth, provider)
					.then((result) => {
						console.log(result.user);
					})
					.catch((error) => alert(error.message));
			};
    return (
			<div className='login'>
				<div className='login_logo'>
					<img src='https://i.imgur.com/bbKKvPv.png' alt='devbranch-logo-transparent' />
				</div>
				<Button type="submit" onClick={signIn}>
					Sign In
				</Button>
			</div>
		);
}

export default Login;