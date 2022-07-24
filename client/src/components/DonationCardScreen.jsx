import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import logo from "../images/logo_header.png";

function DonationCardScreen({
  web3,
  connectWallet,
  walletStatus,
  cryptoRootsContract,
  isConnected,
  accountAddress,
}) {
  const [trees, setTrees] = useState(0);
  const [claimingNft, setClaimingNft] = useState(false);
  const [nftImage, setNftImage] = useState(undefined);
  const [loadNftCard, setLoadNftCard] = useState(undefined);
  const [totalSupply, setTotalSupply] = useState(Loader);
  const [co2Offset, setCo2Offset] = useState(Loader);
  const [areaCovered, setAreaCovered] = useState(Loader);
  const [id1Price, setId1Price] = useState(undefined);
  const [id2Price, setId2Price] = useState(undefined);
  const [id3Price, setId3Price] = useState(undefined);
  const [id4Price, setId4Price] = useState(undefined);
  const [id5Price, setId5Price] = useState(undefined);

  // Display stats
  useEffect(() => {
    (async () => {
      // Get the latest USDC price for each ID in wei (18 decimals) from chainlink data feeds
      await cryptoRootsContract.methods
        .getLatestPriceId1()
        .call()
        .then((priceId1) => {
          return setId1Price(priceId1);
        });
      await cryptoRootsContract.methods
        .getLatestPriceId2()
        .call()
        .then((priceId2) => {
          return setId2Price(priceId2);
        });
      await cryptoRootsContract.methods
        .getLatestPriceId3()
        .call()
        .then((priceId3) => {
          return setId3Price(priceId3);
        });
      await cryptoRootsContract.methods
        .getLatestPriceId4()
        .call()
        .then((priceId4) => {
          return setId4Price(priceId4);
        });
      await cryptoRootsContract.methods
        .getLatestPriceId5()
        .call()
        .then((priceId5) => {
          return setId5Price(priceId5);
        });
      // Get the total supply (total trees planted)
      const id1Minted = await cryptoRootsContract.methods
        .totalSupply(1)
        .call()
        .then((supply) => {
          return supply;
        });
      const id2Minted = await cryptoRootsContract.methods
        .totalSupply(2)
        .call()
        .then((supply) => {
          return supply;
        });
      const id3Minted = await cryptoRootsContract.methods
        .totalSupply(3)
        .call()
        .then((supply) => {
          return supply;
        });
      const id4Minted = await cryptoRootsContract.methods
        .totalSupply(4)
        .call()
        .then((supply) => {
          return supply;
        });
      const id5Minted = await cryptoRootsContract.methods
        .totalSupply(5)
        .call()
        .then((supply) => {
          return supply;
        });
      const totalSupply =
        (await Number(id1Minted)) +
        Number(id2Minted) * 5 +
        Number(id3Minted) * 10 +
        Number(id4Minted) * 20 +
        Number(id5Minted) * 100;
      setTotalSupply(totalSupply);
      // Calculate area covered by trees per acre
      const areaCovered = totalSupply / 500;
      setAreaCovered(areaCovered);
      // Calculate co2 offset of trees per year
      const co2Offset = (totalSupply * 20) / 1000;
      setCo2Offset(co2Offset + "t");
    })();
  }, []);

  // Donation card contract methods
  async function handleData(e) {
    // Prevent from loading the page
    e.preventDefault();
    setLoadNftCard(!loadNftCard);
    // Get the number of trees and write the mint transaction
    if (trees === "1") {
      await cryptoRootsContract.methods.mint(1, 1).send({
        from: accountAddress,
        gas: 1500000,
        gasPrice: "80000000000",
        value: `${id1Price}`,
      });
      setClaimingNft(!claimingNft);
    } else if (trees === "2") {
      await cryptoRootsContract.methods.mint(2, 1).send({
        from: accountAddress,
        gas: 1500000,
        gasPrice: "80000000000",
        value: `${id2Price}`,
      });
      setClaimingNft(!claimingNft);
    } else if (trees === "3") {
      await cryptoRootsContract.methods.mint(3, 1).send({
        from: accountAddress,
        gas: 1500000,
        gasPrice: "80000000000",
        value: `${id3Price}`,
      });
      setClaimingNft(!claimingNft);
    } else if (trees === "4") {
      await cryptoRootsContract.methods.mint(4, 1).send({
        from: accountAddress,
        gas: 1500000,
        gasPrice: "80000000000",
        value: `${id4Price}`,
      });
      setClaimingNft(!claimingNft);
    } else if (trees === "5") {
      await cryptoRootsContract.methods.mint(5, 1).send({
        from: accountAddress,
        gas: 1500000,
        gasPrice: "80000000000",
        value: `${id5Price}`,
      });
      setClaimingNft(!claimingNft);
    } else {
      console.log(
        "Invalid input! Please select the valid number of trees to donate."
      );
    }
    // Token URI with token ID (number of trees)
    const uri = await cryptoRootsContract.methods
      .uri(trees)
      .call()
      .then((nft) => {
        return nft;
      });
    // Replace ipfs:// with public gateway (very few browsers support ipfs://)
    const gatewayUri = uri.replace("ipfs://", "https://nftstorage.link/ipfs/");
    // Replace id with trees id.
    const idUri = gatewayUri.replace("{id}", trees);
    const response = await fetch(idUri);
    const metadata = await response.json();
    const imageUri = metadata.image;
    const nftStorageUri = imageUri.replace(
      "ipfs://",
      "https://nftstorage.link/ipfs/"
    );
    setNftImage(nftStorageUri);
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
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">
                  {totalSupply}
                </h2>
                <p className="leading-relaxed">Trees planted</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">
                  {areaCovered}
                </h2>
                <p className="leading-relaxed">Area covered / acre</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-700">
                  {co2Offset}
                </h2>
                <p className="leading-relaxed">CO2 offset / year</p>
              </div>
            </div>
          </div>
        </section>
        {/* Donation card */}
        <center>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex-wrap -m-4">
                <div className="xl:w-1/2 2xl:w-1/4 md:w-1/2 p-4">
                  <div
                    className="border-2 border-gray-200 p-6 rounded-lg text-center shadow-lg"
                    style={{ backgroundColor: "#F7F8FC" }}
                  >
                    {claimingNft ? (
                      <>
                        <p className="text-green-500 text-lg">Thank you! 🎊</p>
                        <p className="text-gray-700 mt-2 text-sm">
                          For making the world a better place to live :)
                          <br />
                          Here's your NFT badge.
                        </p>
                        <center>
                          <img
                            className="rounded-md mt-4"
                            width={200}
                            src={nftImage}
                            alt="NFT badge"
                          />
                        </center>
                        <p className="text-gray-700 mt-4 text-sm">
                          Find your badges on my trees page.
                        </p>
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
                    ) : (
                      <>
                        <h2 className="text-lg text-gray-900 font-medium title-font">
                          $1 = 1 tree
                        </h2>
                        <h3 className="mt-2 text-lg text-gray-900 font-medium title-font">
                          cart: {trees} 🌱
                        </h3>
                        <p className="mt-2 text-xs text-gray-500 font-medium title-font">
                          cart: id 1=1 tree, id 2=5 trees, id 5=20 trees, etc.
                          <br />
                        </p>
                        <hr className="mt-4" />
                        <p className="mt-2 text-xs text-gray-500 font-medium title-font">
                          Please click on the middle portion of the button (it's
                          a "radio" hidden for label).
                        </p>
                        <form className="mt-4" onSubmit={handleData}>
                          <input
                            type="radio"
                            id="1tree"
                            name="1tree"
                            value={1}
                            onChange={(e) => setTrees(e.target.value)}
                            hidden
                          />
                           {" "}
                          <button
                            type="button"
                            className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-10 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"
                          >
                            <label htmlFor="1tree">1 🌲</label>
                          </button>
                          <input
                            type="radio"
                            id="5trees"
                            name="5trees"
                            value={2}
                            onChange={(e) => setTrees(e.target.value)}
                            hidden
                          />
                           {" "}
                          <button
                            type="button"
                            className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-10 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"
                          >
                            <label htmlFor="5trees">5 🌲</label>
                          </button>
                          <input
                            type="radio"
                            id="10trees"
                            name="10trees"
                            value={3}
                            onChange={(e) => setTrees(e.target.value)}
                            hidden
                          />
                           {" "}
                          <button
                            type="button"
                            className="inline-flex m-2 ml-4 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"
                          >
                            <label htmlFor="10trees">10 🌲</label>
                          </button>
                          <input
                            type="radio"
                            id="20trees"
                            name="20trees"
                            value={4}
                            onChange={(e) => setTrees(e.target.value)}
                            hidden
                          />
                           {" "}
                          <button
                            type="button"
                            className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"
                          >
                            <label htmlFor="20trees">20 🌲</label>
                          </button>
                          <input
                            type="radio"
                            id="100trees"
                            name="100trees"
                            value={5}
                            onChange={(e) => setTrees(e.target.value)}
                            hidden
                          />
                           {" "}
                          <button
                            type="button"
                            className="inline-flex m-2 text-gray-800 bg-green-100 shadow-sm border border-green-400 py-1 px-9 focus:shadow-md focus:border-green-600 hover:bg-green-100 rounded text-lg"
                          >
                            <label htmlFor="100trees">100 🌲</label>
                          </button>
                          <center>
                            {isConnected ? (
                              // Donate button
                              <button
                                type="submit"
                                disabled={claimingNft ? 1 : 0}
                                className="flex mt-10 relative px-4 py-2 font-medium group"
                              >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">
                                  {loadNftCard && trees != "0"
                                    ? "Loading..."
                                    : "Donate"}
                                </span>
                              </button>
                            ) : (
                              // Wallet Connect button
                              <button
                                type="button"
                                className="flex mt-10 relative px-4 py-2 font-medium group"
                                onClick={connectWallet}
                              >
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">
                                  {isConnected
                                    ? "Wallet connected"
                                    : "Connect wallet"}
                                </span>
                              </button>
                            )}
                            <p className="text-red-500 text-xs mt-4">
                              {walletStatus}
                            </p>
                          </center>
                        </form>
                      </>
                    )}
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
