import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
function Opensea(){
    return(
        <div className="text-center" id="opensea">
            
<h1>Check our NFTs on OpenSea</h1>
<s.SpacerXXXL></s.SpacerXXXL>
<iframe src='https://testnets.opensea.io/category/opensea-creature?embed=true'
        width='100%'
        height='100%'
        frameborder='0'
        allowfullscreen></iframe>
        </div>
    )
}
export default Opensea;