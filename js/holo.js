/* ELON DOG — hologram interactions: pointer light, 3D tilt + sheen, hero parallax, depth reveal. */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const root = document.documentElement;

  const TILT = ".ca-box, .chain-card, .toko-card, .step, .phase, .g-item, .about-art, .hero-art";
  const MAX = { ".hero-art": 14, ".g-item": 10, default: 7 };

  /* Depth reveal for floating layers */
  const REVEAL = ".section-head, .about-art, .about > div, .chain-card, .toko-art, .toko-card, .step, .g-item, .phase, .faq, .center";
  function markReveal() {
    if (reduce || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    document.querySelectorAll(REVEAL).forEach((el) => {
      if (el.classList.contains("reveal")) return;
      const sibs = [...el.parentElement.children].filter((c) => c.matches(REVEAL));
      el.style.setProperty("--d", Math.min(sibs.indexOf(el), 6) * 0.07 + "s");
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* Tilt targets get [data-tilt] (also re-applied after app.js re-renders) */
  function markTilt() { document.querySelectorAll(TILT).forEach((el) => el.setAttribute("data-tilt", "")); }

  let active = null, raf = 0, last = null;
  function frame() {
    raf = 0;
    const e = last; if (!e) return;
    root.style.setProperty("--px", e.clientX + "px");
    root.style.setProperty("--py", e.clientY + "px");
    root.style.setProperty("--pxn", (e.clientX / innerWidth).toFixed(3));

    const el = fine && !reduce ? e.target.closest?.("[data-tilt]") : null;
    if (active && active !== el) reset(active);
    if (!el) { active = null; return; }
    active = el;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    const key = Object.keys(MAX).find((k) => k !== "default" && el.matches(k));
    const m = MAX[key] ?? MAX.default;
    el.classList.add("is-tilting");
    el.style.setProperty("--rx", ((0.5 - y) * m).toFixed(2) + "deg");
    el.style.setProperty("--ry", ((x - 0.5) * m).toFixed(2) + "deg");
    el.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
    el.style.setProperty("--my", (y * 100).toFixed(1) + "%");
    el.style.setProperty("--mxn", x.toFixed(3));
    el.style.setProperty("--myn", y.toFixed(3));
  }
  function reset(el) {
    el.classList.remove("is-tilting");
    ["--rx", "--ry"].forEach((p) => el.style.removeProperty(p));
  }

  function init() {
    markTilt();
    markReveal();
    if (reduce) return;
    addEventListener("pointermove", (e) => { last = e; if (!raf) raf = requestAnimationFrame(frame); }, { passive: true });
    document.addEventListener("pointerleave", () => active && reset(active));
    // app.js re-renders gallery/chains/tokenomics → re-mark new nodes
    new MutationObserver(() => { markTilt(); markReveal(); })
      .observe(document.querySelector("main"), { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
