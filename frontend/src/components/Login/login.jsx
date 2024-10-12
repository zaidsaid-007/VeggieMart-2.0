import { useState } from 'react';
import './login.css';
import CloseIcon from '@mui/icons-material/Close';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState('Sign Up');

    return (
        <div className='login-popup'>
            <form className='login-form'>
                <div className='login-title'>
                    <h2>{currState}</h2>
                    <CloseIcon onClick={() => setShowLogin(false)} />
                </div>
                <div className='form-inputs'>
                    {currState === 'Sign Up' && <input type='text' placeholder='Username' required />}
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    {currState === 'Sign Up' && <input type='password' placeholder='Confirm Password' required />}
                </div>
                <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className='popup-condition'>
                    <input type='checkbox' required />
                    <p>By Continuing, I agree to the terms of use and private policy.</p>
                </div>
                {currState === 'Sign Up' ? (
                    <p>
                        Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
                    </p>
                ) : (
                    <p>
                        New to VeggieMart? <span onClick={() => setCurrState('Sign Up')}>Sign up here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;