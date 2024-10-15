import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Home"); // Track the active menu item
  const [cartCount, setCartCount] = useState(1);
  const {getTotalCartAmount,token,setToken}= useContext(StoreContext) // Example state for cart items count


  const navigate = useNavigate();

  const logOut =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

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
          {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
          :<div className='navbar-profile'>
            <img src={assets.profileIcon} alt='Profile' />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.cart}alt=''/><p>Orders</p></li>
              <hr/>
              <li onClick={logOut}><img src={assets.logout}alt='' /><p>LogOut</p></li>
            </ul>
            
            </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
