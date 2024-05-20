import * as React from 'react';
import { useContext, useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom'; 
import Logo from '../../assets/images/abclogo-trans2.png'
import User from '../../assets/images/Profile.png';
import Button from '@mui/material/Button';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import SearchBox from '../SearchBox';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { BiFullscreen } from "react-icons/bi";
import { BsShieldFillExclamation } from "react-icons/bs";
import {MyContext} from "../../Pages/Dashboard";
import { IoSearch } from "react-icons/io5";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = () =>{

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpennotificationDrop);

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem('user');
    const LoginName = JSON.parse(storedUserName);

    if (storedUserName) {
      setUserName(LoginName);
    }
  }, []);

  const context = useContext(MyContext);

  const handleOpenmyAcc = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemyAcc = () => {
    setAnchorEl(null);
  };

  const handleOpenenotification=()=>{
    setisOpennotificationDrop(true);
}

  const handleClosenotification=()=>{
    setisOpennotificationDrop(false);
  }


  const handleSignOut = () => {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/'); // Use navigate function from useNavigate
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var elem = document.documentElement;
  function openFullscreen() {
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
      }
  }
  

    return(
        <>
        <header className='d-flex align-items-center'>
            <div className="container-fluid w-100">
                <div className='row d-flex align-items-center'>
                    {/* Logo Wrapper */}
                    <div className="col-sm-2 part1">
                        <Link to={'/'} className='d-flex align-items-center logo'>
                            <img src={Logo}></img>
                        </Link>
                    </div>
                    <div className="col-sm-3 d-flex align-items-center pl-4 part2">
                        <Button className='rounded-circle mr-4 togglesidebar' onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                        {
                            context.isToggleSidebar===false ? <HiOutlineMenuAlt2 /> : <FaBars />
                        }
                        </Button>
                        <SearchBox/>
                    </div>
                    <div className="col-sm-7 d-flex align-items-center justify-content-end  part3">
                        <Button className='rounded-circle mr-4 full-screen' onClick={openFullscreen} ><BiFullscreen /></Button>
                        <Button className='rounded-circle mr-4 search' id='search' onClick={handleClickOpen} ><IoSearch/></Button>
                        <Button className='rounded-circle mr-4' onClick={()=>context.setthemeMode(!context.themeMode)}><MdOutlineLightMode  /></Button>
                        <div className='dropdownWrapper position-relative'> 
                        <Button className='rounded-circle mr-4'
                        onClick={handleOpenenotification}><FaRegBell /></Button>
                            <Menu
                              anchorEl={isOpennotificationDrop}
                              className="notification dropdown_list"
                              id="notification"
                              open={openNotification}
                              onClose={handleClosenotification}
                              onClick={handleClosenotification}
                              transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            >
                              <div className="head pl-3 pb-0">
                                <h4>Notifications (34)</h4>
                              </div>
                              <Divider className="mb-1" />
                                <div className="scroll">
                                <MenuItem onClick={handleClosemyAcc}>
                                  <div className="d-flex">
                                   <div>
                                   <div className="userImg">
                                      <span className="rounded-circle">
                                        <img src={User}></img>
                                      </span>
                                    </div>
                                   </div>
                                    <div className="dropdownInfo">
                                      <h4>
                                        <span>
                                          <b>Mahmudul</b> 
                                          added to his favorite list
                                          <b>Leather belt steve madden</b>
                                        </span>
                                      </h4>
                                      <p>few seconds ago!</p>
                                    </div>
                                  </div>
                                </MenuItem>
                                <MenuItem onClick={handleClosemyAcc}>
                                    <div className="d-flex">
                                    <div>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                          <img src={User}></img>
                                        </span>
                                      </div>
                                    </div>

                                      <div className="dropdownInfo">
                                        <h4>
                                          <span>
                                            <b>Mahmudul</b> 
                                            added to his favorite list
                                            <b>Leather belt steve madden</b>
                                          </span>
                                        </h4>
                                        <p>few seconds ago!</p>
                                      </div>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClosemyAcc}>
                                    <div className="d-flex">
                                    <div>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                          <img src={User}></img>
                                        </span>
                                      </div>
                                    </div>

                                      <div className="dropdownInfo">
                                        <h4>
                                          <span>
                                            <b>Mahmudul</b> 
                                            added to his favorite list
                                            <b>Leather belt steve madden</b>
                                          </span>
                                        </h4>
                                        <p>few seconds ago!</p>
                                      </div>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClosemyAcc}>
                                    <div className="d-flex">
                                    <div>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                          <img src={User}></img>
                                        </span>
                                      </div>
                                    </div>

                                      <div className="dropdownInfo">
                                        <h4>
                                          <span>
                                            <b>Mahmudul</b> 
                                            added to his favorite list 
                                            <b>Leather belt steve madden</b>
                                          </span>
                                        </h4>
                                        <p>few seconds ago!</p>
                                      </div>
                                    </div>
                                </MenuItem>
                                </div>
                                <div className="pl-3 pr-3 w-100">
                                   <Button className="btn primary noti-header-button w-100">View All Notifications</Button>
                                </div>
                            </Menu>
                        </div>  
                        <div className='myAccWrapper'>
                            <Button className='myAcc d-flex align-items-center' onClick={handleOpenmyAcc}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src={User}></img>
                                        </span>
                                    </div>
                                    <div className='userInfo'>
                                        <h4>{userName}</h4>
                                        <p className='mb-0'>@nanda276</p>
                                    </div>
                            </Button>

                            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMyAcc}
        onClose={handleClosemyAcc}
        onClick={handleClosemyAcc}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClosemyAcc}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BsShieldFillExclamation  fontSize="small" />
          </ListItemIcon>
          <Link to='/reset-password'>
          Reset Password
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <Logout className="logouticon" fontSize="small" />
          </ListItemIcon>
          <span className="logout">Logout</span>
        </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
        </>
    )
}

export default Header;