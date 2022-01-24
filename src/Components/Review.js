import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Review.css';

export default function Review () {
    const [ feedback, setFeedback ] = useState([]);
    const getFeedback = async() => {
        const res = await axios.get('https://sas-rest-api.herokuapp.com/api/feedback/get')
        setFeedback(res.data);
    }
    useEffect(() => {
        getFeedback();
    }, [])
    return (
        <>
            <h3 className="header">Review</h3>
            <div className="review">
                {
                    feedback.map((item) => {
                        return (
                            <div className="review__container">
                                <h4>{item.name}</h4>
                                <p>
                                    {item.message}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}