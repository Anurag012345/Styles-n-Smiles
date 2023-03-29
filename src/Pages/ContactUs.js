import React from 'react'
import "./ContactUs.css"
import shape1 from "../Images/shape.png"
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import NavBar from '../Components/navBar';
import Footer from '../Components/Footer';
const ContactUs = () => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classNameList.add("focus");
    }
    function blurFunc() {
        let parent = this.parentNode;
        if (this.value === "") {
            parent.classNameList.remove("focus");
        }
    }
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
    return (
        <div>
            <NavBar />
            <div className="container">
                <span className="big-circle"></span>
                <img src={shape1} alt="" className="square" />
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            We would love to hear from you. Contact us with any questions,
                            comments or suggestions!
                        </p>
                        <div className="info">
                            <div className="information">
                                <p><GrLocation /> Styles n' Smiles</p>
                            </div>
                            <div className="information">
                                <p><AiOutlineMail /> help@styles.com</p>
                            </div>
                            <div className="information">
                                <p> <BsTelephone /> +91 6396268840 </p>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100008365355034">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.youtube.com/@poojasemwal13uk">
                                    <FaYoutube />
                                </a>
                                <a
                                    href="https://instagram.com/pooja_beauty_care_rpg?igshid=YmMyMTA2M2Y="
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autoComplete="false">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label htmlFor="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label htmlFor="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label htmlFor="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ContactUs
