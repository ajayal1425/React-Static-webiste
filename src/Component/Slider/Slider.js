import React from 'react'
import './Slider.scss'

export let Slider=()=>{
    return (
        <div class="slider-container">
            <div class="slider-1">
                <h3 class="slider-panel">YOUR<br/>PRODUCTS ARE<br/>GREAT.</h3>
                <button>SHOP PRODUCT</button>
            </div>
            <div class="slider-2">
                <img src="https://themewagon.github.io/MiniStore/images/banner-image.png" style={{width:'640px',height:'640px'}} alt="slider" />
            </div>
        </div>
    )
}