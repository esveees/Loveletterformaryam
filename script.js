/* ============================================================
   CONFIG — edit these to personalize the site
   ============================================================ */
const CONFIG = {
  name: "Nihal",
  metDate: "2026-03-12", // YYYY-MM-DD — "days since we met" counts from here

  ourSong: { title: "Awedak", artist: "Ayed", coverArt: "" }, // e.g. "assets/our-song-cover.jpg" — leave "" to keep the heart design

  thingsILove: [
    { front: "Your smile", back: "It's the kind that reaches your eyes first, and somehow fixes my whole day." },
    { front: "Your little habits", back: "The tiny things you do without noticing — I notice every one of them." },
    { front: "The way you care", back: "You care so quietly and so fully. People are lucky to have you and don't even know it." },
    { front: "Your kindness", back: "You give it away so easily, like it costs you nothing, when really it means everything." },
    { front: "Your little reactions", back: "The way your face changes before you say a word. I could watch that forever." },
    { front: "Everything, really", back: "I could make a hundred more cards and still not get to all of it." },
  ],

  openWhen: [
    { label: "Open when you miss me", message: "Then close your eyes for a second — I'm already thinking about you too, right now, wherever I am." },
    { label: "Open when you're sad", message: "It's okay to not be okay. I'm not going anywhere. Let it out, and when you're ready, come find me." },
    { label: "Open when you've had a bad day", message: "Bad days don't get to keep you. Tomorrow gets a fresh start, and I'll be right here for it." },
    { label: "Open when you need a hug", message: "Wrap your arms around yourself for a second — now imagine it's me. I'd hold on for as long as you needed." },
    { label: "Open when you want to know how much I love you", message: "More than the distance between us. More than words. More than I can fit into this little box." },
    { label: "Open before you sleep", message: "Sleep well. I hope your dreams are soft, and I hope, somewhere in them, I show up too." },
    { label: "Open when you need reminding you're special", message: "You are the kind of person people remember. You are the kind of person I chose, and would choose again." },
  ],

  ifYouWere: [
    { prompt: "If you were a color...", answer: "Sunset pink" },
    { prompt: "If you were a place...", answer: "Home" },
    { prompt: "If you were a song...", answer: "Perfect — Ed Sheeran" },
    { prompt: "If you were a season...", answer: "Spring" },
    { prompt: "If you were a star...", answer: "The brightest one" },
  ],

  whyReasons: [
    "Because somehow, even through a screen, you feel like home.",
    "Because you make ordinary days feel special.",
    "Because being around you makes me forget everything else.",
    "Because you're you.",
    "Because you remember the small things I mention once.",
    "Because your laugh is genuinely my favorite sound.",
  ],

  compliments: [
    "You have the kind of heart the world needs more of.",
    "You make hard days feel a little lighter just by existing.",
    "Your mind is beautiful — I love the way you think about things.",
    "You are so much stronger than you give yourself credit for.",
    "Anyone who gets your attention is lucky, and I know it.",
  ],

  secretMessage:
    "Even on the days I don't say much, you're still the first thing on my mind and the last thing before I fall asleep. This whole world, every line of it, exists because a version of the future where you're beside me is the only one I actually want.",
};

/* ============================================================
   HELPERS
   ============================================================ */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("finalName").textContent = CONFIG.name;

  initGardenField();
  initGardenGlimmer();
  initGardenPetals();
  initLilyParticles();
  initLilyPortal();

  initScrollReveal();
  initFlipCards();
  initOpenWhen();
  initOurSong();
  initIfYouWere();
  initWhy();
  initDaysCounter();
  initSecret();
  initNightSky();
  initExtras();
  initFinal();
  initBackgroundMusic();
});

/* ============================================================
   GARDEN — flower field
   ============================================================ */
function flowerSVG(kind, hue) {
  switch (kind) {
    case "rose-pink":
      return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5.5" fill="#e08aa0"/><circle cx="12" cy="12" r="3" fill="#f2b8c8"/><circle cx="12" cy="12" r="1.2" fill="#c96b83"/><rect x="11" y="17" width="2" height="7" fill="#3e6b3f"/></svg>`;
    case "rose-white":
      return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5.5" fill="#f6ede4"/><circle cx="12" cy="12" r="3" fill="#fffaf3"/><circle cx="12" cy="12" r="1.2" fill="#e4cfa0"/><rect x="11" y="17" width="2" height="7" fill="#3e6b3f"/></svg>`;
    case "daisy":
      return `<svg viewBox="0 0 24 24"><g fill="#fffaf3">
        <ellipse cx="12" cy="6" rx="2" ry="3.4"/><ellipse cx="12" cy="18" rx="2" ry="3.4"/>
        <ellipse cx="6" cy="12" rx="3.4" ry="2"/><ellipse cx="18" cy="12" rx="3.4" ry="2"/>
        <ellipse cx="7.8" cy="7.8" rx="2" ry="3.2" transform="rotate(45 7.8 7.8)"/>
        <ellipse cx="16.2" cy="16.2" rx="2" ry="3.2" transform="rotate(45 16.2 16.2)"/>
        <ellipse cx="16.2" cy="7.8" rx="2" ry="3.2" transform="rotate(-45 16.2 7.8)"/>
        <ellipse cx="7.8" cy="16.2" rx="2" ry="3.2" transform="rotate(-45 7.8 16.2)"/>
        </g><circle cx="12" cy="12" r="2.6" fill="#e4b962"/><rect x="11" y="19" width="2" height="6" fill="#3e6b3f"/></svg>`;
    case "wild":
      return `<svg viewBox="0 0 24 24"><g fill="${hue}">
        <circle cx="8" cy="10" r="2.2"/><circle cx="14" cy="8" r="2.2"/><circle cx="16" cy="13" r="2.2"/><circle cx="10" cy="14" r="2.2"/>
        </g><rect x="11" y="16" width="1.6" height="6" fill="#3e6b3f"/></svg>`;
    case "lily-small":
      return `<svg viewBox="0 0 24 24"><path d="M12 18C9 14 5 12 4 6c5 1 8 5 8 9 0-4 3-8 8-9-1 6-5 8-8 12Z" fill="#f6ede4"/><rect x="11" y="18" width="2" height="6" fill="#3e6b3f"/></svg>`;
    default:
      return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="${hue}"/><rect x="11" y="16" width="2" height="6" fill="#3e6b3f"/></svg>`;
  }
}

function initGardenField() {
  const field = document.getElementById("gardenField");
  const kinds = ["rose-pink", "rose-white", "daisy", "wild", "lily-small"];
  const wildHues = ["#e6b3d0", "#f0d27a", "#c9a6e0", "#e8927a"];
  const isSmallScreen = window.innerWidth < 640;
  const count = isSmallScreen ? 55 : 90;

  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const kind = kinds[Math.floor(Math.random() * kinds.length)];
    const hue = wildHues[Math.floor(Math.random() * wildHues.length)];
    const el = document.createElement("div");
    el.className = "flower";

    // bias flowers toward foreground band, keep center clear-ish for the figure
    const band = Math.random();
    const bottom = 2 + band * 26; // 2%–28% from bottom
    let left = Math.random() * 100;
    // thin the very center near the figure a touch
    if (left > 40 && left < 60 && Math.random() > 0.4) {
      left = left < 50 ? left - 18 : left + 18;
    }
    const size = 16 + Math.random() * (bottom > 14 ? 34 : 20);
    const delay = Math.random() * 4;
    const duration = 3 + Math.random() * 3;

    el.style.left = `${left}%`;
    el.style.bottom = `${bottom}%`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${duration}s`;
    el.style.zIndex = String(Math.round(bottom));
    el.innerHTML = flowerSVG(kind, hue);
    frag.appendChild(el);
  }
  field.appendChild(frag);
}

function initGardenGlimmer() {
  if (prefersReducedMotion) return;
  const wrap = document.getElementById("gardenGlimmer");
  const count = window.innerWidth < 640 ? 14 : 26;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${40 + Math.random() * 55}%`;
    s.style.animationDuration = `${6 + Math.random() * 8}s`;
    s.style.animationDelay = `${Math.random() * 8}s`;
    frag.appendChild(s);
  }
  wrap.appendChild(frag);
}

function initGardenPetals() {
  if (prefersReducedMotion) return;
  const wrap = document.getElementById("gardenPetals");
  const spawn = () => {
    const p = document.createElement("span");
    p.className = "drift-petal";
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
    p.style.setProperty("--rot", `${Math.random() * 360}deg`);
    p.style.animationDuration = `${9 + Math.random() * 7}s`;
    wrap.appendChild(p);
    setTimeout(() => p.remove(), 17000);
  };
  for (let i = 0; i < 4; i++) setTimeout(spawn, i * 1200);
  setInterval(spawn, 2600);
}

function initLilyParticles() {
  if (prefersReducedMotion) return;
  const wrap = document.getElementById("lilyParticles");
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 20;
    s.style.left = "50%";
    s.style.top = "40%";
    s.style.setProperty("--px", `${Math.cos(angle) * dist}px`);
    s.style.setProperty("--py", `${Math.sin(angle) * dist}px`);
    s.style.animationDelay = `${Math.random() * 3}s`;
    frag.appendChild(s);
  }
  wrap.appendChild(frag);
}

/* ============================================================
   LILY PORTAL — the entrance
   ============================================================ */
function initLilyPortal() {
  const lily = document.getElementById("lilyPortal");
  const garden = document.getElementById("garden");
  const site = document.getElementById("site");
  const girlFigure = document.getElementById("figureGirl");
  const girlInner = girlFigure.querySelector(".figure-inner");
  const glowBoy = document.getElementById("momentGlowBoy");
  const glowGirl = document.getElementById("momentGlowGirl");
  let opened = false;

  // timings collapse almost to zero under reduced-motion, but keep the same
  // sequence so the story still reads: she arrives, he offers, she receives.
  const T = prefersReducedMotion
    ? { walk: 50, handoff: 50, moment: 150, finalDelay: 300 }
    : { walk: 1500, handoff: 700, moment: 950, finalDelay: 1750 };

  const finishIntoSite = () => {
    spawnBurstPetals();
    setTimeout(() => garden.classList.add("leaving"), 350);
    setTimeout(() => {
      garden.classList.add("gone");
      site.hidden = false;
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.dispatchEvent(new CustomEvent("site:entered"));
        revealNowVisible();
      });
    }, T.finalDelay);
  };

  const enter = () => {
    if (opened) return;
    opened = true;
    lily.classList.add("opening");
    lily.disabled = true;

    // 1. she walks in
    girlInner.classList.add("walking");
    girlFigure.classList.add("arrived");

    setTimeout(() => {
      girlInner.classList.remove("walking");

      // 2. he offers the lily — it travels to her hand
      lily.classList.add("travel-to-her");

      setTimeout(() => {
        // 3. a shared glowing moment before the world opens
        glowBoy.classList.add("shine");
        glowGirl.classList.add("shine");

        setTimeout(finishIntoSite, T.moment);
      }, T.handoff);
    }, T.walk);
  };

  lily.addEventListener("click", enter);
  lily.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      enter();
    },
    { passive: false }
  );
}

function spawnBurstPetals() {
  const wrap = document.getElementById("gardenPetals");
  const lily = document.getElementById("lilyPortal");
  const rect = lily.getBoundingClientRect();
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "drift-petal";
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top}px`;
    p.style.setProperty("--dx", `${(Math.random() - 0.5) * 400}px`);
    p.style.setProperty("--rot", `${Math.random() * 500}deg`);
    p.style.animationDuration = `${1.4 + Math.random() * 1.4}s`;
    wrap.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}
function revealNowVisible() {
  // catch anything already in view right after entering the site
  $$(".reveal").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
  });
}

/* ============================================================
   THINGS I LOVE ABOUT YOU — flip cards
   ============================================================ */
function initFlipCards() {
  const grid = document.getElementById("flipGrid");
  CONFIG.thingsILove.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-face flip-front"><span>${item.front}</span></div>
        <div class="flip-face flip-back"><span>${item.back}</span></div>
      </div>`;
    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   OPEN WHEN — envelopes + modal
   ============================================================ */
function initOpenWhen() {
  const grid = document.getElementById("envelopeGrid");
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true">
      <p class="modal-title" id="modalTitle"></p>
      <p class="modal-text" id="modalText"></p>
      <button type="button" class="modal-close">Close</button>
    </div>`;
  document.body.appendChild(overlay);
  const modalTitle = overlay.querySelector("#modalTitle");
  const modalText = overlay.querySelector("#modalText");
  const closeModal = () => overlay.classList.remove("open");
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  CONFIG.openWhen.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "envelope";
    btn.innerHTML = `<span>${item.label}</span><span class="seal">✦</span>`;
    btn.addEventListener("click", () => {
      modalTitle.textContent = item.label;
      modalText.textContent = item.message;
      overlay.classList.add("open");
    });
    grid.appendChild(btn);
  });
}

/* ============================================================
   OUR SONG — custom player, separate from background music
   ============================================================ */
function initOurSong() {
  document.getElementById("songTitle").textContent = CONFIG.ourSong.title;
  document.getElementById("songArtist").textContent = CONFIG.ourSong.artist;

  if (CONFIG.ourSong.coverArt) {
    const label = document.getElementById("discLabel");
    const img = document.createElement("img");
    img.src = CONFIG.ourSong.coverArt;
    img.alt = "";
    img.className = "disc-cover";
    img.onerror = () => img.remove(); // keep the heart design if the file is missing
    label.appendChild(img);
  }

  const audio = document.getElementById("ourSongAudio");
  const btn = document.getElementById("songPlayBtn");
  const iconPlay = btn.querySelector(".icon-play");
  const iconPause = btn.querySelector(".icon-pause");
  const disc = document.getElementById("songDisc");
  const bars = document.getElementById("audioBars");

  const setPlayingUI = (playing) => {
    iconPlay.hidden = playing;
    iconPause.hidden = !playing;
    disc.classList.toggle("spinning", playing && !prefersReducedMotion);
    bars.classList.toggle("playing", playing);
    btn.setAttribute("aria-label", playing ? "Pause Our Song" : "Play Our Song");
  };

  btn.addEventListener("click", () => {
    if (audio.paused) {
      pauseBackgroundMusic({ remember: true });
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => setPlayingUI(true));
  audio.addEventListener("pause", () => {
    setPlayingUI(false);
    resumeBackgroundMusicIfNeeded();
  });
  audio.addEventListener("ended", () => resumeBackgroundMusicIfNeeded());
}

/* ============================================================
   IF YOU WERE — tap to reveal
   ============================================================ */
function initIfYouWere() {
  const list = document.getElementById("ifYouWereList");
  CONFIG.ifYouWere.forEach((item) => {
    const row = document.createElement("div");
    row.className = "iyw-row";
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.innerHTML = `<span class="iyw-prompt">${item.prompt}</span><span class="iyw-answer">${item.answer}</span>`;
    const toggle = () => row.classList.toggle("open");
    row.addEventListener("click", toggle);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
    list.appendChild(row);
  });
}

/* ============================================================
   WHY DO I LOVE YOU — cycling reasons
   ============================================================ */
function initWhy() {
  const textEl = document.getElementById("whyText");
  const btn = document.getElementById("whyBtn");
  let i = -1;
  const showNext = () => {
    i = (i + 1) % CONFIG.whyReasons.length;
    if (prefersReducedMotion) {
      textEl.textContent = CONFIG.whyReasons[i];
      return;
    }
    textEl.classList.add("swap");
    setTimeout(() => {
      textEl.textContent = CONFIG.whyReasons[i];
      textEl.classList.remove("swap");
    }, 220);
  };
  btn.addEventListener("click", showNext);
}

/* ============================================================
   DAYS COUNTER
   ============================================================ */
function initDaysCounter() {
  const el = document.getElementById("daysCounter");
  const start = new Date(CONFIG.metDate + "T00:00:00");
  const now = new Date();
  const diffMs = now - start;
  const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  el.dataset.target = String(days);

  let animated = false;
  const animateCount = () => {
    if (animated) return;
    animated = true;
    if (prefersReducedMotion || days === 0) {
      el.textContent = days.toLocaleString();
      return;
    }
    const duration = 1400;
    const startTime = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * days).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = days.toLocaleString();
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
  } else {
    animateCount();
  }
}

/* ============================================================
   SECRET MESSAGE
   ============================================================ */
function initSecret() {
  document.getElementById("secretMessage").textContent = CONFIG.secretMessage;
  const trigger = document.getElementById("secretTrigger");
  const msg = document.getElementById("secretMessage");
  trigger.addEventListener("click", () => {
    msg.classList.toggle("shown");
  });
}

/* ============================================================
   NIGHT SKY — stars + heart constellation
   ============================================================ */
function initNightSky() {
  const starsWrap = document.getElementById("nightskyStars");
  const count = window.innerWidth < 640 ? 60 : 110;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 90}%`;
    s.style.setProperty("--star-op", (0.3 + Math.random() * 0.7).toFixed(2));
    s.style.animationDelay = `${Math.random() * 3}s, ${Math.random() * 4}s`;
    frag.appendChild(s);
  }
  starsWrap.appendChild(frag);

  // heart-shaped constellation dots along a heart path
  const dotsWrap = document.getElementById("constellationDots");
  const heartPoints = [
    [200, 60], [165, 35], [125, 45], [105, 80], [115, 120], [150, 155], [200, 195],
    [250, 155], [285, 120], [295, 80], [275, 45], [235, 35],
  ];
  heartPoints.forEach(([x, y]) => {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 2.6);
    dotsWrap.appendChild(c);
  });

  const section = document.getElementById("night-sky");
  const constellation = document.getElementById("constellation");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            constellation.classList.add("drawn");
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(section);
  } else {
    constellation.classList.add("drawn");
  }
}

/* ============================================================
   EXTRA INTERACTIONS
   ============================================================ */
function initExtras() {
  const loveBtn = document.getElementById("loveMeBtn");
  const loveAns = document.getElementById("loveMeAnswer");
  loveBtn.addEventListener("click", () => {
    loveAns.textContent = "Every single day. ♡";
  });

  const compBtn = document.getElementById("complimentBtn");
  const compAns = document.getElementById("complimentAnswer");
  let ci = -1;
  compBtn.addEventListener("click", () => {
    ci = (ci + 1) % CONFIG.compliments.length;
    compAns.textContent = CONFIG.compliments[ci];
  });
}

/* ============================================================
   FINAL REVEAL + rose petal finale
   ============================================================ */
function initFinal() {
  const btn = document.getElementById("finalBtn");
  const reveal = document.getElementById("finalReveal");
  btn.addEventListener(
    "click",
    () => {
      reveal.classList.add("shown");
      btn.classList.add("hidden-btn");
      setTimeout(() => startPetalFinale(), 700);
    },
    { once: true }
  );
}

function startPetalFinale() {
  const canvas = document.getElementById("petalCanvas");
  const section = document.getElementById("final");
  const ctx = canvas.getContext("2d");
  let w, h, dpr;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = section.clientWidth;
    h = section.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener("resize", resize);

  if (prefersReducedMotion) return;

  const colors = ["#e08aa0", "#c96b83", "#f2b8c8", "#8c4a5a"];
  const petalCount = window.innerWidth < 640 ? 26 : 46;
  const petals = Array.from({ length: petalCount }, () => makePetal(w, h, true));

  function makePetal(w, h, randomStart) {
    return {
      x: Math.random() * w,
      y: randomStart ? Math.random() * -h : -20 - Math.random() * 100,
      size: 8 + Math.random() * 12,
      speed: 0.6 + Math.random() * 1.2,
      drift: (Math.random() - 0.5) * 0.8,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.6 + Math.random() * 0.4,
    };
  }

  let elapsed = 0;
  const totalDuration = 9000;
  let raf;

  function draw(dt) {
    ctx.clearRect(0, 0, w, h);
    petals.forEach((p) => {
      p.sway += p.swaySpeed;
      p.y += p.speed;
      p.x += p.drift + Math.sin(p.sway) * 0.6;
      p.rot += p.rotSpeed;

      const fadeStart = h * 0.82;
      let alpha = p.opacity;
      if (p.y > fadeStart) {
        alpha *= Math.max(0, 1 - (p.y - fadeStart) / (h - fadeStart));
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -p.size / 2);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size / 2);
      ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size / 2);
      ctx.fill();
      ctx.restore();

      if (p.y > h + 20) {
        Object.assign(p, makePetal(w, h, false));
      }
    });
  }

  let last = performance.now();
  function loop(now) {
    const dt = now - last;
    last = now;
    elapsed += dt;
    draw(dt);
    if (elapsed < totalDuration) {
      raf = requestAnimationFrame(loop);
    } else {
      // gentle fade-out of remaining petals, then stop
      let fadeElapsed = 0;
      const fadeDuration = 2200;
      function fadeLoop(now2) {
        const dt2 = now2 - last;
        last = now2;
        fadeElapsed += dt2;
        ctx.clearRect(0, 0, w, h);
        const globalFade = Math.max(0, 1 - fadeElapsed / fadeDuration);
        petals.forEach((p) => {
          p.y += p.speed;
          p.x += p.drift;
          p.rot += p.rotSpeed;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity * globalFade);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -p.size / 2);
          ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size / 2);
          ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size / 2);
          ctx.fill();
          ctx.restore();
        });
        if (fadeElapsed < fadeDuration) {
          raf = requestAnimationFrame(fadeLoop);
        } else {
          ctx.clearRect(0, 0, w, h);
        }
      }
      raf = requestAnimationFrame(fadeLoop);
    }
  }
  raf = requestAnimationFrame(loop);
}

/* ============================================================
   AUDIO SYSTEM — background music (separate from Our Song)
   ============================================================ */
let bgAudio = null;
let bgWasPlayingBeforeSong = false;

function initBackgroundMusic() {
  bgAudio = document.getElementById("backgroundAudio");
  bgAudio.volume = 0.22;

  const toggle = document.getElementById("musicToggle");
  let userMuted = false;
  let started = false;
  let startInFlight = false;

  const setPressed = (playing) => toggle.setAttribute("aria-pressed", String(playing));

  const tryStart = () => {
    if (started || startInFlight || userMuted) return;
    startInFlight = true;
    bgAudio
      .play()
      .then(() => {
        started = true;
        startInFlight = false;
        setPressed(true);
      })
      .catch(() => {
        // blocked by autoplay policy — the next real tap will retry
        startInFlight = false;
      });
  };

  // start softly after the visitor's first interaction with the site (the lily / any tap)
  document.addEventListener("site:entered", tryStart);
  ["pointerdown", "keydown", "touchend"].forEach((evt) => {
    document.addEventListener(evt, () => {
      if (document.getElementById("site").hidden === false) tryStart();
    });
  });

  toggle.addEventListener("click", () => {
    if (bgAudio.paused) {
      userMuted = false;
      bgAudio
        .play()
        .then(() => {
          started = true;
          setPressed(true);
        })
        .catch(() => {});
    } else {
      userMuted = true;
      started = false;
      bgAudio.pause();
      setPressed(false);
    }
  });
}

function pauseBackgroundMusic({ remember } = {}) {
  if (!bgAudio) return;
  if (remember) bgWasPlayingBeforeSong = !bgAudio.paused;
  if (!bgAudio.paused) bgAudio.pause();
}

function resumeBackgroundMusicIfNeeded() {
  if (!bgAudio) return;
  if (bgWasPlayingBeforeSong) {
    bgAudio.play().catch(() => {});
  }
  bgWasPlayingBeforeSong = false;
}
