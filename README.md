<p align="center">
    <img align="center" src="/client/src/images/logo_header.png" width="300"></img>
</p>

<h1 align="center">cryptoroots.xyz</h1>

[cryptoroots.xyz](https://cryptoroots.xyz/) is a platform that allows users to plant trees ($1 = 1 tree) and earn [ERC-1155](https://docs.openzeppelin.com/contracts/3.x/erc1155#:~:text=ERC1155%20is%20a%20novel%20token,their%20guides%20before%20moving%20on.) powered climate change NFT badges. All the NFT badges are [AI-generated](https://openai.com/blog/dall-e/) art, honoring the best artists in the world. Planting a tree is always better than spending millions on monkey images! Let’s use NFTs to save the planet!

100% of the cryptoroots funds will be donated to [#teamtrees](https://teamtrees.org/) cause (founded by YouTubers Mr. Beast and Mark Rober in 2019, they’ve planted 20 million + trees till now). We will frequently release donation receipts on our platform for transparency (will send emails to those who opt to subscribe to our mailing list). Also, users can track how many trees we've planted, how much area is covered, how much carbon emission is reversed, and so much about climate change.

### Benefits of climate change NFTs:

- **Offset carbon emission:** Plant trees! An average grown tree offsets 24kg of co2/year.
- **Save soil:** Because of soil extinction, the number of microbes (8 billion in a handful of soil) is decreasing. Soil is a major source of nutrients needed by plants for growth. Trees are the solution! They reduce soil erosion.
- **Climate change awareness:** Show your environmental impact, NFTs are verifiable digital assets on the blockchain.
- **Gifts:** Gift plants instead of things that produce carbon.
- **Tickets:** Get access to global environmental events/activities as NFT tickets.
- **Community:** Show your environmental work, and collaborate with environmental activists all over the world.

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

* Thanks for your interest in contributing to cryptoroots.xyz. There are many ways you can contribute to the project.
* To start, take a few minutes to read the "[contribution guide](https://github.com/akhileshthite/cryptoroots.xyz/blob/main/.github/CONTRIBUTING.md)".
* We look forward to your [pull requests](https://github.com/akhileshthite/cryptoroots.xyz/pulls) and / or involvement in our [issues page](https://github.com/akhileshthite/cryptoroots.xyz/issues).


## License

cryptoroots.xyz is licensed under the [MIT license](https://github.com/akhileshthite/cryptoroots.xyz/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/cryptoroots_xyz" target="_blank"><img src="https://img.shields.io/twitter/follow/cryptoroots_xyz?style=social" alt="twitter" /></a>
