window.EDOG_CONFIG = {
  project: {
    name: "ELONDOG Robinhood",
    ticker: "$EDOG",
    symbol: "EDOG",
    tagline: "The goodest boy in the galaxy.",
    decimalsFallback: 18,
  },

  social: {
    x: "https://x.com/_ELONDOG",
    xHandle: "@_ELONDOG",
    telegram: "",
  },

  mode: "single",
  singleNetwork: "robinhood",

  token: {
    evm: "",
    sol: "",
  },

  primaryNetwork: "solana",

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

  tokenomics: [
    { label: "Buy tax", value: "" },
    { label: "Sell tax", value: "" },
    { label: "Liquidity", value: "" },
    { label: "Contract", value: "" },
  ],
};

/* ---- hybot sync: CA, token name, symbol, X and Telegram follow the newest token hybot launched for this site ----
   https://hybot.xyz/api/site-token?site=<domain> · values above are the fallback when hybot has none / is unreachable.
   Links in the page that point to the old X / Telegram are updated, or hidden when the launched token has none. */
(function (C) {
  if (!C || typeof window === "undefined") return;
  var DOMAIN = "elondog.xyz";
  var host = String(location.hostname || "").replace(/^www\./, "");
  var site = /\./.test(host) && !/(^|\.)(vercel\.app|localhost|127\.0\.0\.1)$/.test(host) ? host : DOMAIN;
  if (!site) return;
  var d = null, key = "hybot:" + site;
  try { var c = JSON.parse(localStorage.getItem(key) || "null"); if (c && Date.now() - c.t < 60000) d = c.d; } catch (e) {}
  if (!d) {
    try {
      var x = new XMLHttpRequest();
      x.open("GET", "https://hybot.xyz/api/site-token?site=" + encodeURIComponent(site), false); // sync: config must be ready before the app scripts run
      x.send();
      if (x.status === 200) { d = JSON.parse(x.responseText); try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {} }
    } catch (e) {}
  }
  if (!d || !d.found || !/^0x[0-9a-fA-F]{40}$/.test(d.ca || "")) return;
  var handle = function (u) { var m = String(u || "").match(/(?:x|twitter)\.com\/@?([A-Za-z0-9_]{1,15})|^@?([A-Za-z0-9_]{1,15})$/); return m ? (m[1] || m[2]) : ""; };
  var tgName = function (u) { var m = String(u || "").match(/t\.me\/([\w+/-]+)/); return m ? m[1].replace(/\/+$/, "") : String(u || "").replace(/^@/, ""); };
  var X0 = C.social && C.social.x || "", TG0 = C.social && C.social.telegram || "";
  var oldX = handle(X0), oldTg = tgName(TG0);
  var X = d.x || "", TG = d.telegram || "", SYM = d.symbol, NAME = d.name, CA = d.ca;
  // no X / Telegram on the launched token → config keeps the old link so the app renders as usual, and the link fixer below hides it
  var XV = X || X0, TGV = TG || TG0, XH = handle(XV);
  // single-network per-chain CA overrides would win over the shared address → clear them
  var net = C.singleNetwork || C.singleChain || (C.token && C.token.singleNetwork);
  [C.networks, C.chains, C.token && C.token.chains].forEach(function (m) { if (m && net && m[net] && "ca" in m[net]) m[net].ca = ""; });
  C.project.name = NAME; C.project.ticker = "$" + SYM; C.project.symbol = SYM;
  C.social.x = XV; C.social.xHandle = XH ? "@" + XH : ""; C.social.telegram = TGV;
  C.token.evm = CA;
  // page links still pointing to the old X / Telegram (hard-coded or rendered later)
  var fix = function (root) {
    var as = root.querySelectorAll ? root.querySelectorAll("a[href]") : [];
    for (var i = 0; i < as.length; i++) {
      var a = as[i], h = a.getAttribute("href") || "";
      if (oldX && new RegExp("(x|twitter)\\.com/@?" + oldX + "(?![A-Za-z0-9_])", "i").test(h) && !/intent|share/i.test(h)) {
        if (X) { if (h !== X) { a.href = X; if (XH && oldX !== XH) a.innerHTML = a.innerHTML.split("@" + oldX).join("@" + XH); } }
        else a.style.display = "none";
      } else if (oldTg && /t\.me\//i.test(h) && tgName(h).toLowerCase() === oldTg.toLowerCase()) {
        if (TG) { if (h !== TG) a.href = TG; } else a.style.display = "none";
      }
    }
  };
  var start = function () { fix(document); new MutationObserver(function (ms) { ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { fix(n); if (n.matches && n.matches("a[href]")) fix(n.parentNode || n); } }); }); }).observe(document.documentElement, { childList: true, subtree: true }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})(window.EDOG_CONFIG);
