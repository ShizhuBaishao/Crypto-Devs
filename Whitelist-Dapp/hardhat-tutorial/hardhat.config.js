/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY1 = "10e3cfb424ef61ab01989b9b3fdbae3bc0da36464e79bb7acccbc121f3baa3c2";
const PRIVATE_KEY2 = "9dc81bc7f6d8c7300caeffc3bea5371e2c1f5fcda429db29c73adf11c14b3dd1";
const PRIVATE_KEY3 = "6abf43f7c0ff9540d3420010adccc48354bdd354f7e97753b1a53797ab5d7de9";
const PRIVATE_KEY4 = "02986b7d134685854344e1811b40395578c6d21ad12628e204c6cab1e1bfc312";


const ALCHEMY_API_KEY = "YOUER_ALCHEMY_API_KEY"
const GOERLI_PRIVATE_KEY = "YOUER_GOERLI_PRIVATE_KEY";


// defaultNetwork: "ganache",
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [`0x${PRIVATE_KEY1}`,`0x${PRIVATE_KEY2}`,`0x${PRIVATE_KEY3}`,`0x${PRIVATE_KEY4}`]
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    }
  }
};
