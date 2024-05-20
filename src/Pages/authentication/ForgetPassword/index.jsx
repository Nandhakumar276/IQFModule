import React, { useState, useEffect } from 'react';
import '../../../assets/CSS/auth.css';
import Loader from '../../Loader';
import { Link } from 'react-router-dom'; 
import Logo from '../../../assets/images/abclogo-trans2.png';
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';

const ForgetPassword = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Simulating an asynchronous task (e.g., API call)
        setIsLoading(true);
        setShowSignIn(false);
        setTimeout(() => {
            setIsLoading(false);
            setShowSignIn(true);
        }, 2000); // Simulating a 2-second loading delay
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {showSignIn && (
                <div className='mc-auth'>
                    <img className='mc-auth-pattern' src="https://mironcoder-hotash.netlify.app/images/pattern.webp" alt="pattern"></img>
                    <div className='mc-auth-group'>
                        <Link to='/' className='mc-logo mc-auth-logo'>
                            <img src={Logo} width={150} className='logo'></img>
                        </Link>
                        <h4 className='mc-auth-title'>reset the password</h4>
                        <form className='mc-auth-form'>
                        <div class="mc-icon-field h-sm">
                            <MdEmail/>
                            <input type="email" tabIndex={1} placeholder="Enter your email" />
                        </div>

                        <button className='mc-auth-btn h-sm'
                                    tabIndex={2} 
                                    id='nextbtn'
                                    >get link</button>
                        </form>
                        <div className='mc-auth-navigate'>
                            <span>remember the password?</span>
                            <Link to="/">login</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgetPassword;
