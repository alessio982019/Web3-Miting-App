import React  from "react";
import '../styles/App.css'
import Mint from './mint.js'
import Bounce from 'react-reveal/Bounce';
function Home(){
    return(
        <div className="" id='home'>
               {/* <img src={Image_btm} className=' position-absolute' alt="" />  */}
                <Bounce right>
                <Mint/>
                </Bounce>
               
        </div>
    )
}
export default Home;