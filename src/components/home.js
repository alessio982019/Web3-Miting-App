import React  from "react";
import '../styles/App.css'
import Mint from './mint.js'
import Bounce from 'react-reveal/Bounce';
function Home(){
    return(
        <div className="" id='home'>
               
                <Bounce right>
                <Mint/>
                </Bounce>
               
        </div>
    )
}
export default Home;