import React  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import CartoonImg from './../images/Cartoon_1.jpeg'

function Cartoon(){

    return(
        <div className=" text-center  " id="cartoon">




    

<div className="w-100 text-center mx-auto px-5">

    <s.SpacerLarge></s.SpacerLarge>
    <s.SpacerLarge></s.SpacerLarge>
    <s.SpacerLarge></s.SpacerLarge>
    <h1>CARTOON PROJECT</h1>

    <s.SpacerMedium></s.SpacerMedium>
<div className="row">

        <div className="col-12 col-lg-6 col-xxl-4 order-xxl-1 order-2  order-md-1 order-lg-1  align-middle cartoon-par">
       
                <p className="align-middle">

                        - Our pumpkins chose a comic book approach to combat the pluralistic ignorance that affects many customers in the post-sales process. This is a collection of comics that tell, in more depth, the story of our protagonists will be published during the pre-sale and post-sale campaign. Behind the scenes there is not only the disclosure of significant issues but also important rewards! The first season will feature pumpkins that are not very rare but hide incredible value. 
                        

                </p>
        </div>

            
            <div className="col-12 col-lg-6 order-1 order-md-2 order-lg-2 col-xxl-4 order-xxl-2 cartoon-par">
                    <div className="container-fluid">

                    <img src={CartoonImg} className="img-fluid" alt="" />
                  </div>
                    

            </div>






            <div className="col-12 col-lg-12 order-3 order-md-3 order-lg-3 col-xxl-4 order-xxl-3 align-middle cartoon-par">
            

                    <p className="">

                        - What happens to clients who "unfortunately" don't have a not-so-rare pumpkin?.. What a paradox.. Will they not be able to earn a profit? They sure will be!  how so?  You'll find out soon enough!
                        The value of each pumpkin posted will be included in the captions of the comics so watch out!

                    </p>
            </div>

<div className="col-12 order-4 cartoon-par">

<p>

- After the Mint phase, owners of pumpkins appearing in the collections will see a 3x-7x-10x -25x -50x-60x return on their initial investment, reaching and exceeding break-even.The comic campaign won't end immediately after the Mint phase, so sit back and enjoy the show. 

</p>
</div>



</div>






</div>


        </div>

    )
}

export default Cartoon;