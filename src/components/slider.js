import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import Nft1 from './../images/Slider/1.png'
import Nft2 from './../images/Slider/2.png'
import Nft3 from './../images/Slider/3.png'
import Nft4 from './../images/Slider/4.png'
import Nft5 from './../images/Slider/5.png'
import Nft6 from './../images/Slider/6.png'
import Nft7 from './../images/Slider/7.png'
import Nft8 from './../images/Slider/8.png'
import Nft9 from './../images/Slider/9.png'
import Nft10 from './../images/Slider/10.png'
import Nft11 from './../images/Slider/11.png'
import Nft12 from './../images/Slider/12.png'
import Nft13 from './../images/Slider/13.png'
import Nft14 from './../images/Slider/4.png'
import Nft15 from './../images/Slider/12.png'
import Nft16 from './../images/Slider/9.png'



function Slider(){



    return(

        <div className="w-100 " id='slider'>

            <div id="slider-shower">

            </div>
            <div className="position-relative">


          
            {/* <s.SpacerXXL />
            <s.SpacerXXL /> */}
            {/* <s.SpacerXXL /> */}
            <div class="slider-left">
            
                        <img src={Nft1} alt="" />
                        <img src={Nft2} alt="" />
                        <img src={Nft3} alt="" />
                        <img src={Nft4} alt="" />
                        <img src={Nft5} alt="" />
                        <img src={Nft6} alt="" />
                        <img src={Nft7} alt="" />
                        <img src={Nft8} alt="" />
                        <img src={Nft1} alt="" />
                        <img src={Nft2} alt="" />
                        <img src={Nft3} alt="" />
                        <img src={Nft4} alt="" />
                        <img src={Nft5} alt="" />
                        <img src={Nft6} alt="" />
                        <img src={Nft7} alt="" />
                        <img src={Nft8} alt="" />
            
                 
            </div>
            

            <div class="slider-right">
            
            <img src={Nft1} alt="" />
                        <img src={Nft9} alt="" />
                        <img src={Nft10} alt="" />
                        <img src={Nft11} alt="" />
                        <img src={Nft12} alt="" />
                        <img src={Nft13} alt="" />
                        <img src={Nft14} alt="" />
                        <img src={Nft15} alt="" />
                        <img src={Nft16} alt="" />
                        <img src={Nft9} alt="" />
                        <img src={Nft10} alt="" />
                        <img src={Nft11} alt="" />
                        <img src={Nft12} alt="" />
                        <img src={Nft13} alt="" />
                        <img src={Nft14} alt="" />
                        <img src={Nft15} alt="" />
                        <img src={Nft16} alt="" />
                    
     
</div>

</div>



           
        </div>
    )
}

export default Slider;