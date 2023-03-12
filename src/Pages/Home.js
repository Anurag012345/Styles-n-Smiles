import React from "react";
import NavBar from "../Components/navBar";
import ImageSlider from "../Components/ImageSlider"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import aboutUsImg from "../Images/woman-hairdresser-salon.jpg"
import classes from "./Home.module.css";
import slider from "../Components/Slider"

import bleach from "../Images/bleach.jpg"
import bridal from "../Images/Bridal.jpg"
import dten from "../Images/dten.jpg"
import facial from "../Images/facial.jpg"
import haircutting from "../Images/haircutting.jpg"
import manicure from "../Images/manicure.jpg"
import spa from "../Images/spa.jpg"
import waxing from "../Images/Waxing.jpg"

export default function Home() {
  const services = [
    { id: 1, img: bleach, name: "Bleach" },
    { id: 2, img: bridal, name: "Bridal" },
    { id: 3, img: dten, name: "DTen" },
    { id: 4, img: facial, name: "Facial" },
    { id: 5, img: haircutting, name: "Hair Cutting" },
    { id: 6, img: manicure, name: "Manicure & Paddicure" },
    { id: 7, img: spa, name: "Spa" },
    { id: 8, img: waxing, name: "Waxing" },

  ]
  return (
    <div>
      <NavBar />
      <div>
        <ImageSlider infinite timer={5000} stopOnManual>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </ImageSlider>
      </div>
      <div className={classes.aboutUsHome}>
        <div className={classes.aboutUsImg}>
          <img src={aboutUsImg} alt="" />
        </div>
        <div className={classes.aboutUsInfo}>
          <h3>About Us</h3>
          <p>At Styles n' Smiles, we believe that everyone deserves to look and feel their best. Our team of experienced stylists and beauty experts are dedicated to providing top-quality services and treatments to help you achieve your desired look. Whether you're looking for a fresh new haircut, a relaxing facial, or a bold new hair color, we have the expertise and the latest tools and techniques to bring your vision to life.

            We are committed to creating a warm and welcoming atmosphere where our clients can relax and enjoy a pampering experience. Our salon is equipped with modern facilities and we use only the best products to ensure that you leave feeling rejuvenated and confident.

            At Styles n' Smiles, we understand that each client is unique and we take the time to listen to your needs and preferences to create a personalized service that meets your expectations. We strive to exceed your expectations with every visit and look forward to welcoming you to our salon.</p>
        </div>

      </div>

    </div>
  );
}
