import React, { useState } from 'react'
import classes from "./Appointment.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Multiselect from 'multiselect-react-dropdown';

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
                        <Multiselect
                            displayValue="key"
                            groupBy="cat"
                            // className="form-control"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Facial',
                                    key: 'Herbaline'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus Diamond'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus Gold'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus White Glow'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Keratin'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Matrix Spa'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Loreal Spa'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Face wax'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Head wax'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Full body wax'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'Scrub'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'V.L.CC'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'Scrub + Cream'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'V.L.C Gold'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'V.L.C Diamond'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'Fruit bleech'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Papaya'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Lotus'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Chocolate'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Fruit'
                                }
                            ]}
                            placeholder="Select Services"
                            style={{
                                chips: {
                                    background: 'black'
                                },
                                multiselectContainer: {
                                    color: 'Black'
                                },
                                searchBox: {
                                    backgroundColor: "white"
                                }
                            }}
                        />
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
