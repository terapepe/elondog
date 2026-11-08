# ELON DOG ($EDOG) — Website

Static site (HTML/CSS/vanilla JS, no build step). Networks: **Solana, Robinhood Chain, Base, BSC**.

- Wallet login: EVM wallets via EIP-6963 (MetaMask, Rabby, Coinbase…) with automatic network add/switch for Robinhood / Base / BSC; Phantom, Solflare, Backpack for Solana.
- Hero CA box with per-chain tabs, copy button, Buy / Chart / Explorer links.
- Total supply and wallet $EDOG balance are read live on-chain (JSON-RPC, no libraries).

## Run

`python3 -m http.server` → `http://localhost:8000`. Works on GitHub Pages / any static host.

## Configure — `js/config.js`

| Key | Purpose |
|---|---|
| `mode` | `"multi"` = 4 networks · `"single"` = only `singleNetwork` (Robinhood layout & lime theme) |
| `singleNetwork` | Network used in single mode (default `robinhood`) |
| `token.evm` | $EDOG CA shared by all EVM networks (Robinhood, Base, BSC) |
| `token.sol` | $EDOG mint on Solana (`""` = "Coming soon") |
| `networks.<id>.rpcUrls / explorer / buyUrl` | Network settings (`{ca}` is replaced in `buyUrl`) |
| `primaryNetwork` | Tab shown first in the CA box and wallet picker |
| `social.x / xHandle / telegram` | Social links (Telegram hidden when empty) |
| `tokenomics[]` | Extra tokenomics cards; empty `value` = hidden |

No demo data: anything not configured or not readable on-chain is hidden or shown as "—".

## Images

- `assets/img/edog-face.webp` — hero / gallery photo.
- `assets/art/*.svg` — original Shiba-astronaut illustrations (logo, gallery, sections). Add more by appending to `GALLERY` in `js/app.js`.

## Disclaimer

$EDOG is a community meme coin, not affiliated with Elon Musk, SpaceX, Tesla or X Corp.
