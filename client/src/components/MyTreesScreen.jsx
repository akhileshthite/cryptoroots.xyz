import React from "react";
import { useState, useEffect } from "react";

function MyTreesScreen({web3, connectWallet, walletStatus, network, cryptoRootsContract, isConnected, accountAddress}) {
  const [id1Owned, setid1Owned] = useState(0);
  const [id2Owned, setid2Owned] = useState(0);
  const [id3Owned, setid3Owned] = useState(0);
  const [id4Owned, setid4Owned] = useState(0);
  const [id5Owned, setid5Owned] = useState(0);

  // Get balance of each token ID from the user's account.
  if(isConnected){
    try{
      cryptoRootsContract.methods.balanceOf(accountAddress, 1).call().then( token => { return setid1Owned(token) })
      cryptoRootsContract.methods.balanceOf(accountAddress, 2).call().then( token => { return setid2Owned(token) })
      cryptoRootsContract.methods.balanceOf(accountAddress, 3).call().then( token => { return setid3Owned(token) })
      cryptoRootsContract.methods.balanceOf(accountAddress, 4).call().then( token => { return setid4Owned(token) })
      cryptoRootsContract.methods.balanceOf(accountAddress, 5).call().then( token => { return setid5Owned(token) })
    } 
    catch(error){
      console.log(error)
    }
  }

  // const COVALENT_KEY = 'ckey_e6e82169afa4494ba3b64eb1045'
  // const covalentApi = `https://api.covalenthq.com/v1/${network}/tokens/${network.address}/nft_metadata/1/?key=${COVALENT_KEY}`
  // console.log(covalentApi)
  // const response = await fetch(covalentApi).then(response => {return response.json()})
  // console.log(response)

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-12">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-4">{accountAddress}</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Collected Badges</h1>
        </div>
        {isConnected ? "" :
        <center>
          <button type="button" onClick={connectWallet} className="flex mt-4 relative px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">Connect wallet</span>
          </button>
          <p className="text-red-500 text-xs mt-4">{walletStatus}</p>
        </center>
        }
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-80 md:h-36 w-full object-cover object-center"
                  src="https://ipfs.infura.io/ipfs/bafybeibcujv2ccaav4fz3m4omwtanz4mddmrvlnsxoy2zqpfrkqjqfdi4q/5_trees.png/"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    NFT BADGE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <a href={`https://testnets.opensea.io/assets/${network.address}`} className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200"></span>
                    <span className="text-gray-400 items-center text-md">
                      <div className="w-12 h-12 bg-yellow-200 rounded-full text-black text-center">{id1Owned}</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyTreesScreen;
