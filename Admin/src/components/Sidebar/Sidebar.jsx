import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>

        <NavLink to='/add' className='sidebar-option'>
           <img className='sidebar-option-icon' src={assets.addIcon} alt=''/>
           <p>Add Items</p>
        </NavLink>
        <NavLink to='list' className='sidebar-option'>
           <img className='sidebar-option-icon' src={assets.orderIcon} alt='' />
           <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className='sidebar-option'>
           <img className='sidebar-option-icon' src={assets.parcelIcon} alt='' />
           <p>Orders</p>
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar