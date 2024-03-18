import React from 'react'
import Logo from '../Images/main-logo.png'
import { LiaSearchSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.scss'

export let Navbar=()=>{
    return(
        <div class="Nav-container">
            <div class="logo">
                <img src={Logo} style={{width:'143px',height:'45px'}} alt="logo" />
            </div>
            <div>
            <nav class="menu-bar">
                <ul class="menu">
                    <li><a href="#" class="active-class active">HOME</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">WATCHES</a></li>
                    <li><a href="#">SALE</a></li> 
                    <li><a href="#">BLOG</a></li> 
                    <li><a href="#">PAGES</a></li> 
                </ul>
            </nav>
            </div>
            <div class="menu-icon">
                <div>
                    <a href="#"><LiaSearchSolid /></a>
                </div>
                <div>
                    <a href="#"><CgProfile /></a>
                </div>
                <div>
                  <a href="#"><FaShoppingCart /></a>
                </div>
            </div>
        </div>
    )
}

