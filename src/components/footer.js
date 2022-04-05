import React  from "react";
import '../styles/App.css';

import { Link } from "react-router-dom";


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