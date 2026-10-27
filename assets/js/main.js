/**
 * Monta a página a partir de assets/js/data.js (CONFIG) e cuida das
 * interações. Para mudar conteúdo, edite apenas o data.js.
 */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined) continue;
      if (k === "html") node.innerHTML = v;
      else if (k === "class") node.className = v;
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c === null || c === undefined) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  };

  const svg = (paths, fill) =>
    `<svg viewBox="0 0 24 24" fill="${fill ? "currentColor" : "none"}" stroke="${fill ? "none" : "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

  const ICONS = {
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    whatsapp: svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
    chart: svg('<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>'),
    handshake: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    search: svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
    gears: svg('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>'),
    spark: svg('<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>'),
    award: svg('<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>'),
    building: svg('<path d="M3 21h18"/><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M10 21v-4h4v4"/>'),
    close: svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
    up: svg('<path d="m18 15-6-6-6 6"/>'),
  };

  const whatsappUrl = () =>
    `https://wa.me/${CONFIG.links.whatsappNumero}?text=${encodeURIComponent(CONFIG.links.whatsappMensagem)}`;
  const mailUrl = () => `mailto:${CONFIG.links.email}`;

  /* ---------- Capas gráficas dos cases (sem prints reais) ---------- */
  const COVERS = {
    presenca: () => {
      const bars = [46, 62, 54, 78, 70, 92, 84, 104];
      const rects = bars
        .map((h, i) => `<rect x="${44 + i * 44}" y="${232 - h * 1.3}" width="26" height="${h * 1.3}" rx="5" fill="${i > 4 ? "#1f8a5f" : "#cfd6df"}"/>`)
        .join("");
      return `${rects}<path d="M57 190 L101 172 L145 180 L189 150 L233 158 L277 118 L321 128 L365 96" fill="none" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="365" cy="96" r="6" fill="#0f1b2d"/>`;
    },
    salarios: () => {
      const rows = [0, 1, 2, 3, 4]
        .map((i) => {
          const w = 90 + i * 60;
          return `<rect x="44" y="${68 + i * 38}" width="${w}" height="22" rx="6" fill="${i === 4 ? "#1f8a5f" : i > 1 ? "#0f1b2d" : "#cfd6df"}"/><rect x="${44 + w + 12}" y="${75 + i * 38}" width="34" height="8" rx="4" fill="#dcdad3"/>`;
        })
        .join("");
      return rows;
    },
    recrutamento: () => {
      const f = [
        [44, 100, 392, "#cfd6df"],
        [76, 148, 328, "#9fb0c2"],
        [108, 196, 264, "#0f1b2d"],
        [140, 244, 200, "#1f8a5f"],
      ]
        .map(([x, y, w, c]) => `<rect x="${x}" y="${y - 28}" width="${w}" height="34" rx="8" fill="${c}"/>`)
        .join("");
      return `${f}<path d="M60 262 H420" stroke="#cfd6df" stroke-width="3" stroke-linecap="round"/><path d="M60 262 H250" stroke="#1f8a5f" stroke-width="3" stroke-linecap="round"/>`;
    },
    automacao: () =>
      `<rect x="40" y="104" width="100" height="92" rx="14" fill="#fff" stroke="#cfd6df" stroke-width="2"/><rect x="58" y="124" width="64" height="8" rx="4" fill="#cfd6df"/><rect x="58" y="142" width="46" height="8" rx="4" fill="#cfd6df"/><rect x="58" y="160" width="56" height="8" rx="4" fill="#cfd6df"/><rect x="190" y="104" width="100" height="92" rx="14" fill="#0f1b2d"/><path d="M240 124 L246 143 L265 150 L246 157 L240 176 L234 157 L215 150 L234 143 Z" fill="#5fd3a0"/><rect x="340" y="104" width="100" height="92" rx="14" fill="#fff" stroke="#1f8a5f" stroke-width="2"/><circle cx="390" cy="150" r="22" fill="#1f8a5f"/><path d="m380 150 7 8 14-16" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M146 150 H182 M296 150 H332" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round"/><path d="m174 142 8 8-8 8" fill="none" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="m324 142 8 8-8 8" fill="none" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    desempenho: () =>
      `<circle cx="64" cy="112" r="16" fill="#1f8a5f"/><path d="m56 112 6 6 10-12" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="100" y="104" width="336" height="16" rx="8" fill="#1f8a5f"/><circle cx="64" cy="164" r="16" fill="#0f1b2d"/><circle cx="64" cy="164" r="5" fill="#fff"/><rect x="100" y="156" width="336" height="16" rx="8" fill="#cfd6df"/><rect x="100" y="156" width="214" height="16" rx="8" fill="#0f1b2d"/><circle cx="64" cy="216" r="15" fill="#fff" stroke="#1f8a5f" stroke-width="3"/><rect x="100" y="208" width="336" height="16" rx="8" fill="#cfd6df"/><rect x="100" y="208" width="64" height="16" rx="8" fill="#9fd8bd"/>`,
    mobilidade: () => {
      const dots = (x0, color, hi) =>
        [0, 1, 2]
          .flatMap((c) => [0, 1].map((r) => [x0 + c * 44, 128 + r * 50, c === 2 && r === 1 && hi]))
          .map(([x, y, on]) => `<circle cx="${x}" cy="${y}" r="15" fill="${on ? "#1f8a5f" : color}"/>`)
          .join("");
      return `<rect x="44" y="84" width="168" height="150" rx="14" fill="#fff" stroke="#cfd6df" stroke-width="2"/><rect x="268" y="84" width="168" height="150" rx="14" fill="#fff" stroke="#1f8a5f" stroke-width="2"/>${dots(76, "#cfd6df", true)}${dots(300, "#cfd6df", false)}<circle cx="344" cy="178" r="15" fill="#1f8a5f"/><path d="M222 159 H258" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round"/><path d="m250 150 9 9-9 9" fill="none" stroke="#0f1b2d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    },
  };

  function coverNode(projeto, n) {
    if (projeto.imagem) {
      return el("img", {
        src: projeto.imagem,
        alt: projeto.imagemAlt || `Imagem do case ${projeto.titulo}`,
        loading: "lazy",
        decoding: "async",
        width: "480",
        height: "300",
      });
    }
    const draw = (COVERS[projeto.capa] || COVERS.presenca)();
    return el("div", {
      class: "cover",
      role: "img",
      "aria-label": `Capa ilustrativa do case ${projeto.titulo}`,
      html: `<svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="dp${n}" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#d9d6cf"/></pattern></defs><rect width="480" height="300" fill="#f2f1ee"/><rect width="480" height="300" fill="url(#dp${n})"/><text x="44" y="42" font-family="inherit" font-size="13" font-weight="700" letter-spacing="1.5" fill="#1f8a5f">CASE 0${n}</text>${draw}</svg>`,
    });
  }

  /* ---------- Render ---------- */
  function renderHero() {
    const p = CONFIG.perfil, l = CONFIG.links;
    $("hero-eyebrow").textContent = p.eyebrow;
    $("hero-nome").textContent = p.nome;
    $("hero-headline").textContent = p.headline;
    $("hero-frase").textContent = p.fraseApoio;
    $("hero-linha").textContent = p.linhaApoio;
    $("hero-cv").href = l.curriculo;
    $("hero-linkedin").href = l.linkedin;
    $("hero-whatsapp").href = whatsappUrl();
    $("hero-email").href = mailUrl();
    const foto = $("hero-foto");
    foto.src = l.fotoPerfil;
    foto.alt = l.fotoPerfilAlt;
  }

  function renderStats() {
    const ul = $("stats-list");
    CONFIG.destaques.forEach((d) =>
      ul.appendChild(
        el("li", { class: "stat" + (d.principal ? " is-main" : "") }, [
          el("strong", {}, d.valor),
          el("span", {}, d.rotulo),
        ])
      )
    );
  }

  function renderSobre() {
    const wrap = $("sobre-texto");
    CONFIG.perfil.sobre.forEach((t) => wrap.appendChild(el("p", {}, t)));
    $("resumo-titulo").textContent = CONFIG.resumo.titulo;
    CONFIG.resumo.itens.forEach((i) =>
      $("resumo-lista").appendChild(
        el("div", { class: "resumo-item" }, [el("dt", {}, i.rotulo), el("dd", {}, i.valor)])
      )
    );
  }

  function renderAtuacao() {
    $("atuacao-intro").textContent = CONFIG.atuacaoIntro;
    CONFIG.atuacao.forEach((a) =>
      $("atuacao-grid").appendChild(
        el("article", { class: "card reveal" + (a.selo ? " is-destaque" : "") }, [
          a.selo ? el("span", { class: "card-badge" }, a.selo) : null,
          el("div", { class: "atuacao-icon", html: ICONS[a.icone] || "" }),
          el("h3", {}, a.titulo),
          el("p", {}, a.descricao),
        ])
      )
    );
  }

  function renderProjetos() {
    CONFIG.projetos.forEach((p, i) =>
      $("projetos-grid").appendChild(
        el(
          "button",
          { class: "card projeto-card reveal", type: "button", "aria-haspopup": "dialog", onclick: () => openCase(i) },
          [
            el("div", { class: "projeto-cover" }, [
              coverNode(p, i + 1),
              p.etiqueta ? el("span", { class: "projeto-badge" }, p.etiqueta) : null,
            ]),
            el("div", { class: "projeto-body" }, [
              el("span", { class: "projeto-stat" }, p.indicador),
              el("h3", {}, p.titulo),
              el("p", {}, p.resumo),
              el("span", { class: "projeto-link" }, "Ver case completo →"),
            ]),
          ]
        )
      )
    );
    $("projetos-aviso").textContent = CONFIG.avisoConfidencialidade;
  }

  function renderCompetencias() {
    CONFIG.competencias.areas.forEach((t) => $("skills-areas").appendChild(el("li", { class: "tag" }, t)));
    CONFIG.competencias.ferramentas.forEach((t) =>
      $("skills-tools").appendChild(el("li", { class: "tag tag-tool" }, t))
    );
  }

  function renderExperiencias() {
    CONFIG.experiencias.forEach((e) =>
      $("experiencia-timeline").appendChild(
        el("div", { class: "timeline-item reveal" + (e.compacta ? " is-compact" : "") }, [
          el("span", { class: "timeline-dot", "aria-hidden": "true" }),
          el("p", { class: "timeline-empresa" }, e.empresa),
          el("h3", {}, e.cargo),
          el("p", { class: "timeline-periodo" }, e.periodo),
          e.descricao ? el("p", { class: "timeline-desc" }, e.descricao) : null,
          e.tags
            ? el("ul", { class: "chips chips-sm" }, e.tags.map((t) => el("li", { class: "tag" }, t)))
            : null,
        ])
      )
    );
  }

  function renderFormacao() {
    CONFIG.formacao.forEach((f) =>
      $("formacao-grid").appendChild(
        el("article", { class: "card cred-card reveal" }, [
          el("h3", {}, f.curso),
          el("p", { class: "cred-inst" }, f.instituicao),
          el("p", { class: "cred-ano" }, f.periodo),
        ])
      )
    );
    CONFIG.certificacoes.forEach((c) =>
      $("certificacoes-grid").appendChild(
        el("article", { class: "card cred-card reveal" + (c.destaque ? " is-destaque" : "") }, [
          c.destaque ? el("span", { class: "cred-badge" }, "Destaque") : null,
          el("h3", {}, c.nome),
          el("p", { class: "cred-inst" }, c.instituicao),
          c.ano ? el("p", { class: "cred-ano" }, c.ano) : null,
          c.credencial
            ? el("a", { class: "btn btn-secondary btn-sm", href: c.credencial, target: "_blank", rel: "noopener" }, "Ver credencial")
            : null,
        ])
      )
    );
    CONFIG.outrasCertificacoes.forEach((n) => $("outras-cert").appendChild(el("li", { class: "tag" }, n)));
    $("cert-linkedin").href = CONFIG.links.linkedinCertificacoes;
  }

  function renderCv() {
    $("cv-titulo").textContent = CONFIG.curriculoCta.titulo;
    $("cv-texto").textContent = CONFIG.curriculoCta.texto;
    $("curriculo-download").href = CONFIG.links.curriculo;
  }

  function renderServicos() {
    const s = CONFIG.servicos;
    $("servicos-eyebrow").textContent = s.eyebrow;
    $("servicos-titulo").textContent = s.titulo;
    $("servicos-desc").textContent = s.descricao;
    $("servicos-aviso").textContent = s.aviso;
    const b = $("servicos-link");
    b.textContent = s.textoBotao;
    b.href = s.url;
  }

  function renderContato() {
    $("contato-titulo").textContent = CONFIG.contato.titulo;
    $("contato-texto").textContent = CONFIG.contato.texto;
    $("contato-whatsapp").href = whatsappUrl();
    $("contato-linkedin").href = CONFIG.links.linkedin;
    $("contato-email").href = mailUrl();
    $("footer-linkedin").href = CONFIG.links.linkedin;
    $("footer-whatsapp").href = whatsappUrl();
    $("footer-email").href = mailUrl();
    $("footer-ano").textContent = new Date().getFullYear();
  }

  function fillIcons() {
    document.querySelectorAll("[data-icon]").forEach((n) => {
      n.innerHTML = ICONS[n.dataset.icon] || "";
    });
  }

  /* ---------- Modal do case ---------- */
  let lastFocus = null;

  function openCase(i) {
    const p = CONFIG.projetos[i];
    const content = $("projeto-modal-content");
    content.innerHTML = "";
    content.appendChild(
      el("div", { class: "modal-cover" + (p.imagem ? " has-image" : "") }, [coverNode(p, i + 1)])
    );
    if (p.etiqueta) content.appendChild(el("span", { class: "tag tag-note" }, p.etiqueta));
    content.appendChild(el("span", { class: "projeto-stat" }, p.indicador));
    content.appendChild(el("h3", { id: "projeto-modal-title" }, p.titulo));

    const dl = el("dl", { class: "case-fields" });
    [
      ["Contexto", p.contexto],
      ["Desafio", p.desafio],
      ["Minha atuação", p.atuacao],
      ["Como foi desenvolvido", p.comoFoi],
      ["Resultado", p.resultado],
      ["Aprendizados", p.aprendizados],
    ].forEach(([label, text]) => {
      if (!text) return;
      dl.appendChild(el("div", { class: "case-field" }, [el("dt", {}, label), el("dd", {}, text)]));
    });
    if (p.competencias && p.competencias.length) {
      dl.appendChild(
        el("div", { class: "case-field" }, [
          el("dt", {}, "Ferramentas e competências"),
          el("dd", {}, [el("ul", { class: "chips chips-sm" }, p.competencias.map((c) => el("li", { class: "tag" }, c)))]),
        ])
      );
    }
    content.appendChild(dl);
    (p.imagens || []).forEach((im) =>
      content.appendChild(
        el("figure", { class: "case-figure" }, [
          el("a", { href: im.src, target: "_blank", rel: "noopener", "aria-label": `Abrir imagem em tamanho maior: ${im.alt}` }, [
            el("img", { src: im.src, alt: im.alt, loading: "lazy", decoding: "async" }),
          ]),
          im.legenda ? el("figcaption", {}, im.legenda) : null,
        ])
      )
    );
    content.appendChild(el("p", { class: "fine-print" }, p.nota || CONFIG.avisoConfidencialidade));

    const overlay = $("projeto-modal");
    lastFocus = document.activeElement;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("projeto-modal-close").focus();
  }

  function closeCase() {
    const overlay = $("projeto-modal");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  function setupModal() {
    const overlay = $("projeto-modal");
    $("projeto-modal-close").addEventListener("click", closeCase);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeCase();
    });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("is-open")) return;
      if (e.key === "Escape") return closeCase();
      if (e.key === "Tab") {
        const f = overlay.querySelectorAll("button, a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- Menu, seção ativa, topo, reveal ---------- */
  function setupMenu() {
    const toggle = $("nav-toggle"), menu = $("nav-mobile");
    const set = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => set(!menu.classList.contains("is-open")));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { set(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (m) => m.matches && set(false));
  }

  function setupActive() {
    const links = document.querySelectorAll(".nav-desktop a, .nav-mobile a");
    const targets = [...new Set([...links].map((a) => a.getAttribute("href")))]
      .map((h) => document.querySelector(h))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => {
            const on = a.getAttribute("href") === "#" + en.target.id;
            a.classList.toggle("is-active", on);
            on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
          });
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  function setupTop() {
    const btn = $("back-to-top");
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      btn.hidden = window.scrollY < 700;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    onScroll();
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, o) =>
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); o.unobserve(en.target); }
        }),
      { threshold: 0.1 }
    );
    items.forEach((i) => io.observe(i));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero(); renderStats(); renderSobre(); renderAtuacao(); renderProjetos();
    renderCompetencias(); renderExperiencias(); renderFormacao(); renderCv();
    renderServicos(); renderContato(); fillIcons();
    setupModal(); setupMenu(); setupActive(); setupTop(); setupReveal();
  });
})();
