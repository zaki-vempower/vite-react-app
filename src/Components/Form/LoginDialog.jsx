import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';


export default function LoginDialog(props) {
  const {open = false,handleClose} = props
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Login</DialogTitle>
    <DialogContent sx = {{
      padding: '8%'
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        autoFocus
        margin="dense"
        id={errors.email ? "outlined-error-helper-text": "name"}
        label="Email Address"
        type="email"
        fullWidth
        variant="outlined"
        error = {errors.email}
        {...register("email", { required: true })}
      />

    <TextField
        autoFocus
        margin="dense"
        id={errors.email ? "outlined-error-helper-text": "password"}
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        error = {errors.password}
        {...register("password", { required: true })}
      />
      </form>
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit(onSubmit)}>Login</Button>
    </DialogActions>
  </Dialog>
  )
}
