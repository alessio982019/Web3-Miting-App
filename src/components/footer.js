import React  from "react";
import '../styles/App.css';

import { Link } from "react-router-dom";
import Nft from './../images/image 1.png'

function Footer(){


    return(



        <div class="w-100">     
         <Link to='/license'>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="">License</a>
        </li>
        </Link>



        </div> 

    )
}

export default Footer;