import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import ADrawer from '../Drawer'
import Navbar from '../Navbar'
import { apiLogin } from '../store/actions'

export default function Main() {
const dispatch = useDispatch()
const [open, setOpen] = React.useState(false);

  const someClicker = () => {
    dispatch(apiLogin('HOla'))
  }

  return (
    <>
    <Navbar onClicked = {() => setOpen(prev => !prev)} />
    <ADrawer isOpen = {open} setOpen={(bool) => setOpen(bool)} />
    <div>Hello Wolrd</div>
    <Button  onClick={someClicker}>
      Click Me
    </Button>
    </>
  )
}