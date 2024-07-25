import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const MAINNET_RPC_URL = vars.get("MAINNET_RPC_URL");
const TESTNET_RPC_URL = vars.get("TESTNET_RPC_URL");
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    rskMainnet: {
      url: MAINNET_RPC_URL,
      chainId: 30,
      gasPrice: 60000000,
      accounts: [PRIVATE_KEY],
    },
    rskTestnet: {
      url: TESTNET_RPC_URL,
      chainId: 31,
      gasPrice: 60000000,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
