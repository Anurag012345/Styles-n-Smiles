import React, { useState } from 'react'
import classes from "./Appointment.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h2 className={classes.heading}>Book an Appointment</h2>
            <form>
                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className={classes.formGroup} >
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="gender">Gender: </label>
                        <select name="gender" id="gender" className="form-control" >
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control"
                            required
                        />
                    </div>

                </div>

                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="date">Date:</label>
                        <DatePicker
                            id='date'
                            selected={date}
                            onChange={(date) => setDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="form-control"
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="service">Service:
                        </label>
                        <select id="service" name="service" className="form-control" required>
                            <option>Select a service</option>
                            <optgroup label="Facial">
                                <option value="Herbaline">Herbaline</option>
                                <option value="Lotus Diamond">Lotus Diamond</option>
                                <option value="Lotus Gold">Lotus Gold</option>
                                <option value="Lotus White Glow">Lotus White Glow</option>
                            </optgroup>
                            <optgroup label="Spa">
                                <option value="Keratin">Keratin</option>
                                <option value="Matrix Spa">Matrix Spa</option>
                                <option value="Loreal Spa">Loreal Spa</option>
                            </optgroup>
                            <optgroup label="Wax">
                                <option value="Face wax">face wax</option>
                                <option value="Head wax">Head wax</option>
                                <option value="Full body wax">Full body wax</option>
                            </optgroup>
                            <optgroup label="Manicure-Pedicure">
                                <option value="Scrub">Scrub</option>
                                <option value="V.L.CC">V.L.CC</option>
                                <option value="Scrub + Cream">Scrub + Cream</option>
                            </optgroup>
                            <optgroup label="Bleach">
                                <option value="V.L.C Gold">V.L.C Gold</option>
                                <option value="V.L.C Diamond">V.L.C Diamond</option>
                                <option value="Fruit bleech">fruit bleech</option>
                            </optgroup>
                            <optgroup label="Massage">
                                <option value="Papaya">Papaya</option>
                                <option value="Lotus">Lotus</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Fruit">Fruit</option>
                            </optgroup>
                        </select>
                    </div>

                </div>

                <div className={classes.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control"></textarea>
                </div>
                <br />

                <button type="submit" className={classes.button}>Book Now</button>
            </form>
        </div>
    )
}

export default Appointment
