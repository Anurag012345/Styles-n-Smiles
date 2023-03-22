import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonial.css";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import pic1 from "../Images/kohli.jpg"
import Card from "./Card";

const Testimonial = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={4} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={2} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={5} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={3} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={2} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={1} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={4} /></SwiperSlide>
                <SwiperSlide><Card img={pic1} title={"Owner"} info={"He is very Good Cricketer"} rating={5} /></SwiperSlide>

            </Swiper>

        </div >
    )
}

export default Testimonial
