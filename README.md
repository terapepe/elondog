# ELON DOG ($EDOG) — Website

Static site (HTML/CSS/vanilla JS, no build step). Networks: **Solana, Robinhood Chain, Base, BSC**.

- Wallet login: EVM wallets via EIP-6963 (MetaMask, Rabby, Coinbase…) with automatic network add/switch for Robinhood / Base / BSC; Phantom, Solflare, Backpack for Solana.
- Hero CA box with per-chain tabs, Copy CA buttons, Chart / Explorer links (no Buy buttons).
- Total supply and wallet $EDOG balance are read live on-chain (JSON-RPC, no libraries).

## Run

`python3 -m http.server` → `http://localhost:8000`. Works on GitHub Pages / any static host.

## Configure — `js/config.js`

| Key | Purpose |
|---|---|
| `mode` | `"multi"` = always all 4 networks · `"single"` = only `singleNetwork` |
| `singleNetwork` | `solana` \| `robinhood` \| `base` \| `bsc` — layout, colors & texts follow that network |
| `theme` | Multi-mode colors (`accent`, `accent2`, `ink`, `kicker`, `bg1`, `bg2`) |
| `networks.<id>.theme` | Single-mode colors for that network |
| `networks.<id>.dex / wallets / walletNote / pitch / native` | Values used in single-mode texts |
| `networks.<id>.text` | Optional per-network overrides of `text.single` keys |
| `text.multi / text.single` | All mode-dependent copy (about, chains, how-to-buy, FAQ, roadmap). Placeholders: `{ticker} {name} {short} {native} {dex} {wallets} {walletNote} {pitch} {chainInfo} {x}` |
| `token.evm` | $EDOG CA shared by all EVM networks (Robinhood, Base, BSC) |
| `token.sol` | $EDOG mint on Solana (`""` = "Coming soon") |
| `networks.<id>.rpcUrls / explorer / dexscreener` | Network settings |
| `primaryNetwork` | Tab shown first in the CA box and wallet picker |
| `social.x / xHandle / telegram` | Social links (Telegram hidden when empty) |
| `tokenomics[]` | Extra tokenomics cards; empty `value` = hidden |

No demo data: anything not configured or not readable on-chain is hidden or shown as "—".

## Images

- `assets/img/edog-face.webp` — hero / gallery photo.
- `assets/art/*.svg` — original Shiba-astronaut illustrations (logo, gallery, sections). Add more by appending to `GALLERY` in `js/app.js`.

## Disclaimer

$EDOG is a community meme coin, not affiliated with Elon Musk, SpaceX, Tesla or X Corp.
