import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import Nft1 from './../images/1.png'
import Nft2 from './../images/4.png'
import Nft3 from './../images/8.png'
import Nft4 from './../images/87.png'
import Nft5 from './../images/92.png'
import Nft6 from './../images/94.png'
import Nft7 from './../images/95.png'
import Nft8 from './../images/53.png'

import Slide from 'react-reveal/Slide';
function AboutNew(){



    return(

     
        <div className="text-center w-100 mx-auto position-relative align-middle" id="about-new">

        <div className="w-100 position-absolute z-10 py-5 " id="about-text">


            <h1 className="py-5">ABOUT</h1>
            <p>Our friendly neighbourhood pumpkins  are algorithmically generated, non-fungible tokens, also known as an "NFT." There is 8888 different fighting pumpkins and each pumpkin is totally genuine. GreenGang Pumpkins . GGP are minted, stored and traded on the Ethereum Blockchain.
            Our vision focuses on one crucial point: financial opportunities are well known to all, but what about opportunities for personal growth? We are a group of young skateboarders from the decentralized world who philosophically see pumpkins as a reflection of society. 
What is the purpose of skateboarding? The skateboard is for moving quickly. A tool through which one can explore the world faster.  
  The plants represent the possibility of growing together. 
The various traits we have created represent the beauty of diversity. In their incredible journey, the pumpkins will grow through the experience and advice of other pumpkins around the world.  The metaverse is a window to the future, but let's not forget that the world outside is waiting for our hand.  We want to be part of progress with good goals. Let's do it hand in hand. Together! 

            </p>
           
        </div>
        


        <div className="position-relative" id='about-background'>


        <div className="row"id='about-1'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft1} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft2} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft3} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft4} className = "w-100" alt="" />
            </div>
        </div>


        <div className="row"id='about-2'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft5} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft6} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft7} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft8} className = "w-100" alt="" />
            </div>
        </div>
        <div className="row"id='about-3'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft5} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft6} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft7} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft8} className = "w-100" alt="" />
            </div>
        </div>

        <div className="row"id='about-4'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft5} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft6} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft7} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft8} className = "w-100" alt="" />
            </div>
        </div>
        <div className="row" id='about-5'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft5} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft6} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft7} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft8} className = "w-100" alt="" />
            </div>
        </div>



        </div>


    
        
          
  



        

        </div> 

    )
}

export default AboutNew;