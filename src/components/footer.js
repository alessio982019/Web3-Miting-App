import React  from "react";
import '../styles/App.css';
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div class="w-100 d-flex justify-content-around" id='footer'>     
        <small>
         <Link to='/license'>
        
          @2022 Copyright
       
        </Link>
        </small>
        
        
        </div> 
    )
}
export default Footer;