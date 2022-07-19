const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    matic_testnet: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_MATIC_TESTNET
        );
      },
      network_id: 80001,
      gas: 6000000,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_RINKEBY
        );
      },
      network_id: 4,
      gas: 6000000,
      gasPrice: 10000000000,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.4",
      // docker: true,
      // settings: {
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  }
};
