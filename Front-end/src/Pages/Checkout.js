import React, { useState } from 'react'
import classes from "./CheckOut.module.css"
import { UseCart } from '../Components/CartContext';
import axios from 'axios';
const Checkout = () => {
    const { totalAmount } = UseCart()
    const Delivery = 500;
    const totalPayment = totalAmount + Delivery
    const [values, setValues] = useState({
        fname: "",
        email: "",
        amount: totalPayment,
    });

    console.log(values)

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const payment = () => {
        axios.get("http://localhost:9002/paywithpaytm", values)
            .then(res => {
                alert(res.data.message)
            })
    }





    return (
        <div className={classes.main}>
            <div className={classes.left}>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>
                            <i className="fas fa-shipping-fast"></i>
                            Shipping Details
                        </h1>
                        <form action="" onSubmit={handleSubmit} className={classes.form}>
                            <div className={classes.name}>
                                <div>
                                    <label htmlFor="fname">First</label>
                                    <input type="text" name="fname" onChange={onChange} />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" onChange={onChange} />
                                </div>
                            </div>
                            <div className={classes.street}>
                                <label htmlFor="name">Street</label>
                                <input type="text" name="address" />
                            </div>
                            <div className={classes.addressInfo}>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" />
                                </div>
                                <div>
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" />
                                </div>
                                <div>
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" name="zip" />
                                </div>
                            </div>

                            <button className={classes.btns} onClick={payment}>Purchase</button>
                            <button className={classes.btns}>Back to cart</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div>
                    <h1>Order Summery</h1>
                    <p>Sub total: {totalAmount}</p>
                    <p>Delivery Chargers: {Delivery}</p>
                    <hr />
                    <p>Total: {totalPayment}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout
