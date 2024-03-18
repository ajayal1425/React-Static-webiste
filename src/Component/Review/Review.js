import React from 'react'
import './Review.scss'
import { FaQuoteRight } from "react-icons/fa";

export const Review=()=>{
    return(
        <div class="review-container">
            <div class="review-icon">
                <span><FaQuoteRight /></span>
            </div>
            <div class="review">
                <p>"Tempus oncu enim pellentesque este pretium in neque, elit<br/> morbi sagittis lorem habi mattis Pellentesque pretium feugiat<br/> vel morbi suspen dise sagittis lorem habi tasse morbi."</p>
            </div>
            <div class="reviewer-name">
                <p class="star">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                <p class="reviewer">EMMA CHAMPERLIN</p>
            </div>
        </div>
    )
}