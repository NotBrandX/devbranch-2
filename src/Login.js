import { Button } from '@mui/material';
import React from 'react';
import './Login.css'

function Login() {

    const signIn = () => {
        // sign in ...
    }
    return (
			<div className='login'>
				<div className='login_logo'>
					<img src='https://i.imgur.com/bbKKvPv.png' alt='devbranch-logo-transparent' />
				</div>
				<Button type='submit' oncClick={signIn}>
					Sign In
				</Button>
			</div>
		);
}

export default Login;