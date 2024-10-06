import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">

        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>&quot;At Veggie Mart, we bring the farm to your table with the freshest local produce, handpicked just for you. Supporting local farmers, nourishing your community. Eat fresh, live healthy, and make a difference with every bite.&quot;</p>
            <div className="footer-socials">
                <LinkedInIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
                <WhatsAppIcon/>
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+254703116448</li>
                <li>contact@vegiemart.com</li>
            </ul>
            <form className="news-letter">
                <input type="text" placeholder="Your Email Address" />
                <button type="submit">Subscribe</button>
            </form>

        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2024 Veggie Mart. All rights reserved.</p>
    </div>
  );
};

export default Footer;
