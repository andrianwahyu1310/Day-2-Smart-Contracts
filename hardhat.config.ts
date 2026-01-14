import { task, type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

// import { USER_PRIVATE_KEY } from "./helpers/constants/deployments";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "shanghai",
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  networks: {
    avalancheFuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      // accounts: [USER_PRIVATE_KEY],
      accounts: [process.env.PRIVATE_KEY!],
    },
  },

  etherscan: {
    // apiKey: ETHERSCAN_API,
  },

  sourcify: {
    enabled: true,
  },
};

/**
 * Custom Hardhat Task
 * npx hardhat accounts --network avalancheFuji
 */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.viem.getWalletClients();
  for (const account of accounts) {
    console.log(account.account.address);
  }
});

export default config;
