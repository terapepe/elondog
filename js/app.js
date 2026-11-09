/* ELON DOG — page logic: CA box, chains, tokenomics, gallery, wallet modals. */
(function () {
  const CFG = window.EDOG_CONFIG;
  const T = CFG.project.ticker;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const short = (a, l = 6, r = 4) => (a && a.length > l + r + 3 ? a.slice(0, l) + "…" + a.slice(-r) : a || "");
  const fmt = (v, max = 2) => {
    if (v === null || v === undefined || v === "") return "—";
    const [i, f = ""] = String(v).split(".");
    const int = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const frac = f.slice(0, max).replace(/0+$/, "");
    return frac ? `${int}.${frac}` : int;
  };

  const GALLERY = [
    { src: "assets/img/13d5502f-34b2-4199-ac70-5bf27aae3848.png", title: "Captain EDOG" },
    { src: "assets/art/to-the-moon.svg", title: "To the moon" },
    { src: "assets/art/moon-landing.svg", title: "Moon landing" },
    { src: "assets/art/mars-mission.svg", title: "Mars mission" },
    { src: "assets/art/diamond-paws.svg", title: "Diamond paws" },
    { src: "assets/art/green-candles.svg", title: "Green candles" },
    { src: "assets/art/coin-shower.svg", title: "Coin shower" },
    { src: "assets/art/multichain.svg", title: "4 chains, 1 dog", multiOnly: true },
    { src: "assets/art/spacewalk.svg", title: "Spacewalk" },
    { src: "assets/art/hodl-nap.svg", title: "Just HODL" },
    { src: "assets/art/portrait.svg", title: "Portrait" },
  ];

  const App = {
    caNet: Chain.primary(),

    toast(msg) {
      const t = $("#toast"); t.textContent = msg; t.hidden = false;
      clearTimeout(this._tt); this._tt = setTimeout(() => (t.hidden = true), 2200);
    },
    async copy(text) {
      try { await navigator.clipboard.writeText(text); }
      catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
      this.toast("Copied!");
    },
    openModal(html, wide) {
      $("#modalBody").innerHTML = html;
      $(".modal-card").classList.toggle("wide", !!wide);
      $("#modal").hidden = false; document.body.style.overflow = "hidden";
    },
    closeModal() { $("#modal").hidden = true; document.body.style.overflow = ""; },

    /* ---------- Static bindings ---------- */
    bindSocial() {
      document.querySelectorAll("[data-x-link]").forEach((a) => (a.href = CFG.social.x));
      document.querySelectorAll("[data-x-handle]").forEach((s) => (s.textContent = CFG.social.xHandle));
      if (CFG.social.telegram) { const tg = $("#tgLink"); tg.href = CFG.social.telegram; tg.hidden = false; }
      $("#year").textContent = new Date().getFullYear();
      const words = ["$EDOG", "TO THE MOON", ...Chain.list().map((n) => n.name.toUpperCase()), "DIAMOND PAWS", "JUST HODL", "GOODEST BOY"];
      const line = words.map((w) => `<span>${w}</span><img src="assets/art/logo.svg" alt="">`).join("");
      $("#marquee").innerHTML = line + line;
    },

    /* ---------- Hero CA box ---------- */
    renderCA() {
      $("#caTabs").hidden = Chain.list().length < 2;
      $("#caTabs").innerHTML = Chain.list().map((n) => `<button role="tab" class="ca-tab ${n.id === this.caNet ? "active" : ""}" style="--net:${n.color}" data-action="ca-tab" data-net="${n.id}">
        <img src="${n.icon}" alt="">${esc(n.short)}</button>`).join("");
      const n = Chain.get(this.caNet), ca = Chain.ca(this.caNet);
      $("#caNet").textContent = "· " + n.name;
      $("#caValue").textContent = ca || "Coming soon";
      $("#caValue").classList.toggle("empty", !ca);
      $("#caCopy").disabled = !ca;
      $("#caLinks").innerHTML = ca
        ? [[Chain.chartUrl(n.id), "Chart"], [Chain.explorerToken(n.id), "Explorer"]]
            .filter((l) => l[0]).map(([u, t]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")
        : `<span class="muted">CA will be announced on <a href="${esc(CFG.social.x)}" target="_blank" rel="noopener">${esc(CFG.social.xHandle)}</a>. Don't buy fakes.</span>`;
    },

    /* ---------- Chains section (live supply) ---------- */
    renderChains() {
      $("#chainGrid").innerHTML = Chain.list().map((n) => {
        const ca = Chain.ca(n.id);
        return `<div class="chain-card" style="--net:${n.color}">
          <div class="chain-head"><img src="${n.icon}" alt=""><div><b>${esc(n.name)}</b><div class="muted small">${n.type === "solana" ? "SPL token" : "EVM · Chain ID " + n.chainId}</div></div></div>
          <div class="kv"><span>CA</span>${ca ? `<code>${esc(short(ca, 8, 6))}</code><button class="link-btn" data-action="copy" data-text="${esc(ca)}">copy</button>` : `<span class="soon">Coming soon</span>`}</div>
          <div class="kv"><span>Total supply</span><b data-supply="${n.id}">${ca ? "Loading…" : "—"}</b></div>
          <div class="chain-actions">
            ${ca ? `<button class="btn btn-primary btn-sm" data-action="copy" data-text="${esc(ca)}">Copy CA</button>` : `<button class="btn btn-ghost btn-sm" disabled>Copy CA</button>`}
            ${Chain.chartUrl(n.id) ? `<a class="btn btn-ghost btn-sm" href="${esc(Chain.chartUrl(n.id))}" target="_blank" rel="noopener">Chart</a>` : ""}
          </div>
        </div>`;
      }).join("");
    },

    async loadSupplies() {
      const results = await Promise.all(Chain.list().map(async (n) => [n.id, Chain.ca(n.id) ? await Chain.totalSupply(n.id) : null]));
      for (const [id, v] of results) {
        const el = $(`[data-supply="${id}"]`);
        if (el && Chain.ca(id)) el.textContent = v !== null ? fmt(v, 0) : "Unavailable";
      }
      this.renderTokenomics(results);
    },

    renderTokenomics(supplies = []) {
      const live = supplies.filter(([, v]) => v !== null);
      const cards = [];
      if (live.length) {
        const [id, v] = live.find(([i]) => i === Chain.primary()) || live[0];
        cards.push({ label: "Total supply", value: fmt(v, 0), note: "Live on " + Chain.get(id).name });
      }
      const nets = Chain.list();
      cards.push({ label: "Ticker", value: T }, nets.length === 1
        ? { label: "Network", value: nets[0].short, note: nets[0].type === "evm" ? "EVM · Chain ID " + nets[0].chainId : nets[0].name }
        : { label: "Networks", value: String(nets.length), note: nets.map((n) => n.short).join(" · ") });
      CFG.tokenomics.filter((t) => t.value).forEach((t) => cards.push(t));
      $("#tokoCards").innerHTML = cards.map((c) => `<div class="toko-card"><span class="k">${esc(c.label)}</span><b>${esc(c.value)}</b>${c.note ? `<span class="muted small">${esc(c.note)}</span>` : ""}</div>`).join("");
    },

    renderGallery() {
      this.gallery = GALLERY.filter((g) => !(Chain.isSingle() && g.multiOnly));
      $("#gallery-grid").innerHTML = this.gallery.map((g, i) => `<button class="g-item ${i === 0 ? "big" : ""}" data-action="view-img" data-i="${i}">
        <img src="${g.src}" alt="${esc(g.title)}" loading="lazy"><span>${esc(g.title)}</span></button>`).join("");
    },

    /* ---------- Modals ---------- */
    copyModal() {
      return `<h3 id="modalTitle">Copy ${T} CA</h3>
        <p class="sub">Pick your chain and copy its contract address. Robinhood, Base and BSC share the same CA.</p>
        <div class="net-list">${Chain.list().map((n) => {
          const ca = Chain.ca(n.id);
          return ca ? `<button class="net-opt" style="--net:${n.color}" data-action="copy" data-text="${esc(ca)}"><img src="${n.icon}" alt=""><div><div class="n">${esc(n.name)}</div><div class="d mono">${esc(short(ca, 8, 6))} · ${esc(n.dex)}</div></div><span class="go">Copy</span></button>`
            : `<div class="net-opt off" style="--net:${n.color}"><img src="${n.icon}" alt=""><div><div class="n">${esc(n.name)}</div><div class="d">Coming soon</div></div></div>`;
        }).join("")}</div>
        <div class="notice">Always verify the CA on ${esc(CFG.social.xHandle)} before buying.</div>`;
    },

    connectModal(netId) {
      const n = Chain.get(netId);
      const wallets = Wallet.wallets(n.type);
      return `<h3 id="modalTitle">Connect wallet</h3>
        <p class="sub">${Chain.list().length > 1 ? "Choose a network, then your wallet." : "Choose your wallet."}</p>
        <div class="net-tabs" ${Chain.list().length > 1 ? "" : "hidden"}>${Chain.list().map((x) => `<button class="ca-tab ${x.id === netId ? "active" : ""}" style="--net:${x.color}" data-action="pick-net" data-net="${x.id}"><img src="${x.icon}" alt="">${esc(x.short)}</button>`).join("")}</div>
        <p class="muted small" style="margin:12px 0 0">${esc(n.name)} · ${n.type === "solana" ? "Solana wallets" : "EVM · Chain ID " + n.chainId + " · network is added/switched automatically"}</p>
        <div class="wallet-list">${wallets.map((w) => w.installed
          ? `<button class="wallet-opt" data-action="connect-wallet" data-net="${netId}" data-key="${esc(w.key)}"><img src="${esc(w.icon || n.icon)}" alt=""><b>${esc(w.name)}</b><span class="muted small">Detected</span></button>`
          : `<a class="wallet-opt" href="${esc(w.url)}" target="_blank" rel="noopener"><img src="${n.icon}" alt=""><b>${esc(w.name)}</b><span class="muted small">Install ↗</span></a>`).join("")}</div>
        <div id="connMsg"></div>`;
    },

    accountModal() {
      const w = Wallet.state, n = Chain.get(w.network);
      const others = Chain.list().filter((x) => x.type === "evm" && x.id !== w.network);
      return `<h3 id="modalTitle">Your wallet</h3>
        <p class="sub">${esc(w.walletName)} · ${n ? esc(n.name) : "Unsupported network"}</p>
        <div class="param-list">
          <div class="param"><span>Address</span><code>${esc(short(w.address, 10, 8))}</code></div>
          <div class="param"><span>${T} balance</span><b>${w.balance !== null ? fmt(w.balance) + " " + T : (n && Chain.ca(n.id) ? "—" : "CA not set yet")}</b></div>
        </div>
        ${w.type === "evm" && others.length ? `<p class="muted small" style="margin:16px 0 8px">Switch network</p><div class="net-tabs">${others.map((x) => `<button class="ca-tab" style="--net:${x.color}" data-action="switch-net" data-net="${x.id}"><img src="${x.icon}" alt="">${esc(x.short)}</button>`).join("")}</div>` : ""}
        <div class="row-actions">
          <button class="btn btn-ghost btn-sm" data-action="copy" data-text="${esc(w.address)}">Copy address</button>
          ${n ? `<a class="btn btn-ghost btn-sm" href="${esc(Chain.explorerAddr(n.id, w.address))}" target="_blank" rel="noopener">Explorer</a>` : ""}
          <button class="btn btn-ghost btn-sm" data-action="disconnect" style="margin-left:auto">Disconnect</button>
        </div>`;
    },

    updateWalletBtn() {
      const w = Wallet.state, btn = $("#walletBtn");
      if (!w.connected) { btn.textContent = "Connect"; btn.dataset.action = "open-connect"; return; }
      const n = Chain.get(w.network);
      btn.dataset.action = "open-account";
      btn.innerHTML = `<span class="wallet-chip">${n ? `<img src="${n.icon}" alt="">` : "⚠"}${esc(short(w.address, 4, 4))}</span>`;
    },

    async handle(action, el) {
      switch (action) {
        case "toggle-nav": return $("#nav").classList.toggle("open");
        case "ca-tab": this.caNet = el.dataset.net; return this.renderCA();
        case "copy-ca": { const ca = Chain.ca(this.caNet); return ca && this.copy(ca); }
        case "copy": return this.copy(el.dataset.text);
        case "open-copy": {
          if (Chain.isSingle()) { const ca = Chain.ca(Chain.primary()); return ca ? this.copy(ca) : this.toast("CA coming soon"); }
          return this.openModal(this.copyModal());
        }
        case "open-connect": return this.openModal(this.connectModal(Wallet.state.network || Chain.primary()));
        case "pick-net": return ($("#modalBody").innerHTML = this.connectModal(el.dataset.net));
        case "open-account": return this.openModal(this.accountModal());
        case "close-modal": return this.closeModal();
        case "disconnect": await Wallet.disconnect(); return this.closeModal();
        case "view-img": {
          const g = this.gallery[+el.dataset.i];
          return this.openModal(`<h3 id="modalTitle">${esc(g.title)}</h3><img class="lightbox" src="${g.src}" alt="${esc(g.title)}"><div class="row-actions"><a class="btn btn-primary btn-sm" href="${g.src}" download>Download</a></div>`, true);
        }
        case "connect-wallet": {
          el.disabled = true;
          try { await Wallet.connect(el.dataset.net, el.dataset.key); this.closeModal(); this.toast("Wallet connected"); }
          catch (e) { el.disabled = false; $("#connMsg").innerHTML = `<div class="notice err">${esc(e.message || "Connection rejected")}</div>`; }
          return;
        }
        case "switch-net": {
          try { await Wallet.switchNetwork(el.dataset.net); this.closeModal(); }
          catch (e) { this.toast(e.message || "Switch rejected"); }
          return;
        }
      }
    },

    /** Apply single/multi layout: theme vars from config + texts from CFG.text (data-t / data-t-html / data-t-src). */
    applyMode() {
      const single = Chain.isSingle(), n = Chain.get(Chain.primary()), body = document.body;
      body.dataset.mode = single ? "single" : "multi";
      body.dataset.net = single ? n.id : "";
      const th = { ...CFG.theme, ...(single ? n.theme : {}) };
      [["--gold", th.accent], ["--orange", th.accent2], ["--ink", th.ink], ["--cyan", th.kicker], ["--glow-1", th.bg1], ["--glow-2", th.bg2]]
        .forEach(([k, v]) => v && body.style.setProperty(k, v));
      $("#netKicker").textContent = single ? n.name : Chain.list().map((x) => x.short).join(" · ");
      if (single) { const p = $("#singlePlanet"); p.style.backgroundImage = `url(${n.icon})`; p.style.color = n.color; }

      const texts = { ...CFG.text[single ? "single" : "multi"], ...(single ? n.text : {}) };
      const vars = {
        ticker: T, name: n.name, short: n.short, native: n.native, dex: n.dex, wallets: n.wallets, walletNote: n.walletNote || "",
        pitch: n.pitch, chainInfo: n.type === "evm" ? ` (EVM, Chain ID ${n.chainId})` : " (SPL token)",
        x: `<a href="${esc(CFG.social.x)}" target="_blank" rel="noopener">${esc(CFG.social.xHandle)}</a>`,
      };
      const fill = (key, html) => String(texts[key] ?? "").replace(/\{(\w+)\}/g, (m, k) => (k in vars ? (html || k !== "x" ? vars[k] : CFG.social.xHandle) : m));
      document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = fill(el.dataset.t, false)));
      document.querySelectorAll("[data-t-html]").forEach((el) => (el.innerHTML = fill(el.dataset.tHtml, true)));
      document.querySelectorAll("[data-t-src]").forEach((el) => (el.src = fill(el.dataset.tSrc, false)));
    },

    init() {
      this.applyMode();
      this.bindSocial();
      this.renderCA();
      this.renderChains();
      this.renderTokenomics();
      this.renderGallery();
      this.loadSupplies();

      document.addEventListener("click", (e) => {
        const el = e.target.closest("[data-action]");
        if (el) { e.preventDefault(); this.handle(el.dataset.action, el); }
        else if (e.target.closest(".nav a")) $("#nav").classList.remove("open");
      });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") this.closeModal(); });
      window.addEventListener("wallet:change", () => {
        this.updateWalletBtn();
        if (!$("#modal").hidden && $("#modalBody [data-action='disconnect']")) $("#modalBody").innerHTML = this.accountModal();
      });
      Wallet.init();
      this.updateWalletBtn();
    },
  };

  window.App = App;
  App.init();
})();
