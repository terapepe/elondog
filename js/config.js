/**
 * ELON DOG ($EDOG) — site configuration.
 * Edit this file only: CA per network, socials, tokenomics text.
 * Empty values are hidden on the site (no placeholder data is ever shown).
 */
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
    telegram: "", // e.g. "https://t.me/..."
  },

  /**
   * Site mode:
   *  "multi"  = 4 networks (Solana, Robinhood, Base, BSC)
   *  "single" = 1 network only (singleNetwork), Robinhood-themed layout
   */
  mode: "single",
  singleNetwork: "robinhood",

  /** Network shown first + used for wallet login by default (multi mode). */
  primaryNetwork: "solana",

  /**
   * Contract address per network. Leave "" until deployed → shown as "Coming soon".
   * Total supply / holder balance are read live on-chain from these addresses.
   */
  networks: {
    solana: {
      name: "Solana",
      short: "Solana",
      type: "solana",
      ca: "",
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
      ca: "",
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
      ca: "",
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
      ca: "",
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
