import React from 'react'
import './Insta.scss'

export const Insta=()=>{
    return(
        <div class="insta-container">
            <div class="insta-head">
                <p>SHOP OUR INSTA</p>
            </div>
            <div class="insta-img">
                <div class="img">
                    <img src="https://themewagon.github.io/MiniStore/images/insta-item1.jpg" style={{height:'255px', width:'216px'}} alt="default"/>
                </div>
                <div class="img">
                    <img src="https://themewagon.github.io/MiniStore/images/product-item7.jpg" style={{height:'255px', width:'216px'}} alt="default"/>
                </div>
                <div class="img">
                    <img src="https://themewagon.github.io/MiniStore/images/single-image1.png" style={{height:'255px', width:'216px'}} alt="default"/>
                </div>
                <div class="img">
                    <img src="https://themewagon.github.io/MiniStore/images/post-item2.jpg" style={{height:'255px', width:'216px'}} alt="default"/>
                </div>
                <div class="img">
                    <img src="https://themewagon.github.io/MiniStore/images/post-item3.jpg" style={{height:'255px', width:'216px'}} alt="default"/>
                </div>
            </div>      
        </div>
    )
}