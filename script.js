/* =========================================================
   EDIT THIS PART — make it about HER!
   ---------------------------------------------------------
   Put your photos in the "images" folder and your song in
   the main folder, then match the file names below.
   Add, remove or reorder slides however you like.
   ========================================================= */
const CONFIG = {
  friendName: "khubu",             // her name
  yourName: "Your jaan",           // your name
  music: "music.mp3",              // your song file (same folder as index.html)
  autoAdvanceSeconds: 0,           // 0 = she taps next; 8 = slides change every 8 seconds

  slides: [
    // 1. Title slide
    { type: "title" },

    // 2. A single big photo
    { type: "photo", src: "photo1.jpeg",
      title: "Where it all began",
      caption: "Always one of my best memories" },

    // 3. Another photo
    { type: "photo", src: "photo2.jpeg",
      title: "Our craziest day",
      caption: "Still laughing about this one" },

    // 4. A list of things you love about her
    { type: "list",
      title: "Why you're my person",
      lines: [
        "Your laugh fixes my worst days",
        "You always stand up for me",
        "Your random and completely senseless jokes always make me laugh",
        "You make everything feel special"
      ] },

    // 5. A collage of a few small photos
    { type: "collage", title: "Our little memories",
      photos: [
        { src: "photo3.jpeg", caption: "Some memories" },
        { src: "photo4.jpeg", caption: "Selfie kera" },
        { src: "photo5.jpeg", caption: "Us being us" }
      ] },

    // 6. The letter
    { type: "letter",
      lines: [
        "Happy Birthday to the girl who makes every moment a little brighter! 🥹💜",
        "May this year bring you endless happiness, beautiful surprises, and everything you’ve been wishing for. ✨",
        "Keep smiling, keep shining, and never lose the crazy, wonderful person you are. 🫶🏻",
        "I hope we keep making memories that we’ll laugh about years from now. 😂",
        "Wishing you a lifetime of happiness, success, and love.",
        "Have the most amazing birthday, khubu! 🎂💐"
      ] },

    // 7. Make a wish (candles + confetti)
    { type: "wish", wishNote: "Your wish is on its way. It's definitely coming true!" },

    // 8. The end
    { type: "end", message: "Love you loads!" }
  ]
};

/* =========================================================
   Code below builds the page — you don't need to edit it
   ========================================================= */
const $ = (id) => document.getElementById(id);

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

document.title = "Happy Birthday, " + CONFIG.friendName + "!";

/* ---------- Cover screen ---------- */
$("coverFrom").textContent = "A little something from " + CONFIG.yourName;
$("coverTitle").append("Hey ", el("span", "name", CONFIG.friendName), ",", document.createElement("br"), "this is for you");

/* ---------- Balloons ---------- */
(function makeBalloons() {
  const colors = ["#e6398a", "#ffc93c", "#7cc8ff", "#ff8fc0", "#b48cff"];
  const box = $("balloons");
  for (let i = 0; i < 8; i++) {
    const b = el("div", "balloon");
    const c = colors[i % colors.length];
    b.style.background = c;
    b.style.color = c;
    b.style.left = (6 + i * 12) + "%";
    b.style.animationDuration = (16 + (i * 3) % 11) + "s";
    b.style.animationDelay = "-" + (i * 2.3) + "s";
    box.appendChild(b);
  }
})();

/* ---------- Cake drawing (used on the wish slide) ---------- */
const CAKE_SVG = `
<svg class="cake" viewBox="0 0 300 300" role="img" aria-label="Birthday cake with three candles">
  <ellipse cx="150" cy="272" rx="130" ry="14" fill="#000" opacity=".2" />
  <ellipse cx="150" cy="262" rx="125" ry="14" fill="#fffaf3" stroke="#3b0d3f" stroke-width="3" />
  <rect x="45" y="180" width="210" height="80" rx="14" fill="#ffb3d1" stroke="#3b0d3f" stroke-width="3" />
  <path d="M45 200 q13 20 26 0 q13 20 26 0 q13 20 26 0 q13 20 26 0 q13 20 26 0 q13 20 26 0 q13 20 26 0 q13 20 26 0 v-20 h-210z" fill="#fffaf3" stroke="#3b0d3f" stroke-width="3" stroke-linejoin="round" />
  <circle cx="80" cy="235" r="6" fill="#e6398a" /><circle cx="130" cy="240" r="6" fill="#ffc93c" />
  <circle cx="180" cy="235" r="6" fill="#7cc8ff" /><circle cx="225" cy="240" r="6" fill="#e6398a" />
  <rect x="80" y="125" width="140" height="62" rx="12" fill="#e6398a" stroke="#3b0d3f" stroke-width="3" />
  <path d="M80 142 q11.6 18 23.3 0 q11.7 18 23.4 0 q11.6 18 23.3 0 q11.7 18 23.4 0 q11.6 18 23.3 0 q11.7 18 23.3 0 v-17 h-140z" fill="#fffaf3" stroke="#3b0d3f" stroke-width="3" stroke-linejoin="round" />
  <rect x="108" y="88" width="12" height="40" rx="3" fill="#7cc8ff" stroke="#3b0d3f" stroke-width="3" />
  <rect x="144" y="82" width="12" height="46" rx="3" fill="#ffc93c" stroke="#3b0d3f" stroke-width="3" />
  <rect x="180" y="88" width="12" height="40" rx="3" fill="#7cc8ff" stroke="#3b0d3f" stroke-width="3" />
  <path class="flame lit" d="M114 84 q-9 -14 0 -28 q9 14 0 28z" fill="#ffc93c" stroke="#3b0d3f" stroke-width="2.5" style="animation-delay:-.2s" />
  <path class="flame lit" d="M150 78 q-9 -14 0 -28 q9 14 0 28z" fill="#ffc93c" stroke="#3b0d3f" stroke-width="2.5" />
  <path class="flame lit" d="M186 84 q-9 -14 0 -28 q9 14 0 28z" fill="#ffc93c" stroke="#3b0d3f" stroke-width="2.5" style="animation-delay:-.5s" />
</svg>`;

/* ---------- Photo helper (shows a placeholder if the file is missing) ---------- */
function polaroid(photo, tilt) {
  const fig = el("figure", "polaroid");
  fig.style.transform = "rotate(" + tilt + "deg)";

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.caption || "A memory of us";

  const ph = el("div", "ph", "Add your photo: " + photo.src);
  img.addEventListener("error", function () {
    img.style.display = "none";
    ph.style.display = "flex";
  });

  fig.append(img, ph);
  if (photo.caption) fig.appendChild(el("figcaption", "", photo.caption));
  return fig;
}

/* ---------- Build each slide ---------- */
const photoThemes = ["sky", "sun", "pink"];
let photoCount = 0;

function buildSlide(s) {
  const slide = el("section", "slide");
  const inner = el("div", "inner");
  slide.appendChild(inner);

  let theme = s.theme || "pink";

  if (s.type === "title") {
    inner.appendChild(el("p", "hand", "A little something from " + CONFIG.yourName));
    const h1 = el("h1");
    h1.append("Happy Birthday,", document.createElement("br"), el("span", "name", CONFIG.friendName + "!"));
    inner.appendChild(h1);
    inner.appendChild(el("p", "hint", "Tap the arrow to keep going"));
    slide.dataset.enter = "confetti";
  }

  else if (s.type === "photo") {
    theme = s.theme || photoThemes[photoCount % photoThemes.length];
    if (s.title) inner.appendChild(el("h2", "", s.title));
    inner.appendChild(polaroid(s, photoCount % 2 === 0 ? -3 : 2.5));
    photoCount++;
  }

  else if (s.type === "collage") {
    theme = s.theme || "sun";
    if (s.title) inner.appendChild(el("h2", "", s.title));
    const box = el("div", "collage");
    const tilts = [-4, 3, -2, 4, -3, 2];
    s.photos.forEach(function (p, i) { box.appendChild(polaroid(p, tilts[i % tilts.length])); });
    inner.appendChild(box);
  }

  else if (s.type === "list") {
    theme = s.theme || "sky";
    if (s.title) inner.appendChild(el("h2", "", s.title));
    const ul = el("ul", "list");
    s.lines.forEach(function (line) { ul.appendChild(el("li", "", line)); });
    inner.appendChild(ul);
  }

  else if (s.type === "letter") {
    theme = s.theme || "pink";
    const paper = el("div", "paper");
    s.lines.forEach(function (line) { paper.appendChild(el("p", "", line)); });
    paper.appendChild(el("p", "sign", "Forever yours, " + CONFIG.yourName));
    inner.appendChild(paper);
  }

  else if (s.type === "wish") {
    theme = s.theme || "plum";
    inner.appendChild(el("h2", "", "Make a wish"));

    const wrap = el("div", "cake-wrap");
    wrap.innerHTML = CAKE_SVG;
    inner.appendChild(wrap);

    const btn = el("button", "btn", "Blow the candles");
    const note = el("p", "wish-note");
    note.setAttribute("aria-live", "polite");
    inner.append(btn, note);

    const cake = wrap.querySelector(".cake");
    let blown = false;
    btn.addEventListener("click", function () {
      blown = !blown;
      cake.classList.toggle("out", blown);
      cake.querySelectorAll(".flame").forEach(function (f) { f.classList.toggle("lit", !blown); });
      if (blown) {
        btn.textContent = "Light them again";
        note.textContent = s.wishNote || "Your wish is on its way!";
        note.classList.add("show");
        const r = cake.getBoundingClientRect();
        confettiBurst(r.left + r.width / 2, r.top + r.height / 3);
      } else {
        btn.textContent = "Blow the candles";
        note.classList.remove("show");
      }
    });
  }

  else if (s.type === "end") {
    theme = s.theme || "plum";
    const h1 = el("h1");
    h1.append("Happy Birthday,", document.createElement("br"), el("span", "name", CONFIG.friendName + "!"));
    inner.appendChild(h1);
    inner.appendChild(el("p", "hand", (s.message || "Love you loads!") + " " + CONFIG.yourName));

    const row = el("div", "end-buttons");
    const again = el("button", "btn", "Celebrate again");
    const restart = el("button", "btn", "Watch from the start");
    again.addEventListener("click", function () {
      confettiBurst(window.innerWidth * 0.25, window.innerHeight * 0.6);
      confettiBurst(window.innerWidth * 0.75, window.innerHeight * 0.6);
    });
    restart.addEventListener("click", function () { goTo(0, true); });
    row.append(again, restart);
    inner.appendChild(row);
    slide.dataset.enter = "confetti";
  }

  slide.dataset.theme = theme;
  return slide;
}

/* ---------- Slideshow logic ---------- */
const slidesBox = $("slides");
const dotsBox = $("dots");
const slideEls = CONFIG.slides.map(buildSlide);
const dotEls = [];
let current = 0;
let timer = null;

slideEls.forEach(function (slide, i) {
  slidesBox.appendChild(slide);
  const dot = el("button", "dot");
  dot.setAttribute("aria-label", "Go to slide " + (i + 1));
  dot.addEventListener("click", function () { goTo(i, true); });
  dotsBox.appendChild(dot);
  dotEls.push(dot);
});

function goTo(index, fromUser) {
  index = Math.max(0, Math.min(slideEls.length - 1, index));
  current = index;

  slideEls.forEach(function (slide, i) {
    slide.classList.toggle("active", i === index);
    slide.classList.toggle("before", i < index);
    slide.setAttribute("aria-hidden", i === index ? "false" : "true");
  });
  dotEls.forEach(function (d, i) {
    d.classList.toggle("active", i === index);
    if (i === index) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
  });

  document.body.dataset.theme = slideEls[index].dataset.theme;
  $("progressBar").style.width = (slideEls.length > 1 ? (index / (slideEls.length - 1)) * 100 : 100) + "%";
  $("prevBtn").disabled = index === 0;
  $("nextBtn").disabled = index === slideEls.length - 1;
  slideEls[index].scrollTop = 0;

  if (slideEls[index].dataset.enter === "confetti") {
    confettiBurst(window.innerWidth / 2, window.innerHeight * 0.35);
  }
  if (fromUser) restartTimer();
}

function next(fromUser) { if (current < slideEls.length - 1) goTo(current + 1, fromUser); }
function prev(fromUser) { if (current > 0) goTo(current - 1, fromUser); }

$("nextBtn").addEventListener("click", function () { next(true); });
$("prevBtn").addEventListener("click", function () { prev(true); });

document.addEventListener("keydown", function (e) {
  if ($("stage").hidden) return;
  if (e.key === "ArrowRight") next(true);
  if (e.key === "ArrowLeft") prev(true);
});

// Swipe on phones
let touchX = null;
$("stage").addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
$("stage").addEventListener("touchend", function (e) {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) > 60) { if (dx < 0) next(true); else prev(true); }
}, { passive: true });

function restartTimer() {
  clearInterval(timer);
  if (CONFIG.autoAdvanceSeconds > 0) {
    timer = setInterval(function () {
      if (current >= slideEls.length - 1) clearInterval(timer); else next(false);
    }, CONFIG.autoAdvanceSeconds * 1000);
  }
}

/* ---------- Music ---------- */
const bgm = $("bgm");
const musicBtn = $("musicBtn");
bgm.src = CONFIG.music;
bgm.volume = 0.6;

function setMusicLabel() {
  const on = !bgm.paused;
  musicBtn.textContent = on ? "Music: on" : "Music: off";
  musicBtn.setAttribute("aria-pressed", String(on));
}
musicBtn.addEventListener("click", function () {
  if (bgm.paused) bgm.play().catch(function () {}); else bgm.pause();
});
bgm.addEventListener("play", setMusicLabel);
bgm.addEventListener("pause", setMusicLabel);

/* ---------- Open button (also starts the music) ---------- */
$("openBtn").addEventListener("click", function () {
  $("cover").hidden = true;
  $("stage").hidden = false;
  bgm.play().catch(function () {});   // works because she just tapped
  setMusicLabel();
  goTo(0, true);
});

/* ---------- Confetti ---------- */
const canvas = $("confetti");
const ctx = canvas.getContext("2d");
const confettiColors = ["#e6398a", "#ffc93c", "#7cc8ff", "#ffffff", "#ff8fc0", "#b48cff"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let pieces = [];
let running = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function confettiBurst(x, y) {
  if (reduceMotion || $("stage").hidden) return;
  for (let i = 0; i < 140; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    pieces.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      size: 6 + Math.random() * 7,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      life: 0
    });
  }
  if (!running) { running = true; requestAnimationFrame(tick); }
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(function (p) {
    p.vy += 0.25;      // gravity
    p.vx *= 0.99;      // air drag
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life++;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  });
  pieces = pieces.filter(function (p) { return p.y < canvas.height + 20 && p.life < 240; });
  if (pieces.length) {
    requestAnimationFrame(tick);
  } else {
    running = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}