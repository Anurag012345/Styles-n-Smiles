import React from 'react'
import "./Card.css"
const Card = ({ image, title }) => {
    return (
        <div className='mycard'>
            <img src={image} alt="" />
            <h2>{title}</h2>
        </div>
    )
}

export default Card
