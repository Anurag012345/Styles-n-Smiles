import React from 'react'
import classes from "./Footer.module.css"
import { Link } from "react-router-dom";
import { MdPhone } from "react-icons/md";
export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footerLogo}>
                <Link to="/" className="navbar-logo">
                    Smile <i className="fab fa-typo3" />
                </Link>
            </div>
            <div className={classes.ourServices}>
                <ul>
                    <li>Bleach</li>
                    <li>Spa</li>
                    <li>Message</li>
                    <li>Waxing</li>
                    <li>Bridal</li>
                    <li>Facial</li>
                    <li>Cutting</li>
                </ul>
            </div>
            <div className={classes.contactUs}>
                <h4>Get in Touch With Us</h4>
                <p><MdPhone /> : +91 6396268840 </p>
            </div>

        </div>
    )
}
