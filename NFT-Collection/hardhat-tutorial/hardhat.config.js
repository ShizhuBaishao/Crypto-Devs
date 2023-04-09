/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY1 = "a06cd1f81053817f9b38c9ab598c8a80f6066e6360086c1626164da98bc69ff8";


const ALCHEMY_API_KEY = "YOUER_ALCHEMY_API_KEY"
const GOERLI_PRIVATE_KEY = "YOUER_GOERLI_PRIVATE_KEY";

//contracts: 0xCD7eE77519843B612d8fE1d89A97776303d2E4cd
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [`0x${PRIVATE_KEY1}`]
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    }
  }
};
