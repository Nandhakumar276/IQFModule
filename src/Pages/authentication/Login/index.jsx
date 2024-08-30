import React, { useState,useEffect } from 'react';
import '../../../assets/CSS/auth.css';
import Logo from '../../../assets/images/abclogo-trans2.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import { FaUser } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';
import { setUserSession, resetUserSession } from '../../../Service/AuthService';

const Login = () =>{

    const [themeMode, setthemeMode] = useState(true);
    useEffect(()=>{
        if(themeMode===true){
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          localStorage.setItem('themeMode','light');
        }
        else{
          document.body.classList.remove('light');
          document.body.classList.add('dark');
          localStorage.setItem('themeMode','dark');
        }
        window.scrollTo(0,0);
      },[themeMode])


    const [showSignIn, setShowSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [inputIndex, setInputIndex] = useState(null);
    const [isshowPassword, setisShowPassword] = useState(false);
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const requestconfig = {
        headers: {
          'x-api-key': 'Vc74qXzgqE5FLdnCClovt7LMIBmmuzB76JgwysFr',
          'accept': "application/json" 
        }
      }

    const navigate = useNavigate();
    
    const loginURL ="https://4jbw9htd86.execute-api.ap-south-1.amazonaws.com/Prod/api/Login/login";
    const custurl = 'https://4jbw9htd86.execute-api.ap-south-1.amazonaws.com/Prod/api/Customer';

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response =await axios.get(custurl,requestconfig);
          setWeatherData(response.data);
          console.log(response.data);
        } catch (err) {
          // Handle errors here
        }
      };
  
      fetchData(); // Call the function when the component mounts
    }, []);
   


    const focusInput=(index)=>{
        setInputIndex(index);
    }


    function handleUserNameChange(event) {
        const UserNameinputValue = event.target.value;
        setUserName(UserNameinputValue); // Update with the value directly
        if (!UserNameinputValue.trim()) {
            // If username is empty, show error message
            setShowUsernameError(true);
            return; // Exit function early
        } else {
            // If username is not empty, hide error message
            setShowUsernameError(false);
        }
    }

    function handlePasswordChange (event) {
        const PasswordinputValue = event.target.value;
        setPassword(PasswordinputValue); // Update with the value directly
        if (!PasswordinputValue.trim()) {
            // If username is empty, show error message
            setShowPasswordError(true);
            return; // Exit function early
        } else {
            // If username is not empty, hide error message
            setShowPasswordError(false);
        }
    }


    function handleButtonClick() { 
        debugger;
        if(!userName.trim() && !password.trim()){
            setShowUsernameError(true);
            setShowPasswordError(true);
        }

        if (!userName.trim()) {
            setShowUsernameError(true);
            return;
        } else {
            setShowUsernameError(false);
        }
        if (!password.trim()) {
            setShowPasswordError(true);
            return;
        } else {
            setShowPasswordError(false);
        }

        const requestBody = {
            LoginName: userName,
            Password: password,
          };
        
          handleSubmit({ preventDefault: () => {} }, requestBody); 
    }
    
    
    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        setIsLoading(true);
        setShowSignIn(false);
        const requestBody = {
          LoginName: userName,
          Password: password,
        };
        await axios.post(loginURL, requestBody, requestconfig)
        .then(response => {
          //setUserSession(response.data.user, response.data.token);
          console.log(response.data);
          const token = response.data.token;
          setUserSession(userName, token);
          navigate('/dashboard');
        })
        .catch(error => {
          //alert('Login failed. Please check your credentials.');
          showSnackbar('Login failed. Please check your credentials.', 'error');
          console.log(error);
          setIsLoading(false);
          setShowSignIn(true);
        });
        setIsLoading(false);
        setShowSignIn(true);
      };
    

        // Snackbar state variables
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // or 'error'

    // Snackbar close handler
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    // Function to show Snackbar with specified message and severity
    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };
     

    return(
            <>
           
            {isLoading ? <Loader /> : null}
            {showSignIn && ( 
            <div>
            <img src="https://mironcoder-hotash.netlify.app/images/pattern.webp" className='loginPattern'></img>
            <section className="loginSection">
                    <div className='loginBox'>
                        <div className='logo text-center'>
                            <img src={Logo} width={150} className='logo'></img>
                            <h5 className='font-weight-bold'>Login to ABC Fruits</h5>
                        </div>

                        <div className='wrapper mt-3 card border p-4'>
                            <form>
                                <div className={`form-group position-relative ${inputIndex===0 && 'focus' }
                                ${showUsernameError===true ? 'error' : ''} `}> 
                                    <span className='icon'><MdEmail/></span>
                                    <input type='text' 
                                        className='form-control' 
                                        placeholder="Enter username or email"
                                        tabIndex={1} 
                                        onFocus={() => focusInput(0)} 
                                        onBlur={() => setInputIndex(null)}
                                        id="username"
                                        name="username"
                                        value={userName}  
                                        onInput={handleUserNameChange} 
                                    />
                                </div>
                                <div id="username-error" className={`text-sm text-red-500 ${showUsernameError ? '' : 'hidden'}`}>Please enter a valid email address.</div>
                                <div className={`form-group position-relative ${inputIndex===1 && 'focus' }
                                ${showPasswordError===true ? 'error' : ''} `}>
                                    <span className='icon'><BiSolidLock /></span>
                                    <input type={`${isshowPassword===true ? 'text' : 'password'}`} 
                                    className='form-control' 
                                    placeholder='Enter your password' 
                                    tabIndex={2} 
                                    onFocus={() => focusInput(1)} 
                                    onBlur={() => setInputIndex(null)}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onInput={handlePasswordChange}
                                    />
                                    
                                    
                                    <span className="toggleShowPassword" onClick={() => setisShowPassword(!isshowPassword)} >
                                    {
                                        isshowPassword===true ?   <IoMdEye/> :   <IoMdEyeOff/>
                                    }
                                    </span>
                                </div>
                                <div id="password-error" className={`mt-1 text-sm text-red-500 ${showPasswordError ? '' : 'hidden'}`}>Password must be at least 8 characters long and contain both letters and numbers.</div>
                                <div className='form-group'>
                                    <Button className='btn-blue btn-lg w-100 btn-big'
                                    tabIndex={3} 
                                    onClick={handleButtonClick}
                                    id='nextbtn'
                                    >Sign In</Button>
                                </div>

                                <div className='form-group text-center'>
                                    <Link to={'/forget-password'} className='link text-center'>FORGET PASSWORD</Link>
                                    <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                        <span className='line'></span>
                                        <span className='txt'>or</span>
                                        <span className='line'></span>
                                    </div>

                                    <Button variant='outlined'  className='w-100 btn-lg btn-big loginWithGoogle'>
                                        <FcGoogle style={{ fontSize: '35px' }}/> &nbsp; Sign In with Google 
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className='wrapper mt-3 card border footer p-2'>
                            <span className='text-center'>
                                    Don't have an account?
                                <Link to={'/'} className='link color ml-2'>Register</Link>
                            </span>
                        </div>
                    </div>
            </section>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MuiAlert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>

            </div>
           )}
           </>
    )
}


export default Login;