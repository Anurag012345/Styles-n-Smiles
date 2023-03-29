import React, { useState } from 'react'
import classes from "./Prices.module.css"
import AppointmentForm from "../Components/Appointment"
const Prices = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div>
            <div className={classes.heading}>
                <h1 className={classes.heading}> Our Prices</h1>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Facial Services</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Papaya</td>
                            <td>&#8377; 900</td>
                            <td><button onClick={() => setShowForm(true)}>Book Appointment</button>
                                {showForm && <AppointmentForm />}</td>
                        </tr>
                        <tr>
                            <td>Herbline</td>
                            <td>&#8377; 1000</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Lotus Whiteing</td>
                            <td>&#8377; 1200 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                        <tr>
                            <td>Lotus Bridal Glow</td>
                            <td>&#8377; 1300</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>Lotus Diamond</td>
                            <td>&#8377; 1400</td>
                            <td>Row 5, Column 3</td>
                        </tr>
                        <tr>
                            <td>Lotus Gold</td>
                            <td>&#8377; 1500</td>
                            <td>Row 6, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Massage</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Scrub</td>
                            <td>&#8377; 200</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Fruit</td>
                            <td>&#8377; 300</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Chocalate</td>
                            <td>&#8377; 400 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                        <tr>
                            <td>Papaya</td>
                            <td>&#8377; 500</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Cutting</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Barbar</td>
                            <td>&#8377; 50 /100</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Philip</td>
                            <td>&#8377; 50</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Lazer</td>
                            <td>&#8377; 50 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                        <tr>
                            <td>Baby Cutting</td>
                            <td>&#8377; 100</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>U Shape</td>
                            <td>&#8377; 100</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Lazer</td>
                            <td>&#8377; 250</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>Hair Wash</td>
                            <td>&#8377; 300</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>hair Color</td>
                            <td>&#8377; 500</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>Keratin</td>
                            <td>&#8377; 2000</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                        <tr>
                            <td>Smoothing</td>
                            <td>&#8377; 3000 (Start)</td>
                            <td>Row 4, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Spa</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Keratin</td>
                            <td>&#8377; 600</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Matrix Spa</td>
                            <td>&#8377; 800</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>L'Oreal</td>
                            <td>&#8377; 1000 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Waxing</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Upper Lips Wax</td>
                            <td>&#8377; 30</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Face Wax</td>
                            <td>&#8377; 200</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Under Arms </td>
                            <td>&#8377; 60 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Back</td>
                            <td>&#8377; 450</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Legs</td>
                            <td>&#8377; 450</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Body </td>
                            <td>&#8377; 1500 </td>
                            <td>Row 3, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>D-Ten & Massage</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Face</td>
                            <td>&#8377; 200</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Back</td>
                            <td>&#8377; 400</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Full Foot</td>
                            <td>&#8377; 200</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Manicure & Padicure</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Scrub</td>
                            <td>&#8377; 300</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Scrub + Cream</td>
                            <td>&#8377; 500</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>V.L.C.C</td>
                            <td>&#8377; 600</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Scrub,Cream,Gel,Pack,Bleach</td>
                            <td>&#8377; 800</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.service}>
                <h3 className={classes.ServiceName}>Bridal</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Book Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bridal Mahandi</td>
                            <td>&#8377; 3500</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Mehandi Makeup</td>
                            <td>&#8377; 1500</td>
                            <td>Row 1, Column 3</td>
                        </tr>
                        <tr>
                            <td>Bridal Makeup</td>
                            <td>&#8377; 8000</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Party Makeup</td>
                            <td>&#8377; 2000</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                        <tr>
                            <td>Hair Styling</td>
                            <td>&#8377; 300 (Start)</td>
                            <td>Row 2, Column 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Prices
