import React from 'react'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai";
import { Scrollbars } from "react-custom-scrollbars-2"
import Items from '../Components/Items';
import { Link } from "react-router-dom";
import { UseCart } from '../Components/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
    const { item, clearCart, totalItem, totalAmount } = UseCart()
    if (item.length === 0) {
        return (
            <div className={styles.body}>
                <header className={styles.header}>
                    <div className={styles.continueShopping}>
                        <AiOutlineArrowLeft className={styles.arrowIcon} />
                        <h3>Continue Shopping</h3>
                    </div>
                    <div className={styles.cartIcon}>
                        <AiOutlineShoppingCart className={styles.img} />
                        <p>{totalItem}</p>
                    </div>
                </header>

                <section className={styles.mainCartSection}>
                    <h1>Shopping Cart</h1>
                    <p className={styles.totalItems}>You have {totalItem} items in shopping cart</p>
                </section>

            </div>
        )
    }
    return (
        <div className={styles.body}>
            <header>
                <div className={styles.continueShopping}>
                    <AiOutlineArrowLeft className={styles.arrowIcon} />
                    <h3>Continue Shopping</h3>
                </div>
                <div className={styles.cartIcon}>
                    <AiOutlineShoppingCart className={styles.img} />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className={styles.mainCartSection}>
                <h1>Shopping Cart</h1>
                <p className={styles.totalItems}>You have {totalItem} items in shopping cart</p>

                <div className={styles.cartItems}>
                    <div className={styles.cartItemsContainer}>
                        <Scrollbars >
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id}  {...curItem} />
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>
                <div className={styles.cardTotal}>
                    <h3>Cart Total: {totalAmount} Rs</h3>
                    <button className={styles.button}><Link to="/checkout">Checkout</Link></button>
                    <button className={styles.clearCart} onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </div >
    )
}

export default Cart
