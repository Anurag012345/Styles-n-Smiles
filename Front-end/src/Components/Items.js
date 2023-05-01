import React from 'react'
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { UseCart } from './CartContext';
const Items = ({ id, description, title, img, price, quantity, }) => {

    const { removeItem, increment, decrement } = UseCart()
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <FaMinus className='minus' onClick={() => decrement(id)} />
                    <input type="text" placeholder={quantity} />
                    <FaPlus className='add' onClick={() => { increment(id) }} />
                </div>
                <div className='price'>
                    <h3>{price} Rs</h3>
                </div>
                <div className='remove-item'>
                    <FaTrashAlt className='fa fa-trash-alt remove' onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items
