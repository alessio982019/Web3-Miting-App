import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import Nft1 from './../images/About-Text/1.png'
import Nft2 from './../images/About-Text/2.png'
import Nft3 from './../images/About-Text/3.png'
import Nft4 from './../images/About-Text/4.png'
import Nft5 from './../images/About-Text/5.png'
import Nft6 from './../images/About-Text/6.png'
import Nft7 from './../images/About-Text/7.png'
import Nft8 from './../images/About-Text/8.png'
import Nft9 from './../images/About-Text/9.png'
import Nft10 from './../images/About-Text/10.png'
import Nft11 from './../images/About-Text/11.png'
import Nft12 from './../images/About-Text/12.png'
import Nft13 from './../images/About-Text/13.png'
import Nft14 from './../images/About-Text/14.png'
import Nft15 from './../images/About-Text/15.png'
import Nft16 from './../images/About-Text/16.png'
import Slide from 'react-reveal/Slide';
function AboutNew(){
    return(
     
        <div className="text-center w-100 mx-auto position-relative align-middle" id="about-new">
        <div className="w-100 position-absolute z-10 py-5 " id="about-text">
            <h1 className="py-5">ABOUT</h1>
            <p className="align-middle">Our friendly neighbourhood pumpkins  are algorithmically generated, non-fungible tokens, also known as an "NFT." There are 8888 different fighting pumpkins and each pumpkin is totally genuine. GGP are minted, stored and traded on the Ethereum Blockchain.
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
                <img src={Nft9} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft10} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft11} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft12} className = "w-100" alt="" />
            </div>
        </div>
        <div className="row"id='about-4'>
            <div className="col-6 col-sm-6 col-lg-3">
                <img src={Nft13} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft14} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft15} className = "w-100" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
            <img src={Nft16} className = "w-100" alt="" />
            </div>
        </div>
        {/* <div className="row" id='about-5'>
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
        </div> */}
        </div>
    
        
          
  
        
        </div> 
    )
}
export default AboutNew;