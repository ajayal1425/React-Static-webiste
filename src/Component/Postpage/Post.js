import React, {Component} from 'react';
import './Post.scss'

export class Post extends Component {
    render(){
        const Postdetails=[
            {
                Image:"https://themewagon.github.io/MiniStore/images/post-item1.jpg",
                Date:"FEB 22, 2023 - GADGETS",
                Heading:"GET SOME COOL GADGETS IN 2023"
        },
        {
                Image:"https://themewagon.github.io/MiniStore/images/post-item2.jpg",
                Date:"FEB 25, 2023 - TECHNOLOGY",
                Heading:"TECHNOLOGY HACK YOU WON'T GET"
        },
        {
                Image:"https://themewagon.github.io/MiniStore/images/post-item3.jpg",
                Date:"FEB 22, 2023 - CAMERA",
                Heading:"TOP 10 SMALL CAMERA IN THE WORLD"
        }
        ]

        return (
            <div class="Post-container">
               {Postdetails.map((val,i)=>{
                   return(
                       <div class="Post-inner" key={i}>
                            <div class="image">
                                <img src={val.Image} style={{height:'255px',width:'360px'}} alt="default"/>
                            </div>
                            <div class="date">
                                <span>{val.Date}</span>
                            </div>
                            <div class="heading">
                                <a href="#"><p>{val.Heading}</p></a>
                            </div>
                       </div>
                       )
               })}
            </div>
        )
    }
}