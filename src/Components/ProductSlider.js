import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import pic1 from "../Images/facial-powder.jpg"
import ProductSliderCard from "./ProductSliderCard";

const ProductSlider = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                slidesPerView={3}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
                <SwiperSlide><ProductSliderCard img={pic1} title={"Facial Powder"} price={"750"} /></SwiperSlide>
            </Swiper>

        </div >
    )
}

export default ProductSlider
