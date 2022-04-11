import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import MATT from './../images/Team/MATT.jpeg'
import ALEXEI from './../images/Team/ALEXEI.jpg'
import ALEKSY from './../images/Team/ALEKSY.jpg'
import SIMON from './../images/Team/SIMON.jpeg'
import ADRI from './../images/Team/ADRI.jpeg'
function Team2(){
    return(
        <div className=" text-center mx-auto px-4" id="team2">
       <h1>Team</h1>
        <div className="row justify-content-around" id='team-flippers'>

            <div className="col-12 col-lg-3 ">
                <img src={MATT} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-3 ">
            <img src={MATT} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-3 ">
            <img src={MATT} alt="" className="img-fluid" />
            </div>
    


        <div className="col-12 col-12 col-lg-3 ">
        <img src={MATT} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-12 col-lg-3">
        <img src={MATT} alt="" className="img-fluid" />
        </div>

        </div>

        </div>
    )
}
export default Team2;