import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { BiAward } from "react-icons/bi";
import './Quality.scss'
export let Info=()=>{
let Infos=[
    {
         Icon:<IoCartOutline />,
         Heading:"FREE DELIVERY",
         Information:"Consectetur adipi elit lorem ipsum dolor sit amet."
},
    {
      Icon:<BiAward />,
      Heading:"QUALITY GUARANTEE",
      Information:"Dolor sit amet orem ipsu mcons ectetur adipi elit."
},
    {
        Icon:<MdOutlineLocalOffer />,
        Heading:"DAILY OFFERS",
        Information:"Amet consectetur adipi elit loreme ipsum dolor sit."
},
    {
        Icon:<MdSecurity />,
        Heading:"100% SECURE PAYMENT",
        Information:"Rem Lopsum dolor sit amet, consectetur adipi elit."
}
]
    return(
       <div class="info-container">
           {Infos.map((val,i)=>{
            return(
                <div class="info-details" key={i}>
                   <div class="info-icon">
                        <span>{val.Icon}</span>
                    </div>
                    <div class="info-data">
                        <div class="info-heading"><p>{val.Heading}</p></div>
                        <div class="info-informations"><p>{val.Information}</p></div>
                    </div>
                </div>
            )
           })}
        </div>
    )
}