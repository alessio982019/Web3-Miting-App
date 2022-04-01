import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import useCollapse from 'react-collapsed';
import { Link } from "react-router-dom";
function Collapsible(props) {
    const config = {
        duration: 750,
        onExpandStart: () => {
            console.log('INFO: onExpandStart triggered.');
        },
        onExpandEnd: () => {
            console.log('INFO: onExpandEnd triggered.');
        },
        onCollapseStart: () => {
            console.log('INFO: onCollapseStart triggered.');
        },
        onCollapseEnd: () => {
            console.log('INFO: onCollapseEnd triggered.');
        }
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
    
    <div className="collapsible ">
        <s.SpacerLarge></s.SpacerLarge>
        <div className="header text-uppercase" {...getToggleProps()}>
         <h5>{props.title}             </h5>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
            <p>
            {props.answer}
            </p>
            
            </div>
        </div>
    </div>
    );
}

function FAQS(){

    return(
        <div className="text-center" id="faqs">

<div className="w-75 text-left mx-auto">

    <s.SpacerXXL></s.SpacerXXL>
<h1>FAQS</h1>
    
    <s.SpacerLarge></s.SpacerLarge>
<Collapsible title="What is NFT?" answer = 'NFT stands for a non-fungible token, which means it can neither be replaced nor interchanged because it has unique properties.' ></Collapsible>

<Collapsible title="What is the total supply?" answer = 'After the dramatic defeat against the forces of nature, only 8888 brave pumpkins remained. ' ></Collapsible>

<Collapsible title="Is there a Pre-sale? " answer = 'In our Discord channel you can join the Whitelist. Collectors who deserve a place will be able to buy (max. 5 x wallet) their characters at a lower price than the public sale. The pre-sale phase will be announced on the main communication channels such as Twitter, Discord, Instagram. It will be carried out 24 hours before the public sale. The exact date will be announced very soon. ' ></Collapsible>

<Collapsible title="What is the price of Mint and Presale?" answer = 'tba' ></Collapsible>

<Collapsible title="ARE SOME PUMPKINS MORE RARE THAN OTHERS?" answer = 'All the incredible pumpkins are different from each other. it is impossible to find two identical pumpkins. Some are rarer than others. Pay attention to the small differences that make your character more unique. The details make all the difference.' ></Collapsible>

<Collapsible title="Where can I interact with other members of the GGP universe?" answer = 'In the Discord channel.  In this channel collectors can interact and help each other to create an amazing community. We describe ourselves as a different project but the modus operandi is the same as other NFT realities. We will also be present on Twitter and Instagram, where news about the collection and our good intentions will be posted daily. ' ></Collapsible>

<Collapsible title="Why use the ethereum network if we want to promote environmental protection? " answer = 'We are aware of the Proof of Work situation. By monitoring the market and its evolution we are proud supporters of the transition to Ethereum 2.0 or "Consensus Layer", which will make Ethereum  more scalable, more secure and more sustainable.' ></Collapsible>

<Collapsible title="WHAT AM I ALLOWED TO DO WITH THE ART ASSOCIATED WITH MY NFT? " answer = 'Check our license!' ></Collapsible>

<p>





















    </p>

</div>


        </div>

    )
}

export default FAQS;