import React, {Component} from 'react';
import './Salespanel.scss'
export class Salespanel extends Component{
    render(){
        return(
            <div class="panel-container">
                <div class="panel-details">
                    <h2>10% off<br/><span>NEW YEAR<br/> SALE</span></h2>
                    <button>SHOP SALE</button>
                </div>
                <div class="sale-image">
                    <img src="https://themewagon.github.io/MiniStore/images/single-image1.png" style={{height:'600px',width:'750px'}} alt="default"/>
                </div>
            </div>
        )
    }
}