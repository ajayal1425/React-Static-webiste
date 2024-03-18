import React, {Component} from 'react';
import './Subscription.scss'

export class Subscription extends Component{
    render(){
        return (
            <div class="subscription-container">
                <div class="sub-title">
                    <h3>SUBSCRIBE US NOW</h3>
                    <p>Get latest news, updates and deals directly mailed to your inbox.</p>
                </div>
                <div class="sub-input">
                    <input type="text" placeholder="Your email address here"></input>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        )
    }
}