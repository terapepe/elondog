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
   *  "multi"  → luôn hiển thị đủ 4 mạng: Solana, Robinhood, Base, BSC
   *  "single" → chỉ hiển thị mạng `singleNetwork` (solana | robinhood | base | bsc),
   *             giao diện + nội dung lấy theo networks.<id>.theme / text.single
   */
  mode: "single",
  singleNetwork: "solana",

  /** CA: Robinhood, Base, BSC dùng chung `evm`; Solana dùng `sol`. "" = Coming soon */
  token: {
    evm: "",
    sol: "",
  },

  /** Tab mở đầu tiên ở chế độ multi */
  primaryNetwork: "solana",

  /** Theme chế độ multi. accent = màu chính, accent2 = màu gradient, ink = chữ trên nền accent, kicker = màu tiêu đề nhỏ, bg1/bg2 = 2 vầng sáng nền */
  theme: { accent: "#ffc83d", accent2: "#ff8a1f", ink: "#2a1600", kicker: "#5ee7ff", bg1: "#22307a", bg2: "#3a1d5e" },

  networks: {
    solana: {
      name: "Solana",
      short: "Solana",
      type: "solana",
      native: "SOL",
      rpcUrls: ["https://api.mainnet-beta.solana.com"],
      explorer: "https://solscan.io/token/",
      explorerAddr: "https://solscan.io/account/",
      dex: "Jupiter",
      dexscreener: "solana",
      wallets: "Phantom, Solflare or Backpack",
      walletNote: "",
      pitch: "lightning fast and dirt cheap",
      color: "#9945FF",
      icon: "assets/networks/solana.svg",
      theme: { accent: "#14f195", accent2: "#9945ff", ink: "#071a10", kicker: "#c08bff", bg1: "#3b1a6e", bg2: "#0c3b2e" },
    },
    robinhood: {
      name: "Robinhood Chain",
      short: "Robinhood",
      type: "evm",
      chainId: 4663,
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      native: "ETH",
      rpcUrls: ["https://rpc.mainnet.chain.robinhood.com"],
      explorer: "https://robinhoodchain.blockscout.com/token/",
      explorerAddr: "https://robinhoodchain.blockscout.com/address/",
      dex: "Uniswap",
      dexscreener: "",
      wallets: "MetaMask, Rabby or Coinbase Wallet",
      walletNote: " Robinhood Chain is added automatically when you connect.",
      pitch: "fast and cheap EVM",
      color: "#CCFF00",
      icon: "assets/networks/robinhood.svg",
      theme: { accent: "#ccff00", accent2: "#7dff3a", ink: "#10200a", kicker: "#ccff00", bg1: "#1f3a12", bg2: "#12301f" },
    },
    base: {
      name: "Base",
      short: "Base",
      type: "evm",
      chainId: 8453,
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      native: "ETH",
      rpcUrls: ["https://mainnet.base.org"],
      explorer: "https://basescan.org/token/",
      explorerAddr: "https://basescan.org/address/",
      dex: "Uniswap",
      dexscreener: "base",
      wallets: "MetaMask, Rabby or Coinbase Wallet",
      walletNote: " Base is added automatically when you connect.",
      pitch: "onchain for everyone",
      color: "#0052FF",
      icon: "assets/networks/base.svg",
      theme: { accent: "#5b9bff", accent2: "#0052ff", ink: "#ffffff", kicker: "#8fb8ff", bg1: "#0a2a8a", bg2: "#0b1f5c" },
    },
    bsc: {
      name: "BNB Smart Chain",
      short: "BSC",
      type: "evm",
      chainId: 56,
      nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
      native: "BNB",
      rpcUrls: ["https://bsc-dataseed.bnbchain.org"],
      explorer: "https://bscscan.com/token/",
      explorerAddr: "https://bscscan.com/address/",
      dex: "PancakeSwap",
      dexscreener: "bsc",
      wallets: "MetaMask, Trust Wallet or Rabby",
      walletNote: " BSC is added automatically when you connect.",
      pitch: "huge liquidity, tiny fees",
      color: "#F0B90B",
      icon: "assets/networks/bsc.svg",
      theme: { accent: "#f0b90b", accent2: "#ffd84d", ink: "#1e1600", kicker: "#ffd84d", bg1: "#4a3a05", bg2: "#2b2208" },
    },
  },

  /**
   * Nội dung các đoạn text. Placeholder:
   *   {ticker} {name} {short} {native} {dex} {wallets} {walletNote} {pitch} {chainInfo} {x}
   * Muốn 1 mạng có text riêng ở chế độ single: thêm networks.<id>.text = { key: "..." } để ghi đè.
   */
  text: {
    multi: {
      navChains: "Chains",
      aboutHtml: "Born from internet meme culture and a love for space, <b>{ticker}</b> is a community-driven token living on four chains at once: <b>Solana, Robinhood Chain, Base and BNB Smart Chain</b>. One dog, one ticker, four launchpads.",
      tick: "Multichain — pick the chain you already use",
      chainsKicker: "4 launchpads",
      chainsTitle: "One dog. Four chains.",
      chainsNoteHtml: "Robinhood, Base and BSC share the <b>same CA</b>; Solana has its own mint. Supply is read live from each network. Only trust CAs shown here and on {x}.",
      step1: "Phantom, Solflare or Backpack for Solana. MetaMask, Rabby or Coinbase Wallet for Robinhood Chain, Base and BSC.",
      step2: "Fund your wallet with SOL, ETH (Robinhood / Base) or BNB (BSC) from an exchange or bridge.",
      step3: "Copy the official {ticker} contract address for your chain — same CA on Robinhood, Base and BSC.",
      step4: "Paste the CA into Jupiter (Solana), Uniswap (Robinhood / Base) or PancakeSwap (BSC), swap and HODL.",
      faqQ: "Which chains is {ticker} on?",
      faqA: "Solana, Robinhood Chain, Base and BNB Smart Chain. Robinhood, Base and BSC use the same contract address; Solana has its own mint.",
      roadmap: "Live on 4 chains",
      roadmapImg: "assets/art/multichain.svg",
    },
    single: {
      navChains: "Network",
      aboutHtml: "Born from internet meme culture and a love for space, <b>{ticker}</b> is a community-driven token living on <b>{name}</b>. One dog, one ticker, one launchpad.",
      tick: "Built on {name} — {pitch}",
      chainsKicker: "Home chain",
      chainsTitle: "Built on {name}.",
      chainsNoteHtml: "Contract address and supply are read live from {name}. Only trust the CA shown here and on {x}.",
      step1: "Install {wallets}.{walletNote}",
      step2: "Fund your wallet with {native} on {name} from an exchange or bridge.",
      step3: "Copy the official {ticker} contract address from the top of this page.",
      step4: "Paste the CA into {dex}, swap {native} for {ticker} and HODL.",
      faqQ: "Which chain is {ticker} on?",
      faqA: "{name}{chainInfo}. Always verify the CA before buying.",
      roadmap: "{name} ecosystem push",
      roadmapImg: "assets/art/spacewalk.svg",
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
