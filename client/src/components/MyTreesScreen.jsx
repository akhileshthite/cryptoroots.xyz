import React from "react";
import { useState, useEffect } from "react";

function MyTreesScreen({
  web3,
  connectWallet,
  walletStatus,
  network,
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
  const [id1Metadata, setid1Metadata] = useState(undefined);
  const [id2Metadata, setid2Metadata] = useState(undefined);
  const [id3Metadata, setid3Metadata] = useState(undefined);
  const [id4Metadata, setid4Metadata] = useState(undefined);
  const [id5Metadata, setid5Metadata] = useState(undefined);

  if (isConnected) {
    try {
      // Get balance of each token ID from the user's account.
      cryptoRootsContract.methods
        .balanceOf(accountAddress, 1)
        .call()
        .then((token) => {
          return setid1Owned(token);
        });
      cryptoRootsContract.methods
        .balanceOf(accountAddress, 2)
        .call()
        .then((token) => {
          return setid2Owned(token);
        });
      cryptoRootsContract.methods
        .balanceOf(accountAddress, 3)
        .call()
        .then((token) => {
          return setid3Owned(token);
        });
      cryptoRootsContract.methods
        .balanceOf(accountAddress, 4)
        .call()
        .then((token) => {
          return setid4Owned(token);
        });
      cryptoRootsContract.methods
        .balanceOf(accountAddress, 5)
        .call()
        .then((token) => {
          return setid5Owned(token);
        });
    } catch (error) {
      console.log(error);
    }
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
        setid1Metadata(id1Metadata);
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
        setid2Metadata(id2Metadata);
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
        setid3Metadata(id3Metadata);
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
        setid4Metadata(id4Metadata);
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
        setid5Metadata(id5Metadata);
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

  // const COVALENT_KEY = 'ckey_e6e82169afa4494ba3b64eb1045'
  // const covalentApi = `https://api.covalenthq.com/v1/${network}/tokens/${network.address}/nft_metadata/1/?key=${COVALENT_KEY}`
  // console.log(covalentApi)
  // const response = await fetch(covalentApi).then(response => {return response.json()})
  // console.log(response)

  return (
    <div>
      <div className="flex flex-col text-center w-full mt-12">
        <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-4">
          {accountAddress}
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Collected Badges
        </h1>
      </div>
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {id1Owned > 0 ? (
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
                      {id1Metadata.name}
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
            {id2Owned > 0 ? (
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
                      {id2Metadata.name}
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
            {id3Owned > 0 ? (
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
                      {id3Metadata.name}
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
            {id4Owned > 0 ? (
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
                      {id4Metadata.name}
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
            {id5Owned > 0 ? (
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
                      {id5Metadata.name}
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
