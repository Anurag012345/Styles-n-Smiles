import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className='my-card'>
            <img className="card-image" src={props.img} alt="" />
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-sub-title'>{props.subtitle}</p>
            <p className='card-info'>{props.info}</p>
        </div>
    )
}

export default Card
