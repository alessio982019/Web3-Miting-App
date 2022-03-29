import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import Nft1 from './../images/14.png'
import Nft2 from './../images/34.png'
import Nft3 from './../images/40.png'
import Nft4 from './../images/42.png'
import Nft5 from './../images/57.png'
import Nft6 from './../images/64.png'
import Nft7 from './../images/74.png'
import Nft8 from './../images/94.png'





import Slide from 'react-reveal/Slide';
function About(){

    
    let about = " Our friendly neighbourhood pumpkins  are algorithmically generated,non-fungible tokens, also known as an 'NFT' There is 8888 different fighting pumpkins and each pumpkin is totally genuine. GreenGang Pumpkins were generated from a smart contract using innumerable hand drawn traits. GreenGang Pumpkins are minted, stored and traded on the Ethereum blockchain."
    let vision= "Let's open the dances with a fair point: financial opportunities are well known to all, but what about opportunities for personal growth? We are a group of young skateboarders from the decentralized world who philosophically see pumpkins as a reflection of society. What is the purpose of skateboarding? The skateboard is for moving quickly. A tool through which one can explore the world faster. The plants represent the possibility of growing together. The various traits we have created represent the beauty of diversity. In their incredible journey, the pumpkins will grow through the experience and advice of other pumpkins around the world.  The metaverse is a window to the future, but let's not forget that the world outside is waiting for our hand.  We want to be part of progress with good goals. Let's do it hand in hand. Together!"
    let genesis = "On a suffering planet like Earth an army of silly pumpkins lost many comrades to the forces of nature because of their laziness. It was a bloody duel that threw a few pumpkins on all sides, creating confusion.  Fortunately, a small garrison of 8888 gourds was not punished by the Environmental Forces, thanks to their genuine capacity for rationalisation. The Environmental Forces donated part of their souls and a phantasmagorical skateboard to easily find their missing comrades.  Each platoon member has a specific skill, which cannot be sufficient without synergy with other skills. The pumpkins need to find each other and create a strong ecological, avant-garde empire. In their adventure they have decided to contemplate the most daring of characters... YOU! Try changing the plot if you don't want to be the next lost soul in the wasteland of pollution.Do you want to be the villain or the superhero? At the end of the story maybe you will be both..."
    let contentText = "about";

    function aboutText(e) {
      
        console.log('The link was clicked.');
        contentText = "about";
      }
      function visionText(e) {
       
        console.log('The link was clicked.');
        contentText = "vision";
      }
      function genesisText(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        contentText = "genesis";
      }


    return(


        <div className="text-center w-100 mx-auto " id="about">

                        <div className="w-100 text-center mx-auto">
                                <Slide left>
                                <h1>Welcome to GreenGang Pumpkins</h1>
                                </Slide>
                                
                               
                                <s.SpacerXXL></s.SpacerXXL>
                                <Slide right>
                                <div class="slider-cont">     
                                <div class="slider mx-auto">
                                <span style={{"--i":1}}>  <img src={Nft1} alt="" /> </span>
                                <span style={{"--i":2}}>  <img src={Nft2} alt="" /> </span>
                                <span style={{"--i":3}}>  <img src={Nft3} alt="" /> </span>
                                <span style={{"--i":4}}>  <img src={Nft4} alt="" /> </span>
                                <span style={{"--i":5}}>  <img src={Nft5} alt="" /> </span>
                                <span style={{"--i":6}}>  <img src={Nft6} alt="" /> </span>
                                <span style={{"--i":7}}>  <img src={Nft7} alt="" /> </span>
                                <span style={{"--i":8}}>  <img src={Nft8} alt="" /> </span>
                                </div>
                              </div>
                              </Slide>

                              <s.SpacerXXL></s.SpacerXXL>
                              <s.SpacerXXL></s.SpacerXXL>
                              {/* <h1>About</h1>
                              <Slide left>
                              <p>

Our friendly neighbourhood pumpkins  are algorithmically generated, non-fungible tokens, also known as an "NFT." There is 8888 different fighting pumpkins and each pumpkin is totally genuine. GreenGang Pumpkins . GGP are minted, stored and traded on the Ethereum Blockchain. */}
{/* </p> */}
                              {/* </Slide> */}
                                
















                            </div>

        

        </div> 

    )
}

export default About;