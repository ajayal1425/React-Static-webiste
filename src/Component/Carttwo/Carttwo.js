import React from 'react'
import './Carttwo.scss'
export const Carttwo=()=>{
    const Carttwodetail=[
        {
            Image:"https://themewagon.github.io/MiniStore/images/product-item6.jpg",
            Name:"PINK WATCH",
            Price:980,
        },
        {
            Image:"https://themewagon.github.io/MiniStore/images/product-item7.jpg",
            Name:"HEAVY WATCH",
            Price:780,
        },
         {
            Image:"https://themewagon.github.io/MiniStore/images/product-item8.jpg",
            Name:"SPOTTED WATCH",
            Price:880,
        },
         {
            Image:"https://themewagon.github.io/MiniStore/images/product-item9.jpg",
            Name:"BLACK WATCH",
            Price:650,
        }]

        return(
            <div class="Carttwo-sect">
                {Carttwodetail.map((val,i)=>{
                    return(
                            <div class="Carttwo-inner" key={i}>
                            <div>
                                <img src={val.Image} style={{width:'270px',height:'370px'}} alt="default"/>
                            </div>
                            <div class="Carttwo-detail">
                                <div class="Carttwo-name">
                                    <a href="#"> {val.Name}</a>
                                </div>
                                <div class="Carttwo-price">
                                    <span>$ {val.Price}</span>
                                </div>
                            </div>
                            </div>
                    )
                })}
            </div>
        )
}
