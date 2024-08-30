import React, { useState,useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = () =>{

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
    
      const [open, setOpen] = useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const apiUrl = "https://dummyjson.com/products/search?q=";

      const [search, setSearch] = useState("");

      const handleChange = (event) => {
        const text = event.target.value;
        setSearch(text);
      }

      useEffect(() => {
        const timeOut = setTimeout(() => {
          fetch(`${apiUrl}${search}`)
          .then(res => res.json())
          .then((res) => {
            console.log(res);
          });
        },1500)
        return () => { 
          clearTimeout(timeOut)
        }
      }, [search])

    return(
        <>
       <div className="searchBox position-relative d-flex align-items-center">
            <IoSearch className="mr-2" />
            <input type="text" onClick={handleClickOpen} placeholder="Search here..."></input>
       </div>
            <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className='dialog'
          >
            <DialogTitle sx={{ m: 0, p: 2 }} className='header-title' id="customized-dialog-title">
              Search
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
                <TextField
                
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                onInput={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button  onClick={handleClose} variant="contained" color="primary">
                Search
              </Button>
              <Button  onClick={handleClose} variant="contained" color="primary">
                Cancel
              </Button>
            </DialogActions>
          </BootstrapDialog>
          </>
    )
}

export default SearchBox;