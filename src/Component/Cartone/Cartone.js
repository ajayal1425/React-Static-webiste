import React from 'react'
import './Cartone.scss'
export const Cartone=()=>{
    const Cartonedetail=[
        {
            Image:"https://themewagon.github.io/MiniStore/images/product-item1.jpg",
            Name:"IPHONE 10",
            Price:980,
        },
        {
            Image:"https://themewagon.github.io/MiniStore/images/product-item2.jpg",
            Name:"IPHONE 11",
            Price:1100,
        },
         {
            Image:"https://themewagon.github.io/MiniStore/images/product-item3.jpg",
            Name:"IPHONE 8",
            Price:980,
        },
         {
            Image:"https://themewagon.github.io/MiniStore/images/product-item4.jpg",
            Name:"IPHONE 13",
            Price:1500,
        }]

        return(
            <div class="Cartone-sect">
                {Cartonedetail.map((val,i)=>{
                    return(
                            <div class="Cartone-inner" key={i}>
                            <div>
                                <img src={val.Image} style={{width:'270px',height:'370px'}} alt="default"/>
                            </div>
                            <div class="Cart-detail">
                                <div class="Cartone-name">
                                    <a href="#">$ {val.Name}</a>
                                </div>
                                <div class="Cartone-price">
                                    <span>$ {val.Price}</span>
                                </div>
                            </div>
                            </div>
                    )
                })}
            </div>
        )
}
