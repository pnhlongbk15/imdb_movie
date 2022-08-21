import React from 'react';
import { Link } from 'react-router-dom';

// style
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content__logo">
          <Link to="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-youtube"></i>          
          </Link>
          <Link to="/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
        <div className="footer__content__menus">
          <div className='footer__content__menu'>
            <Link to="/" >Get the IMDb App</Link>
            <Link to="/" >Help</Link>
            <Link to="/">Set Index</Link>
            <Link to="/">IMDbPro</Link>
            <Link to="/">Box Office Mojo</Link>
            <Link to="/">IMDb Developer</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to="/">Press Room</Link>
            <Link to="/">Advertising</Link>
            <Link to="/">Jobs</Link>
            <Link to="/">Conditions of Use</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Interest-Based Ads</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
