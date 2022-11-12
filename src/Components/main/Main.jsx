import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {ADrawer} from '../Drawer'
import { LoginDialog } from '../Form'
import Navbar from '../Navbar'
import { apiLogin } from '../store/actions'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Main() {
const dispatch = useDispatch()
const [open, setOpen] = React.useState(false);

  const someClicker = () => {
    dispatch(apiLogin('HOla'))
  }
  
  return (
    <div>
    <GoogleOAuthProvider clientId="736054641474-a29i8vnimmqjplifk89nmvu73dpeh22t.apps.googleusercontent.com">
    <Navbar handleDialog = {() => setOpen(prev => !prev)}  />
    <ADrawer />
    <LoginDialog open = {open} handleClose = {() => setOpen(false)} />
    <div>Hello Wolrd</div>
    <Button  onClick={someClicker}>
      Click Me
    </Button>

    </GoogleOAuthProvider>;
    </div>
  )
}