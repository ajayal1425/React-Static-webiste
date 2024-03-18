// import logo from './logo.svg';
// import './App.css';
import {Navbar} from './Component/Navbar/Navbar'
import {Slider} from './Component/Slider/Slider'
import {Info} from './Component/Quality/Quality'
import {Cartonetop} from './Component/Cartonetop/Cartonetop'
import {Cartone} from './Component/Cartone/Cartone'
import {Carttwotop} from './Component/Carttwotop/Carttwotop'
import {Carttwo} from './Component/Carttwo/Carttwo'
import {Salespanel} from './Component/Salespanel/Salespanel'
import {Posttop} from './Component/Postpagetop/Postpagetop'
import {Post} from './Component/Postpage/Post'
import {Review} from './Component/Review/Review'
import {Footer} from './Component/Footer/Footer'
import {Insta} from './Component/Insta/Insta'
import { Subscription } from './Component/Subscription/Subscription'

    let App=()=>{
      return (
        <div>
          <Navbar/>
          <Slider/>
          <Info/>
          <Cartonetop/>
          <Cartone/>
          <Carttwotop/>
          <Carttwo/>
          <Salespanel/>
          <Posttop/>
          <Post/>
          <Review/>
          <Subscription/>
          <Insta/>
          <Footer/>
        </div>
      )
    }

export default App;
