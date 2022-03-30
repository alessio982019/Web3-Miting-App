import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import Nft1 from './../images/85.png'
import Nft2 from './../images/69.png'
import Nft3 from './../images/85.png'
import Nft4 from './../images/61.png'
import Nft5 from './../images/84.png'
function Team(){

    return(
        <div className=" text-center mx-auto " id="team">



        <div className="container-fluid text-center text-white py-5 " id='team'>
 
<h1>MEET THE GANG</h1>
<s.SpacerXXL></s.SpacerXXL>

<div className="container-fluid justify-content-around  " id='team-container'>

<div className="flip-box">
<h2>ALEXEI</h2>
  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft1} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      
      <p>Versatile and workaholic, the most valiant pumpkin. He is a professional agronomist who has been working for a long time in a german laboratory, trying to decrease fine dust pollution through moss.</p>
    </div>
  </div>


</div>

<div className="flip-box">
<h2>MATT</h2>
  <div className="flip-box-inner">
  
    <div className="flip-box-front">
      <img src={Nft2} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      
      <p>Cryptonaut, Blockchain and nature lover. Marketing and community manager, playful collaborator, crazy dreamer, sociology expert. </p>
    </div>
  </div>


</div>


<div className="flip-box">
<h2>ALEXISIO</h2>
  <div className="flip-box-inner">
  
    <div className="flip-box-front">
      <img src={Nft4} alt="Paris"/>
    </div>

    <div className="flip-box-back">
     
      <p>Developer and expert in DeFi, Solidity and Smart Contract. Essential was his experience in Poland, where he worked for many years in collaboration with important companies for the creation of software and bots. Needless to say, he is a nature lover. </p>
    </div>
  </div>


</div>



</div>

<s.SpacerXXL></s.SpacerXXL>

<div className="container-fluid justify-content-around second-team" id='team-container'>

<div className="flip-box ">
<h2>ADRI</h2>
  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft4} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      
      <p>Our stunning genius in digital compositing, lighting  and filmmaking was the driving force behind this project. His excellent preparation can be found in such films as 'Being the Ricardos’ , 'Ambulance,'Lansky'... and many others. 
Artist, Nature lover, friendly co-worker and creator of the 3D content. </p>
    </div>
  </div>


</div>

<div className="flip-box ">
<h2>SIMON</h2>
  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft5} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      
      <p>Incredible artist with a golden touch, creator of the comic book part. </p>
    </div>
  </div>


</div>

</div>


{/* <div className="container-fluid d-flex justify-content-between flip-container" >


<div className="flip-box">

  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft1} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      <h2>ALEXEI</h2>
      <p>Versatile and workaholic, the most valiant pumpkin. He is a professional agronomist who has been working for a long time in a german laboratory, trying to decrease fine dust pollution through moss.</p>
    </div>
  </div>


</div>

<div className="flip-box">

  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft2} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      <h2>MATT</h2>
      <p>Cryptonaut, Blockchain and nature lover. Marketing and community manager, playful collaborator, crazy dreamer, sociology expert. </p>
    </div>
  </div>


</div>

<div className="flip-box">

  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft3} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      <h2>ALEXISIO</h2>
      <p>Developer and expert in DeFi, Solidity and Smart Contract. Essential was his experience in Poland, where he worked for many years in collaboration with important companies for the creation of software and bots. Needless to say, he is a nature lover. </p>
    </div>
  </div>


</div>



</div>


<div className="container-fluid d-flex justify-content-center flip-container" >


<div className="flip-box mx-5">

  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft4} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      <h2>ADRI</h2>
      <p>Our stunning genius in digital compositing, lighting  and filmmaking was the driving force behind this project. His excellent preparation can be found in such films as 'Being the Ricardos’ , 'Ambulance,'Lansky'... and many others. 
Artist, Nature lover, friendly co-worker and creator of the 3D content. </p>
    </div>
  </div>


</div>
<s.SpacerXXXL></s.SpacerXXXL>
<div className="flip-box mx-5">

  <div className="flip-box-inner">

    <div className="flip-box-front">
      <img src={Nft5} alt="Paris"/>
    </div>

    <div className="flip-box-back">
      <h2>SIMON</h2>
      <p>Incredible artist with a golden touch, creator of the comic book part. </p>
    </div>
  </div>


</div>




</div> */}



</div>

        



        </div>

    )
}

export default Team;