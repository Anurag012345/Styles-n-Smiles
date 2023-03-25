import React from 'react';
import styles from './SliderCard.module.css';

const ProductSliderCard = (props) => {
    const { title, img, price, description } = props;

    return (
        <div className={styles.card}>
            <img src={img} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>&#8377;{price}</p>
                <button className={styles.button}>Buy Now</button>
                <button className={styles.button}>View More</button>

            </div>
        </div>
    );
};

export default ProductSliderCard;
