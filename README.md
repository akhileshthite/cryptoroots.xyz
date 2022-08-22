> Polygon BUIDL IT Summer 2022 Hackathon Submission

<p align="center">
    <img align="center" src="/client/src/images/logo_header.png" width="300"></img>
</p>

<h1 align="center">cryptoroots.xyz</h1>

<div align="center">
    <img src="https://img.shields.io/badge/platform-polygon-purple.svg?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/github/license/akhileshthite/cryptoroots.xyz?color=orange&style=flat-square" alt="License">
    <img src="https://img.shields.io/github/v/release/akhileshthite/cryptoroots.xyz?color=blue&style=flat-square" alt="Release">
</div><br>

[cryptoroots.xyz](https://cryptoroots.xyz/) is a platform that allows users to offset their carbon footprint by planting trees ($1 = 1 tree) and earn [ERC-1155](https://docs.openzeppelin.com/contracts/3.x/erc1155#:~:text=ERC1155%20is%20a%20novel%20token,their%20guides%20before%20moving%20on.) powered climate change impact badges. Let’s unlock the true potential of NFTs. Let's save our planet.

cryptoroots.xyz is a No-profit organization, 100% of the cryptoroots funds will be donated to [#teamtrees](https://teamtrees.org/) cause (founded by YouTubers Mr. Beast and Mark Rober in 2019, they’ve planted 20 million + trees till now). We will frequently release donation receipts on our platform for transparency (will send emails to those who opt to subscribe to our mailing list). Also, users can track how many trees they've planted, how much area is covered, and how much carbon emission is reversed/year. The platform is designed to encourage everyone to go carbon neutral.

### Qualifying bounties:
* **Polygon (public goods track):**
<br/>-> Testnet deployed contract: https://mumbai.polygonscan.com/address/0x817EA2ec4B67673823A4B06E187D3E9762C02384
<br/>-> Smart contracts: https://github.com/akhileshthite/cryptoroots.xyz/blob/ab653da054d3510806eef65de025e4b36b7fe7a4/contracts/CryptoRoots.sol#L1486

* **IPFS/Filecoin:**
<br/>-> nft.storage (NFTs & metadata): https://github.com/akhileshthite/cryptoroots.xyz/blob/ab653da054d3510806eef65de025e4b36b7fe7a4/client/src/components/DonationCardScreen.jsx#L161
<br/>-> Deployed dapp on IPFS: https://dweb.link/ipfs/QmRQVPh818cSQKL6HQ9eL8aDNAqu1rDM2GSDPc3DXHDbdW/

* **Chainlink (data feeds to get the latest MATIC/USD prices):**
<br/>-> https://github.com/akhileshthite/cryptoroots.xyz/blob/ab653da054d3510806eef65de025e4b36b7fe7a4/contracts/CryptoRoots.sol#L1521

* **Sequence wallet:**
<br/>-> https://github.com/akhileshthite/cryptoroots.xyz/blob/ab653da054d3510806eef65de025e4b36b7fe7a4/client/src/App.jsx#L70

* **Spheron protocol IPFS deployment:**
<br/>-> https://hackathon-rdcxao.spheron.app/

### Roadmap (after Hackathon tasks):
- [ ] Research and implement [biconomy](https://www.biconomy.io/) for gasless transactions and to receive funds in USDC on Polygon Mainnet.
- [ ] Create a subgraph to query totalSupply data from the blockchain by using [The Graph protocol](https://thegraph.com/en/) (so that the stats will be visible without connecting the wallet).
- [ ] Leaderboard (maximum number of trees donated).
- [ ] Write tests in mocha, follow best security practices in Solidity, learn more in this [article](https://consensys.net/blog/developers/solidity-best-practices-for-smart-contract-security/).
- [ ] Resolve erc-1155 contract verification error (Unable to generate Contract ByteCode and ABI).
- [ ] A co2 emission calculator that tells how much an individual is emitting CO2/year and how many trees they need to offset their CO2 footprint (make a predictive ML model based on datasets).
- [ ] FAQ section for better UX.
- [ ] Whitepaper.
- [ ] Improve NFT artwork before public launch (animated cards that contain info regarding CO2 emission).
- [ ] Improve UI.
- [ ] Deploy on Polygon Mainnet.


## Development

### Installation & setup

Make sure you have truffle installed on your computer.

```sh
# Install Truffle globally
npm install -g truffle
```

```sh
# Install truffle dependencies in root directory (./cryptoroots.xyz)
npm install
```

Ensure you create an `.env` file in `root` directory. Then to access the Ethereum network/node, create a project on [infura](https://infura.io/) and copy-paste the `infura project-id url` in `.env` with a variable name `REACT_APP_INFURA_MATIC_TESTNET` or `REACT_APP_INFURA_RINKEBY`.

```sh
REACT_APP_INFURA_MATIC_TESTNET=https://polygon-mumbai.infura.io/v3/YOUR_PROJECT_ID
REACT_APP_INFURA_RINKEBY=https://rinkeby.infura.io/v3/YOUR_PROJECT_ID
```

Paste the 12 word Secret Recovery Phrase of your (preferably newly generated and testnet-only) MetaMask wallet in `.env` with the variable name `REACT_APP_MNEMONIC`. This will be loaded by truffle at runtime, and the environment variable can then be accessed with `process.env.REACT_APP_MNEMONIC`.

```sh
REACT_APP_MNEMONIC=for example put your twelve word BIP39 secret recovery phrase here
```

OR

To develop on ganache blockchain, open ganache and import the accounts by adding your ganache private keys in MetaMask.

```sh
$ ganache-cli
```

### Deployment

To deploy the smart contracts on blockchain networks, follow the given truffle command below.

```sh
# truffle migrate --network NETWORK_NAME
truffle migrate --network matic_testnet
truffle migrate --network rinkeby

# --reset: Run all migrations from the beginning, instead of running from the last completed migration.

```

For more information, read [truffle docs](https://trufflesuite.com/docs/truffle/).

### React client

Start react app.

```sh
# cd into client directory
cd client

# Install dependencies
npm install

# Start the app
npm start
Starting the development server...
```

## Contribution

- Thanks for your interest in contributing to cryptoroots.xyz. There are many ways you can contribute to the project.
- To start, take a few minutes to read the "[contribution guide](https://github.com/akhileshthite/cryptoroots.xyz/blob/main/.github/CONTRIBUTING.md)".
- We look forward to your [pull requests](https://github.com/akhileshthite/cryptoroots.xyz/pulls) and / or involvement in our [issues page](https://github.com/akhileshthite/cryptoroots.xyz/issues).

## License

cryptoroots.xyz is licensed under the [MIT license](https://github.com/akhileshthite/cryptoroots.xyz/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/cryptoroots_xyz" target="_blank"><img src="https://img.shields.io/twitter/follow/cryptoroots_xyz?style=social" alt="twitter" /></a>
