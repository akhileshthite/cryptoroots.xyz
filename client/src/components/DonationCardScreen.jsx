import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { totalSupply } from "../Stats";
import logo from "../images/logo_header.png";


function DonationCardScreen({web3, connectWallet, walletStatus, cryptoRootsContract, isConnected, accountAddress}) {
  const [trees, setTrees] = useState(0);
  const [claimingNft, setClaimingNft] = useState(false);
  // const [uri, setUri] = useState(undefined);
  const [nftImage, setNftImage] = useState(undefined);
  const [loadNftCard, setLoadNftCard] = useState(undefined);
  const [totSupply, setTotSupply] = useState(0);

  // Donation card contract methods
  async function handleData(e){
    // Prevent from loading the page.
    e.preventDefault();
    setLoadNftCard(!loadNftCard);
    // Get the number of trees and write the mint transaction.
    if (trees === '1') {
      await cryptoRootsContract.methods.mint(1, 1).send({ from: accountAddress, gas: 1500000, gasPrice: '80000000000', value: '1000000000000000000' });
      setClaimingNft(!claimingNft)
    }
    else if (trees === '2'){
      await cryptoRootsContract.methods.mint(2, 1).send({ from: accountAddress, gas: 1500000, gasPrice: '80000000000', value: '1000000000000000000' });
      setClaimingNft(!claimingNft)
    }
    else if (trees === '3'){
      await cryptoRootsContract.methods.mint(3, 1).send({ from: accountAddress, gas: 1500000, gasPrice: '80000000000', value: '1000000000000000000' });
      setClaimingNft(!claimingNft)
    }
    else if (trees === '4'){
      await cryptoRootsContract.methods.mint(4, 1).send({ from: accountAddress, gas: 1500000, gasPrice: '80000000000', value: '1000000000000000000' });
      setClaimingNft(!claimingNft)
    }
    else if (trees === '5'){
      await cryptoRootsContract.methods.mint(5, 1).send({ from: accountAddress, gas: 1500000, gasPrice: '80000000000', value: '1000000000000000000' });
      setClaimingNft(!claimingNft)
    }
    else {
      console.log("Invalid input! Please select the valid number of trees to donate.")
    }
    // Token URI with token ID (number of trees)
    const uri = await cryptoRootsContract.methods.uri(trees).call().then( nft => { return nft });
    // Replace ipfs:// with public gateway (very few browsers support ipfs://)
    const gatewayUri = uri.replace("ipfs://", "https://nftstorage.link/ipfs/");
    // Replace id with trees id.
    const idUri = gatewayUri.replace("{id}", trees)
    const response = await fetch(idUri)
    const metadata = await response.json();
    const imageUri = metadata.image;
    const nftStorageUri = imageUri.replace("ipfs://", "https://nftstorage.link/ipfs/");
    setNftImage(nftStorageUri);
  }

  // const prevCountRef = useRef();
  // useEffect(() => {
  //   prevCountRef.current = trees;
  //   // console.log(prevCountRef.current)
  // }, [trees]);

  //   const COVALENT_KEY = ''
  //   console.log(accountAddress)
  //   const url = `https://api.covalenthq.com/v1/${network}/address/${accountAddress}/balances_v2/?key=${COVALENT_KEY}`
  //   const response = await fetch(url)
  //   const responseJson = await response.json()
  //   console.log('Covalent balance response', responseJson)

  async function supply(){
    const sup = await cryptoRootsContract.methods.totalSupply(1).call().then( supply => { return supply });
    console.log(sup)
    const sup2 = await cryptoRootsContract.methods.totalSupply(2).call().then( supply => { return supply });
    console.log(sup2)
    let supplyaa = sup + sup2
    setTotSupply(supplyaa);
  }

  return (
      <div>
        <section className="donation-card-screen">
          {/* Header Logo */}
          <center>
            <img src={logo} alt="Header logo" width={275} className="py-6" />
          </center>
          {/* Stats */}
          <section className="text-gray-600 body-font">
            <div className="container px-16 py-6 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">0</h2>
                  <p className="leading-relaxed">Trees planted</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">0</h2>
                  <p className="leading-relaxed">Area covered / mt^2</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">0</h2>
                  <p className="leading-relaxed">CO2 reversed / year</p>
                </div>
              </div>
            </div>
          </section>
          {/* Donation card */}
          <center>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex-wrap -m-4">
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="border-2 border-gray-200 p-6 rounded-lg text-center shadow-lg" style={{backgroundColor: "#F7F8FC"}}>
                      {claimingNft ?
                      <>
                        <p className="text-green-500 text-lg">Thank you! 🎊</p>
                        <p className="text-gray-700 mt-2 text-sm">For making the world a better place to live :)<br/>Here's your NFT badge.</p>
                        <center>
                          <img className="rounded-md mt-4" width={200} src={nftImage} alt="NFT badge" />
                        </center>
                        <p className="text-gray-700 mt-4 text-sm">Find your badges on my trees page.</p>
                        <Link to="/mytreesscreen">
                          <button class="text-green-500 inline-flex items-center mt-4 md:mb-2 lg:mb-0">
                            My trees page
                            <svg
                              class="w-4 h-4 ml-2"
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
                          </button>
                        </Link>
                      </>
                      :
                      <>
                      <h2 className="text-lg text-gray-900 font-medium title-font">$1 = 1 tree</h2>
                      <h3 className="mt-2 text-lg text-gray-900 font-medium title-font">cart: {trees} 🌱</h3>
                      <hr className="mt-4"/>
                      <form className="mt-4" onSubmit={handleData}>
                        <input type="radio" id="1tree" name="1tree" value={1} onChange={(e)=>setTrees(e.target.value)} hidden/>
                        <button type="button" className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-10 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"><label htmlFor="1tree">1 🌲</label></button>
                        <input type="radio" id="5trees" name="5trees" value={2} onChange={(e)=>setTrees(e.target.value)} hidden/>
                        <button type="button" className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-10 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"><label htmlFor="5trees">5 🌲</label></button>
                        <input type="radio" id="10trees" name="10trees" value={3} onChange={(e)=>setTrees(e.target.value)} hidden/>
                        <button type="button" className="inline-flex m-2 ml-4 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"><label htmlFor="10trees">10 🌲</label></button>
                        <input type="radio" id="20trees" name="20trees" value={4} onChange={(e)=>setTrees(e.target.value)} hidden/>
                        <button type="button" className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"><label htmlFor="20trees">20 🌲</label></button>
                        <input type="radio" id="100trees" name="100trees" value={5} onChange={(e)=>setTrees(e.target.value)} hidden/>
                        <button type="button" className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"><label htmlFor="100trees">100 🌲</label></button>
                        <center>
                        {isConnected ?
                        // Wallet Connect button
                        <button type="submit" disabled={claimingNft ? 1 : 0} className="flex mt-10 relative px-4 py-2 font-medium group">
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                          <span className="relative text-black group-hover:text-white">{loadNftCard && trees != "0" ? "Loading..." : "Donate"}</span>
                        </button>
                        : 
                        // Donate button
                        <button type="button" className="flex mt-10 relative px-4 py-2 font-medium group" onClick={connectWallet}>
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                          <span className="relative text-black group-hover:text-white">{isConnected ? "Wallet connected" : "Connect wallet"}</span>
                        </button>
                        }
                        <p className="text-red-500 text-xs mt-4">{walletStatus}</p>
                      </center>
                      </form>
                      </>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </center>
        </section>
      </div>
  );
}

export default DonationCardScreen;
