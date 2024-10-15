import { useContext, useState } from 'react';
import './login.css';
import CloseIcon from '@mui/icons-material/Close';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState('Sign Up');
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        const endpoint = currState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
        const newUrl = `${url}${endpoint}`;

        console.log('URL:', newUrl);
        console.log('Data:', data);

        try {
            const response = await axios.post(newUrl, data);
            console.log('Response:', response.data);
            if (response.data.token) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                setShowLogin(false);
                console.log('Login successful');
            } else {
                setError(response.data.message || 'Login failed');
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-form'>
                <div className='login-title'>
                    <h2>{currState}</h2>
                    <CloseIcon onClick={() => setShowLogin(false)} />
                </div>
                <div className='form-inputs'>
                    {currState === 'Sign Up' && (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type='text'
                            placeholder='Username'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type='email'
                        placeholder='Email'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type='password'
                        placeholder='Password'
                        required
                    />
                    {currState === 'Sign Up' && (
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            required
                        />
                    )}
                </div>
                {error && <p className='error-message'>{error}</p>}
                <button type='submit'>
                    {currState === 'Sign Up' ? 'Create account' : 'Login'}
                </button>
                <div className='popup-condition'>
                    <input type='checkbox' required />
                    <p>By Continuing, I agree to the terms of use and private policy.</p>
                </div>
                {currState === 'Sign Up' ? (
                    <p>
                        Already have an account?{' '}
                        <span onClick={() => setCurrState('Login')}>Login here</span>
                    </p>
                ) : (
                    <p>
                        New to VeggieMart?{' '}
                        <span onClick={() => setCurrState('Sign Up')}>Sign up here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;