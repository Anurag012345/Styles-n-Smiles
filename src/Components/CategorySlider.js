import React from 'react'
import Card from "./Card"
import "./CategorySlider.css"
const CategorySlider = ({ data }) => {

    let box = document.querySelector('.product-container');
    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;

    }
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width)
    }


    return (
        <div>
            <div className="product-carousel">
                <div className='leftArrow' onClick={btnpressprev}>❰</div>

                <div className="product-container">
                    {data.map((item, index) => (
                        <Card key={index} image={item.image} title={item.title} />
                    ))}

                </div>
                <div className='rightArrow' onClick={btnpressnext}>❱</div>

            </div>
        </div>
    )
}

export default CategorySlider
