import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo'  src={assets.logo} alt=''/>
      <img className='profile'src ={assets.profileIcon} alt=''  />

      
    </div>
  )
}

export default Navbar;