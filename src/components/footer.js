import React  from "react";
import '../styles/App.css';

import { Link } from "react-router-dom";
import Nft from './../images/image 1.png'

function Footer(){


    return(



        <div class="w-100 d-flex justify-content-around" id='footer'>     
        <small>
         <Link to='/license'>
        
          @License
       
        </Link>
        </small>
        
        



        </div> 

    )
}

export default Footer;