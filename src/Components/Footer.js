import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Link to="/" className="navbar-logo">
                    Smile <i className="fab fa-typo3" />
                </Link>
            </div>
            <div className="footer__services">
                <h3>Our Services</h3>
                <div className="ourservicescat">
                    <ul className='mylist'>
                        <li>Bleach</li>
                        <li>Spa</li>
                        <li>Message</li>
                        <li>Waxing</li>
                        <li>Bridal</li>
                        <li>Facial</li>
                        <li>Cutting</li>
                    </ul>
                </div>

            </div>
            <div className="footer__contact">
                <h3>Contact Us</h3>
                <p>123 Main Street</p>
                <p>Anytown, USA 12345</p>
                <p><MdPhone /> (555) 555-5555</p>
                <p><IoMdMail /> info@example.com</p>
            </div>
        </footer>
    );
}

export default Footer;
