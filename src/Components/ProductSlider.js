import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ProductSlider.css";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

import pic1 from "../Images/lipstick.jpeg"
import pic2 from "../Images/mascara.jpeg"
import pic3 from "../Images/eye-pallet-shadow.jpeg"
import pic4 from "../Images/foundation.jpeg"
import pic5 from "../Images/blush.jpeg"
import pic6 from "../Images/eyeliner.jpeg"
import pic7 from "../Images/Hair-oil.jpeg"
import pic8 from "../Images/hair-sprey.jpeg"
import pic9 from "../Images/perfume.jpeg"
import pic10 from "../Images/body-lotion.jpeg"
import ProductSliderCard from "./ProductSliderCard";

const Products = [{
    "id": 1,
    "image": "https://example.com/images/lipstick.jpg",
    "name": "Lipstick",
    "price": 299
},
{
    "id": 2,
    "image": "https://example.com/images/mascara.jpg",
    "name": "Mascara",
    "price": 199
},
{
    "id": 3,
    "image": "https://example.com/images/eyeshadow-palette.jpg",
    "name": "Eyeshadow Palette",
    "price": 499
},
{
    "id": 4,
    "image": "https://example.com/images/foundation.jpg",
    "name": "Foundation",
    "price": 599
},
{
    "id": 5,
    "image": "https://example.com/images/blush.jpg",
    "name": "Blush",
    "price": 149
},
{
    "id": 6,
    "image": "https://example.com/images/eyeliner.jpg",
    "name": "Eyeliner",
    "price": 99
},
{
    "id": 7,
    "image": "https://example.com/images/hair-oil.jpg",
    "name": "Hair Oil",
    "price": 250
},
{
    "id": 8,
    "image": "https://example.com/images/hair-spray.jpg",
    "name": "Hair Spray",
    "price": 750
},
{
    "id": 9,
    "image": "https://example.com/images/perfume.jpg",
    "name": "Perfume",
    "price": 450
},
{
    "id": 10,
    "image": "https://example.com/images/body-lotion.jpg",
    "name": "Body Lotion",
    "price": 550
}
]



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
                {Products.map(product => (
                    <SwiperSlide key={product.id} >
                        <ProductSliderCard img={product.image} title={product.name} price={product.price} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    )
}

export default ProductSlider
