import React from "react";
import NavBar from "../Components/navBar";
import ImageSlider from "../Components/ImageSlider"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import aboutUsImg from "../Images/woman-hairdresser-salon.jpg"
import classes from "./Home.module.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import bleach from "../Images/bleach.jpg"
import bridal from "../Images/Bridal.jpg"
import dten from "../Images/dten.jpg"
import facial from "../Images/facial.jpg"
import haircutting from "../Images/haircutting.jpg"
import manicure from "../Images/manicure.jpg"
import spa from "../Images/spa.jpg"
import waxing from "../Images/Waxing.jpg"

import ReactCardSlider from '../Components/ReactCardSlider';



export default function Home() {
  const services = [
    { id: 1, image: bleach, title: "Bleach" },
    { id: 2, image: bridal, title: "Bridal" },
    { id: 3, image: dten, title: "DTen" },
    { id: 4, image: facial, title: "Facial" },
    { id: 5, image: haircutting, title: "Hair Cutting" },
    { id: 6, image: manicure, title: "Manicure & Paddicure" },
    { id: 7, image: spa, title: "Spa" },
    { id: 8, image: waxing, title: "Waxing" },

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
          <button className={classes.aboutUsButton}>
            <Link to="/" className={classes.aboutUsButton}>
              Know More
            </Link>
          </button>
        </div>
      </div>
      <div className={classes.ourServices}>
        <h1 className={classes.ourServicesHeading}>Our Service Categories</h1>
        <div className={classes.slider}>
          <ReactCardSlider slides={services} />
        </div>
      </div>
      <div className={classes.bestSeller}>
        <h1 className={classes.bestSellerHeading}> Our Bestseller Services & Products</h1>
        <div className={classes.bestSellerSlider}>
          <ReactCardSlider slides={services} />
        </div>
      </div>
      <div className={classes.contactUs}>
        <div className={classes.Map}>

        </div>
        <div className={classes.info}></div>
      </div>
      <Footer />
    </div>
  );
}
