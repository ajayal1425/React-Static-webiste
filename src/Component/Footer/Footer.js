import React from 'react'
import './Footer.scss'
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

export  const Footer=()=>{
    return (
        <div class="footer-container">
            <div class="footer-content">
                <div>
                    <img src="https://themewagon.github.io/MiniStore/images/main-logo.png" style={{height:'48px', width:'150px'}} alt="default" />
                </div>
                <div class="content">
                    <p>Nisi, purus vitae, ultrices nunc. Sit<br/> ac sit suscipit hendrerit. Gravida<br/> massa volutpat aenean odio erat <br/>nullam fringilla.</p>
                </div>
                <div class="social-icons">
                    <div>
                       <a href="#"> <SlSocialTwitter /></a>
                    </div>
                    <div>
                        <a href="#"><SlSocialFacebook /></a>
                    </div>
                    <div>
                        <a href="#"><SlSocialInstagram /></a>
                    </div>
                    <div>
                        <a href="#"><TiSocialYoutube /></a>
                    </div>
                    <div>
                        <a href="#"><TiSocialLinkedin /></a>
                    </div>
                </div>
            </div>
            <div >
                <div class="footer2-head">
                    <p>QUICK LINKS</p>
                </div>
                <div class="footer-list">
                <div>
                    <p><a href="#">HOME</a></p>
                </div>
                 <div>
                    <p><a href="#">ABOUT</a></p>
                </div>
                 <div>
                    <p><a href="#">SHOP</a></p>
                </div>
                 <div>
                    <p><a href="#">BLOGS</a></p>
                </div>
                 <div>
                    <p><a href="#">CONTACT</a></p>
                </div>
                </div>
            </div>
            <div >
                <div class="footer2-head">
                    <p>HELP &amp; INFO HELP</p>
                </div>
                <div class="footer-list">
                <div>
                    <p><a href="#">TRACK YOUR ORDER</a></p>
                </div>
                 <div>
                    <p><a href="#">RETURNS POLICIES</a></p>
                </div>
                 <div>
                    <p><a href="#">SHIPPING + DELIVERY</a></p>
                </div>
                 <div>
                    <p><a href="#">CONTACT US</a></p>
                </div>
                 <div>
                    <p><a href="#">FAQS</a></p>
                </div>
                </div>
            </div>
            <div >
                <div class="footer2-head">
                    <p>CONTACT US</p>
                </div>
                <div class="last-footer">
                    <p>Do you have any queries or<br/> suggestions?<span><a href="#"> yourinfo@gmail.com</a></span></p>
                </div>
                <div  class="last-footer">
                    <p>If you need support? Just give us a<br/> call. <span><a href="#">+55 111 222 333 44</a></span></p>
                </div>

            </div>
        </div>
    )
}