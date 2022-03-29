import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";

import Fade from 'react-reveal/Fade';

function Genesis(){

    return(
        <div className=" text-center  " id="genesis">




<s.SpacerXXXL></s.SpacerXXXL>
<Fade right big>  

<h1>GENESIS</h1>
</Fade>
<s.SpacerXXXL></s.SpacerXXXL>
<s.SpacerLarge></s.SpacerLarge>
<Fade left big>
<video class="video-fluid z-depth-1" autoPlay loop controls muted>

  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
</video>
</Fade>
<s.SpacerXXL></s.SpacerXXL>

 
        <div className="w-100  text-center mx-auto">
    



<s.SpacerSmall></s.SpacerSmall>
<Fade right big>
        <p className="">

        On a suffering planet like Earth an army of silly pumpkins lost many comrades to the forces of nature because of their laziness. It was a bloody duel that threw a few pumpkins on all sides, creating confusion.  Fortunately, a small garrison of 8888 gourds was not punished by the Environmental Forces, thanks to their genuine capacity for rationalisation.  
The Environmental Forces donated part of their souls and a phantasmagorical skateboard to easily find their missing comrades.  Each platoon member has a specific skill, which cannot be sufficient without synergy with other skills. The pumpkins need to find each other and create a strong ecological, avant-garde empire. 
In their adventure they have decided to contemplate the most daring of characters... YOU! Try changing the plot if you don't want to be the next lost soul in the wasteland of pollution.Do you want to be the villain or the superhero? 
At the end of the story maybe you will be both...


        </p>
        </Fade>


   

    

        </div>
        </div>

    )
}

export default Genesis;