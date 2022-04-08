import React  from "react";
import '../styles/App.css';
import logo from './../images/Logo.png'
import Fade from 'react-reveal/Fade';
import Instagram from './../images/icons8-instagram-48.png'
import { Link } from "react-router-dom";
function Nav(){
    return(
      
<nav class="navbar navbar-expand-xl navbar-dark fixed">
  <div class="container-fluid">
  <a class="navbar-brand px-1" href="#" id='logo'>
  <img src={logo} class="d-inline-block align-top" alt=""/>
   
  
  </a>
  <a class="navbar-brand " href="#" id='logo-title'>
  GreenGang Pumpkins
  </a>
  
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto text-center">
        <Link to='/'>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        </Link>
        
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
       
        
        <li class="nav-item">
          <a class="nav-link " href="#team">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#greenMap">GreenMap</a>
        </li>
        <Link to='/cartoon'>
        <li class="nav-item">
          <a class="nav-link ">Cartoon</a>
        </li>
        </Link>
        <Link to='faqs'>
        <li class="nav-item">
          <a class="nav-link " href="#faqs">FAQ</a>
        </li>
        </Link>
        
       
        <li class="nav-item">
          <a class="nav-link " href="https://twitter.com/GGP_NFT" target="_blank"> <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/discord-logo.png"/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="https://instagram.com/greengangpumpkins?utm_medium=copy_link" target="_blank"><img src={Instagram}/></a>
        </li>
       
        
        
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Nav;