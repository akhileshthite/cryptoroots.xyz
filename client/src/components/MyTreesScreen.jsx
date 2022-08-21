import React from "react";
import { useState, useEffect } from "react";

function MyTreesScreen({
  connectWallet,
  walletStatus,
  cryptoRootsContract,
  isConnected,
  accountAddress,
}) {
  const [id1Owned, setid1Owned] = useState(0);
  const [id2Owned, setid2Owned] = useState(0);
  const [id3Owned, setid3Owned] = useState(0);
  const [id4Owned, setid4Owned] = useState(0);
  const [id5Owned, setid5Owned] = useState(0);
  const [id1Image, setid1Image] = useState(undefined);
  const [id2Image, setid2Image] = useState(undefined);
  const [id3Image, setid3Image] = useState(undefined);
  const [id4Image, setid4Image] = useState(undefined);
  const [id5Image, setid5Image] = useState(undefined);
  const [id1Name, setid1Name] = useState(undefined);
  const [id2Name, setid2Name] = useState(undefined);
  const [id3Name, setid3Name] = useState(undefined);
  const [id4Name, setid4Name] = useState(undefined);
  const [id5Name, setid5Name] = useState(undefined);
  const [totalTrees, setTotalTrees] = useState(null);
  const [co2Offset, setCo2Offset] = useState(null);
  const [areaCovered, setAreaCovered] = useState(null);

  if (isConnected) {
    (async () => {
      try {
        // Get balance of each token ID from the user's account.
        await cryptoRootsContract.methods
          .balanceOf(accountAddress, 1)
          .call()
          .then((token) => {
            return setid1Owned(token);
          });
        await cryptoRootsContract.methods
          .balanceOf(accountAddress, 2)
          .call()
          .then((token) => {
            return setid2Owned(token);
          });
        await cryptoRootsContract.methods
          .balanceOf(accountAddress, 3)
          .call()
          .then((token) => {
            return setid3Owned(token);
          });
        await cryptoRootsContract.methods
          .balanceOf(accountAddress, 4)
          .call()
          .then((token) => {
            return setid4Owned(token);
          });
        await cryptoRootsContract.methods
          .balanceOf(accountAddress, 5)
          .call()
          .then((token) => {
            return setid5Owned(token);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }

  useEffect(() => {
    (async () => {
      try {
        // Token URI with token ID (number of trees)
        const uri = await cryptoRootsContract.methods
          .uri(0)
          .call()
          .then((nft) => {
            return nft;
          });
        // Replace ipfs:// with public gateway (very few browsers support ipfs://)
        const gatewayUri = uri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        // id1
        const id1Uri = gatewayUri.replace("{id}", 1);
        const id1Response = await fetch(id1Uri);
        const id1Metadata = await id1Response.json();
        const nft1Name = id1Metadata.name;
        setid1Name(nft1Name);
        const id1ImageUri = id1Metadata.image;
        const id1NftStorageUri = id1ImageUri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        setid1Image(id1NftStorageUri);
        // id2
        const id2Uri = gatewayUri.replace("{id}", 2);
        const id2Response = await fetch(id2Uri);
        const id2Metadata = await id2Response.json();
        const nft2Name = id2Metadata.name;
        setid2Name(nft2Name);
        const id2ImageUri = id2Metadata.image;
        const id2NftStorageUri = id2ImageUri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        setid2Image(id2NftStorageUri);
        // id3
        const id3Uri = gatewayUri.replace("{id}", 3);
        const id3Response = await fetch(id3Uri);
        const id3Metadata = await id3Response.json();
        const nft3Name = id3Metadata.name;
        setid3Name(nft3Name);
        const id3ImageUri = id3Metadata.image;
        const id3NftStorageUri = id3ImageUri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        setid3Image(id3NftStorageUri);
        // id4
        const id4Uri = gatewayUri.replace("{id}", 4);
        const id4Response = await fetch(id4Uri);
        const id4Metadata = await id4Response.json();
        const nft4Name = id4Metadata.name;
        setid4Name(nft4Name);
        const id4ImageUri = id4Metadata.image;
        const id4NftStorageUri = id4ImageUri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        setid4Image(id4NftStorageUri);
        // id5
        const id5Uri = gatewayUri.replace("{id}", 5);
        const id5Response = await fetch(id5Uri);
        const id5Metadata = await id5Response.json();
        const nft5Name = id5Metadata.name;
        setid5Name(nft5Name);
        const id5ImageUri = id5Metadata.image;
        const id5NftStorageUri = id5ImageUri.replace(
          "ipfs://",
          "https://nftstorage.link/ipfs/"
        );
        setid5Image(id5NftStorageUri);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Display total tree stats of an individual.
  useEffect(() => {
    (async () => {
      const treesPlanted =
        (await Number(id1Owned)) +
        Number(id2Owned) * 5 +
        Number(id3Owned) * 10 +
        Number(id4Owned) * 20 +
        Number(id5Owned) * 100;
      setTotalTrees(treesPlanted);
      // Calculate area covered by trees per acre
      const areaCovered = treesPlanted / 500;
      setAreaCovered(areaCovered);
      // Calculate co2 offset of trees per year
      const co2Offset = (treesPlanted * 20) / 1000;
      setCo2Offset(co2Offset + "t");
    })();
  }, [id1Owned, id2Owned, id3Owned, id4Owned, id5Owned]);

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-10">
        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-4">
          {accountAddress}
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Tree Dashboard
        </h1>
      </div>
      {/* wallet */}
      {isConnected ? (
        ""
      ) : (
        <center>
          <button
            type="button"
            onClick={connectWallet}
            className="flex mt-4 relative px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Connect wallet
            </span>
          </button>
          <p className="text-red-500 text-xs mt-4">{walletStatus}</p>
        </center>
      )}
      {isConnected ? (
        <>
          {/* Stats */}
          <section className="text-gray-600 body-font">
            <div className="container px-16 mt-10 mb-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-700">
                    {totalTrees}
                  </h2>
                  <p className="leading-relaxed">Trees planted by me</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-700">
                    {areaCovered}
                  </h2>
                  <p className="leading-relaxed">Area covered / acre</p>
                </div>
                <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-700">
                    {co2Offset}
                  </h2>
                  <p className="leading-relaxed">CO2 offset / year</p>
                </div>
              </div>
            </div>
          </section>
          <hr></hr>
        </>
      ) : (
        ""
      )}
      {isConnected && totalTrees === 0 ? (
        <p className="mt-4 text-center text-gray-700">Zero trees :/</p>
      ) : (
        <>
          {isConnected ? (
            <p className="mt-4 text-center text-gray-700">
              Climate change badges:
            </p>
          ) : (
            ""
          )}
        </>
      )}
      {/* main */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            {id1Owned > 0 && isConnected ? (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-80 md:h-36 w-full object-cover object-center"
                    src={id1Image}
                    alt="NFT Badge"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NFT BADGE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {id1Name}
                    </h1>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://testnets.opensea.io/account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View on OpenSea
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
                        <div
                          class="font-bold text-black rounded-full bg-yellow-200 flex items-center justify-center font-mono"
                          style={{ height: 55, width: 55, fontSize: 17 }}
                        >
                          x{id1Owned}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {id2Owned > 0 && isConnected ? (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-80 md:h-36 w-full object-cover object-center"
                    src={id2Image}
                    alt="NFT Badge"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NFT BADGE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {id2Name}
                    </h1>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://testnets.opensea.io/account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View on OpenSea
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
                        <div
                          class="font-bold text-black rounded-full bg-yellow-200 flex items-center justify-center font-mono"
                          style={{ height: 55, width: 55, fontSize: 17 }}
                        >
                          x{id2Owned}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {id3Owned > 0 && isConnected ? (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-80 md:h-36 w-full object-cover object-center"
                    src={id3Image}
                    alt="NFT Badge"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NFT BADGE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {id3Name}
                    </h1>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://testnets.opensea.io/account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View on OpenSea
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
                        <div
                          class="font-bold text-black rounded-full bg-yellow-200 flex items-center justify-center font-mono"
                          style={{ height: 55, width: 55, fontSize: 17 }}
                        >
                          x{id3Owned}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {id4Owned > 0 && isConnected ? (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-80 md:h-36 w-full object-cover object-center"
                    src={id4Image}
                    alt="NFT Badge"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NFT BADGE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {id4Name}
                    </h1>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://testnets.opensea.io/account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View on OpenSea
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
                        <div
                          class="font-bold text-black rounded-full bg-yellow-200 flex items-center justify-center font-mono"
                          style={{ height: 55, width: 55, fontSize: 17 }}
                        >
                          x{id4Owned}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {id5Owned > 0 && isConnected ? (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-80 md:h-36 w-full object-cover object-center"
                    src={id5Image}
                    alt="NFT Badge"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      NFT BADGE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {id5Name}
                    </h1>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href="https://testnets.opensea.io/account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View on OpenSea
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
                        <div
                          class="font-bold text-black rounded-full bg-yellow-200 flex items-center justify-center font-mono"
                          style={{ height: 55, width: 55, fontSize: 17 }}
                        >
                          x{id5Owned}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyTreesScreen;
