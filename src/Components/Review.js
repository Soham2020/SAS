import React from "react";
import './Review.css';

export default function Review () {
    return (
        <>
            <h3 className="header">Review</h3>
            <div className="review">
                <div className="review__container">
                    <h4>Good</h4>
                    <p>
                        Very good product
                    </p>
                </div>
                <div className="review__container">
                    <h4>Good</h4>
                    <p>Very good product</p>
                </div>
            </div>
        </>
    )
}