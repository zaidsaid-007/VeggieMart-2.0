import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Home"); // Track the active menu item
  const [cartCount, setCartCount] = useState(1); // Example state for cart items count

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo} alt='Logo' className='logo' />

      {/* Menu */}
      <ul className='menu'>
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-catalogue' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
      </ul>

      {/* Navbar right section */}
      <div className='navbar-right'>
        {/* Search Icon */}
        <SearchIcon />

        {/* Shopping Cart with Badge */}
        <Badge
          badgeContent={cartCount}
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#EEB902', // Badge color (yellow)
            },
          }}
          invisible={cartCount === 0} // Hide badge if cart is empty
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ShoppingBasketIcon />
        </Badge>

        {/* Sign-In Button */}
        <div className='Navbar-Search-Icon'>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
