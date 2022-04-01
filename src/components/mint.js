import React, { useEffect, useState, useRef }  from "react";
import '../styles/App.css';
import * as s from "./../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { connect }  from './../redux/blockchain/blockchainActions';
import { fetchData } from "./../redux/data/dataActions";
function Mint(){

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });


    
    const claimNFTs = () => {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
    const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 5) {
        newMintAmount = 5;
      }
      setMintAmount(newMintAmount);
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);
  


    return(
        
        <div className="section justify-content-center text-center position-relative px-2 mx-1" >




          <div className="" id = 'minting'>


         

          
        {/* <h1>Mint</h1> */}
        <s.SpacerMedium></s.SpacerMedium>
      {/* <h5>Your current supply is {data.totalSupply} / {CONFIG.MAX_SUPPLY}</h5> */}
      <s.SpacerSmall></s.SpacerSmall>
      {/* <a class="btn btn-primary" target={"_blank"}  href={CONFIG.SCAN_LINK} role="button">{CONFIG.CONTRACT_ADDRESS}</a> */}



      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                <h1 id='soldout-text'style={{ textAlign: "center", color: "var(--accent-text)" }}>
                  SOLD OUT!
                </h1>

                {/* <h5 style={{ textAlign: "center", color: "var(--accent-text)" }}>
                  Check out collection on   <a className ="nav-item" target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </a>
                </h5> */}
                <s.SpacerSmall />
               
              </>
            ) : (
              <>
              <h1>Connect your wallet and mint our NFT!</h1>
                <h3 style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  
                  {/* {CONFIG.SYMBOL} */}
                  
                   {/* Cost:  {CONFIG.DISPLAY_COST}{" "} {CONFIG.NETWORK.SYMBOL} (  Excluding gas fees.) */}
                </h3>

                <s.SpacerXSmall />

                <h3
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                 
                </h3>


                <s.SpacerSmall></s.SpacerSmall>
                <s.SpacerSmall />

                {blockchain.account === "" ||  blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
               
                    <s.SpacerSmall />

                    <button type="button" class="btn btn-outline-light"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>Connect
                      
                      </button>
                    
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <h5
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </h5>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <h5
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </h5>
                    <s.SpacerMedium />

                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <button type="button" class="btn btn-outline-light"
                        
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >

                        
                      </button>
                      
                      <s.SpacerSmall></s.SpacerSmall>
                      <s.SpacerMedium />
                      <h3
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </h3>
                      <s.SpacerMedium />
                      <s.SpacerSmall></s.SpacerSmall>
                      <button type="button" class="btn btn-outline-light"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </button>
                      
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <button type="button" class="btn btn-outline-light"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                     
                    </s.Container>
                  </>
                )}
              </>
            )}


</div>

</div>


    )
}

export default Mint;