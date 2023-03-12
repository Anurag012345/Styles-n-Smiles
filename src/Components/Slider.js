import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Slider.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Slider(props) {
    return (
        <div className='container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{ el: '', clickable: true }}
                navigation={{
                    nextEl: 'swiper-button-next',
                    prevEl: 'swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <h3 className="title">{props.title}</h3>
                    <img src={props.image} alt="" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-buton-pre slider-arrow">
                        <i>{KeyboardArrowLeftIcon}</i>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <i>{KeyboardArrowRightIcon}</i>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}
