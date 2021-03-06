
<p align="center">
    <img align="center" src="/client/src/images/logo_header.png" width="300"></img>
</p>

<h1 align="center">cryptoroots.xyz | HackFS 2022 submission</h1>

[cryptoroots.xyz](https://cryptoroots.xyz/) is a platform that allows users to plant trees ($1 = 1 tree) and earn [ERC-1155](https://docs.openzeppelin.com/contracts/3.x/erc1155#:~:text=ERC1155%20is%20a%20novel%20token,their%20guides%20before%20moving%20on.) powered climate change NFT badges. All the NFT badges are [AI-generated](https://openai.com/blog/dall-e/) art, honoring the best artists in the world. Planting a tree is always better than spending millions on monkey images! Let’s use NFTs to save the planet!

100% of the cryptoroots funds will be donated to [#teamtrees](https://teamtrees.org/) cause (founded by YouTubers Mr. Beast and Mark Rober in 2019, they’ve planted 20 million + trees till now). We will frequently release donation receipts on our platform for transparency (will send emails to those who opt to subscribe to our mailing list). Also, users can track how many trees we've planted, how much area is covered, how much carbon emission is reversed, and so much about climate change.

### Benefits of climate change NFTs:
* **Offset carbon emission:** Plant trees! An average grown tree offsets 24kg of co2/year.
* **Save soil:** Because of soil extinction, the number of microbes (8 billion in a handful of soil) is decreasing. Soil is a major source of nutrients needed by plants for growth. Trees are the solution! They reduce soil erosion.
* **Climate change awareness:** Show your environmental impact, NFTs are verifiable digital assets on the blockchain.
* **Gifts:** Gift plants instead of things that produce carbon. 
* **Tickets:** Get access to global environmental events/activities as NFT tickets.
* **Community:** Show your environmental work, and collaborate with environmental activists all over the world.

### After Hackathon tasks:

- [ ] Leaderboard (maximum number of trees donated).
- [ ] Transfer funds to stablecoin USDC on Polygon network for donations (research and implement Beconomy).
- [ ] Use covalent to fetch the dashboard data i.e. trees planted (total supply).
- [ ] Multiple wallet integration.
- [ ] A co2 emission calculator (make a predictive ML model).
- [ ] Show users how much energy is consumed per transaction by using filecoin.green API.
- [ ] Clear Information on climate change and what we can do about it.
- [ ] Fix bugs & improve UI.
- [ ] Finalize the artwork before public launch.
- [ ] Launch on Polygon Mainnet.

## Development

### Installation & setup
Make sure you have truffle installed on your computer.
```sh
# Install Truffle globally
npm install -g truffle
```

Ensure you create an `.env` file in `root` directory. Then to access the Ethereum network/node, create a project on [infura](https://infura.io/) and copy-paste the `infura project-id url` in `.env` with a variable name `INFURA_MATIC_TESTNET` or `INFURA_RINKEBY` (contracts of this dapp is deployed to rinkeby testnet).
```sh
INFURA_MATIC_TESTNET=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
INFURA_RINKEBY=https://rinkeby.infura.io/v3/YOUR_PROJECT_ID
```

Paste the 12 word Secret Recovery Phrase of your (preferably newly generated and testnet-only) MetaMask wallet in `.env` with the variable name `MNEMONIC`. This will be loaded by truffle at runtime, and the environment variable can then be accessed with `process.env.MNEMONIC`.

```sh
MNEMONIC=for example put your twelve word BIP39 secret recovery phrase here
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

## License
cryptoroots.xyz is licensed under the [MIT license](https://github.com/akhileshthite/cryptoroots.xyz/blob/main/LICENSE).

