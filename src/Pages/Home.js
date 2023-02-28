import React from "react";
import NavBar from "../Components/navBar";
import ImageSlider from "../Components/ImageSlider"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"


import "./Home.css";
export default function Home() {
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
    </div>
  );
}
