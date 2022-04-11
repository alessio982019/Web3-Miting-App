import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import MATT from './../images/Team/MATT.jpeg'
import ALEXEI from './../images/Team/ALEXEI.jpg'
import ALEKSY from './../images/Team/ALEKSY.jpg'
import SIMON from './../images/Team/SIMON.jpeg'
import ADRI from './../images/Team/ADRI.jpeg'
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
      <img src={ALEXEI} alt="Paris"/>
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
      <img src={MATT} alt="Paris"/>
    </div>
    <div className="flip-box-back">
      
      <p>Cryptonaut, Blockchain and nature lover. Marketing and community manager, playful collaborator, crazy dreamer, sociology expert. </p>
    </div>
  </div>
</div>
<div className="flip-box">
<h2>ALEKSY</h2>
  <div className="flip-box-inner">
  
    <div className="flip-box-front">
      <img src={ALEKSY} alt="Paris"/>
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
<h2>SIMON</h2>
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img src={SIMON} alt="Paris"/>
    </div>
    <div className="flip-box-back">
      
      <p>Incredible artist with a golden touch, a lifelong lover of the world of comics. Illustrator and Cartoonist. He decided to interact with GreenGang Pumpkins to create a truly formidable project.</p>
    </div>
  </div>
</div>
<div className="flip-box ">
<h2>ADRI</h2>
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img src={ADRI} alt="Paris"/>
    </div>
    <div className="flip-box-back">
      
      <p>Our stunning genius in digital compositing, lighting  and filmmaking is the driving force behind this project. His excellent preparation can be found in such films as 'Being the Ricardos’ , 'Ambulance,'Lansky'... and many others. 
Artist, Nature lover, friendly co-worker and creator of the 3D content. </p>
    </div>
  </div>
</div>
</div>

</div>
        
        </div>
    )
}
export default Team;