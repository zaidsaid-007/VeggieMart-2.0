import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge'; // Importing Badge from Material UI

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [cartCount, setCartCount] = useState(1); // Example state for cart items count (can be dynamic)

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo' />
      <ul className='menu'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-us</li>
      </ul>
      <div className='navbar-right'>
        <SearchIcon />
        {/* Adding badge to the Shopping Basket icon */}
        <Badge
          badgeContent={cartCount}
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#EEB902', // Badge color for now were using yellow
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
        <div className='Navbar-Search-Icon'>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
