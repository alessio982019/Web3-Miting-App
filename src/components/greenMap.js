import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import green_img from './../images/Greenmap1929X21604.png'
import Slide from 'react-reveal/Slide';
function GreenMap(){

    return(
        <div className=" w-100 position-relative" id="greenMap">



       

    

            


             <div className="  position-absolute justify-content-center" id='map'> 
             <h1 className="text-center">GREENMAP</h1>
            
             <Slide left>
                 <div className=" mr-auto px-1 pt-5  ">
                    
                    <h3>LEVEL 1 : The adventure begins!</h3>
                    <p>
                        <ul className="text-start">
                            <li>
                            The aim is to create a large greenhouse where we can grow blissfully. In this phase we will try to generate a healthy, branched stem that has to support all our power. 
                            </li>
                           
                            <li>
                            Start of the comic campaign.
                            </li>
                        </ul>
                    

                    </p>

                </div>
                </Slide>
                <Slide right>
                <div className="ml-auto px-1 pt-5">
                    
                    <h3>LEVEL II : Collaboration with Treedom</h3>
                    <p className="text-start">

                    This company already collaborates with realities such as Berlucchi, Timberland, Samsung, H&M… Their transparency in photographing and geolocating each tree planted reflects our green philosophy. Let's create our own GGP forest guys! We finance farmers who want to plant trees. Farmers receive from Treedom the know-how and technical support .We will donate 10k euros to plant trees in the world, giving life to this awesome goal and we will monitor the results together, feeling active in the community. 
                    <br></br>
                    Still curious? Visit their website!
                    </p>
                </div>
                </Slide>
                <Slide left>
                <div className=" mr-auto px-1 pt-5 ">
                    
                    <h3>LEVEL III</h3>
                    <p>
                        <ul className="text-start">
                            <li>
                            It's time to drop the right ingredients into the pockets of deserving pumpkins! Creation of a "community wallet" into which 5% of secondary market sales will go. Initial injection of liquidity by founders to revitalize the "flame" of the wallet. 
                            </li>
                           
                            <li>Social expansion through festivals, finalization of the comic book campaign.</li>
                            
                            <li>Let's brighten our family's spirit through more social media contests. </li>

                        </ul>
             
                    </p>

                </div>
                </Slide>
                <Slide right>
                <div className="ml-auto px-1 pt-5">
                    
                    <h3>LEVEL IV</h3>
                    <p>
                    <ul className="text-start">
                            <li>
                            End of the first comic book campaign: remuneration for the owners of characters: the prizes will amount to 40k euros.
                            </li>
                           
                            <li>Airdrop of  Nfts and prizes in Eth. via storytelling challenges. </li>
                            
                            <li>Supporting the best projects, carried out by holders, that have an environmental background. </li>

                        </ul>
                    </p>
                </div>
                </Slide>
                <Slide left>
                <div className=" mr-auto px-1 pt-5 ">
                    
                    <h3>LEVEL V</h3>
                    <p>
                    <ul className="text-start">
                            <li>
                            Second injection of liquidity into the community wallet. 
                            </li>
                            
                            <li>During the trek...some pumpkins develop a sense of rejection of good intentions. A new battle is upon us: We need the right armor to restore balance: Merchandising Development!</li>


                        </ul>
                    </p>

                </div>
                </Slide>
                <Slide right>
                <div className="ml-auto px-1 pt-5">
                    
                    <h3>FASE VI</h3>
                    <p>
                    <ul className="text-start">
                            <li>
                            The garrison has gathered! Euereka! 
                            </li>
                            
                            <li>
                            The alienation of some pumpkins leads to a new fleet of antagonists... a small collection of modified, polluting, and nasty pumpkinsExclusively in 3D and dedicated especially to holders.
                            </li>
                            <li>
                            Implementation of a Greenmap 2.0= Exciting news!
                            </li>
                            <li>
                            Realization of a new comic book campaign for this new chapter. New pay plan for the characters in the new episode.
                            </li>
                            <li>
                            We need a secret greenhouse where we can prepare a countermove, expand our knowledge, collaborate, all together.... Can you imagine what it would be like to host experts in the metaverse?
                            </li>

                        </ul>
                    </p>
                </div>
                </Slide>
                <Slide left>
                <div className=" px-1 pt-5" id='season-two'>
                    
                    <h3>SEASON II</h3>
                    <p>
                    A wise old uncle would say: with great power comes great responsibility... After much effort, it's time to preserve the work you've done!!.. But wait...Have you thought about what the Forces of Nature look like?..That's all we can say...

                    </p>
                </div>
                </Slide>
     
            

           
            </div>


            
            <div>
                <img src={green_img} className = '' alt="" />
            </div>
            </div>
 

    )
}

export default GreenMap;