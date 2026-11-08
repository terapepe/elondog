window.EDOG_CONFIG = {
  project: {
    name: "ELON DOG",
    ticker: "$EDOG",
    symbol: "EDOG",
    tagline: "The goodest boy in the galaxy.",
    decimalsFallback: 18,
  },

  social: {
    x: "https://x.com/ElonDog_Xyz",
    xHandle: "@ElonDog_Xyz",
    telegram: "",
  },

  /**
   *  "multi"
   *  "single"
   */
  mode: "single",
  singleNetwork: "robinhood",

  token: {
    evm: "0x362ea8d95FA3e40f1fAD7d068e99005595512402",
    sol: "",
  },

  primaryNetwork: "solana",
  networks: {
    solana: {
      name: "Solana",
      short: "Solana",
      type: "solana",
      rpcUrls: ["https://api.mainnet-beta.solana.com"],
      explorer: "https://solscan.io/token/",
      explorerAddr: "https://solscan.io/account/",
      buyName: "Jupiter",
      buyUrl: "https://jup.ag/swap/SOL-{ca}",
      dexscreener: "solana",
      color: "#9945FF",
      icon: "assets/networks/solana.svg",
    },
    robinhood: {
      name: "Robinhood Chain",
      short: "Robinhood",
      type: "evm",
      chainId: 4663,
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://rpc.mainnet.chain.robinhood.com"],
      explorer: "https://robinhoodchain.blockscout.com/token/",
      explorerAddr: "https://robinhoodchain.blockscout.com/address/",
      buyName: "Uniswap",
      buyUrl: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency={ca}",
      dexscreener: "",
      color: "#CCFF00",
      icon: "assets/networks/robinhood.svg",
    },
    base: {
      name: "Base",
      short: "Base",
      type: "evm",
      chainId: 8453,
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://mainnet.base.org"],
      explorer: "https://basescan.org/token/",
      explorerAddr: "https://basescan.org/address/",
      buyName: "Uniswap",
      buyUrl: "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency={ca}",
      dexscreener: "base",
      color: "#0052FF",
      icon: "assets/networks/base.svg",
    },
    bsc: {
      name: "BNB Smart Chain",
      short: "BSC",
      type: "evm",
      chainId: 56,
      nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
      rpcUrls: ["https://bsc-dataseed.bnbchain.org"],
      explorer: "https://bscscan.com/token/",
      explorerAddr: "https://bscscan.com/address/",
      buyName: "PancakeSwap",
      buyUrl: "https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency={ca}",
      dexscreener: "bsc",
      color: "#F0B90B",
      icon: "assets/networks/bsc.svg",
    },
  },

  /** Tokenomics shown as cards. Leave value "" to hide a card. Total supply is read on-chain. */
  tokenomics: [
    { label: "Buy tax", value: "" },
    { label: "Sell tax", value: "" },
    { label: "Liquidity", value: "" },
    { label: "Contract", value: "" },
  ],
};
