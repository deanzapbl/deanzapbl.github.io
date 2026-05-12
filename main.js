<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Phi Beta Lambda — De Anza College</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Unbounded:wght@400;700&family=DM+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<style>
.sep-home{position:relative;width:100vw;height:100vh;overflow:hidden;background:#0a0a0a}
.sep-grid{position:absolute;inset:-30%;width:160%;height:160%;display:grid;grid-template-columns:repeat(5,1fr);grid-auto-rows:calc(160vh/5);gap:6px;transform:rotate(-12deg);transform-origin:center center}
.sep-tile{position:relative;overflow:hidden;background:#1a1010}
.sep-tile img{width:100%;height:100%;object-fit:cover;animation:tilePulse 3.5s ease-in-out infinite}
@keyframes tilePulse{0%,100%{opacity:.4}50%{opacity:.75}}
.sep-grid .sep-tile:nth-child(1) img{animation-delay:.17s}
.sep-grid .sep-tile:nth-child(2) img{animation-delay:.34s}
.sep-grid .sep-tile:nth-child(3) img{animation-delay:.51s}
.sep-grid .sep-tile:nth-child(4) img{animation-delay:.68s}
.sep-grid .sep-tile:nth-child(5) img{animation-delay:.85s}
.sep-grid .sep-tile:nth-child(6) img{animation-delay:1.02s}
.sep-grid .sep-tile:nth-child(7) img{animation-delay:1.19s}
.sep-grid .sep-tile:nth-child(8) img{animation-delay:1.36s}
.sep-grid .sep-tile:nth-child(9) img{animation-delay:1.53s}
.sep-grid .sep-tile:nth-child(10) img{animation-delay:1.7s}
.sep-grid .sep-tile:nth-child(11) img{animation-delay:1.87s}
.sep-grid .sep-tile:nth-child(12) img{animation-delay:2.04s}
.sep-grid .sep-tile:nth-child(13) img{animation-delay:2.21s}
.sep-grid .sep-tile:nth-child(14) img{animation-delay:2.38s}
.sep-grid .sep-tile:nth-child(15) img{animation-delay:2.55s}
.sep-grid .sep-tile:nth-child(16) img{animation-delay:2.72s}
.sep-grid .sep-tile:nth-child(17) img{animation-delay:2.89s}
.sep-grid .sep-tile:nth-child(18) img{animation-delay:3.06s}
.sep-grid .sep-tile:nth-child(19) img{animation-delay:3.23s}
.sep-grid .sep-tile:nth-child(20) img{animation-delay:3.4s}
.sep-grid .sep-tile:nth-child(21) img{animation-delay:.07s}
.sep-grid .sep-tile:nth-child(22) img{animation-delay:.24s}
.sep-grid .sep-tile:nth-child(23) img{animation-delay:.41s}
.sep-grid .sep-tile:nth-child(24) img{animation-delay:.58s}
.sep-grid .sep-tile:nth-child(25) img{animation-delay:.75s}
.sep-tile img{width:100%;height:100%;object-fit:cover;opacity:.55;transition:opacity .4s}
.sep-tile:hover img{opacity:1!important;animation-play-state:paused}
.sep-tile::after{content:'';position:absolute;inset:0;background:rgba(10,8,8,.2)}
.sep-overlay{position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(10,8,8,.25) 0%,rgba(10,8,8,.65) 100%);pointer-events:none}
.sep-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;pointer-events:none;gap:.5rem}
.sep-bottom{position:absolute;bottom:2.5rem;left:0;right:0;display:flex;justify-content:space-between;align-items:flex-end;padding:0 3rem;z-index:10;pointer-events:none}
.sep-wordmark-txt{font-size:clamp(.65rem,1.2vw,1rem);letter-spacing:.2em;text-transform:uppercase;color:rgba(245,243,239,.4);line-height:1.5}
.sep-stats{display:flex;gap:3rem}
.sep-stat-n{font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:var(--white);letter-spacing:.04em;line-height:1}
.sep-stat-l{font-family:'IBM Plex Mono',monospace;font-size:.5rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(245,243,239,.35);margin-top:.2rem}
.sep-scroll-dot{width:4px;height:4px;background:var(--red);border-radius:50%;animation:scrollBounce 1.8s ease-in-out infinite;margin:0 auto}
@keyframes scrollBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
#nav.on-home{background:transparent!important;border-color:transparent!important}
@media(max-width:768px){
  .sep-grid{grid-template-columns:repeat(3,1fr);gap:4px}
  .sep-bottom{flex-direction:column;align-items:center;gap:1.5rem;bottom:1.5rem;padding:0 1.5rem;text-align:center}
  .sep-stats{gap:2rem}
}
</style>
<style id="film-bg-css">
.film-bg{position:absolute;inset:-40%;width:180%;height:180%;display:flex;flex-direction:column;gap:10px;justify-content:center;overflow:hidden;transform:rotate(-12deg);transform-origin:center;pointer-events:none}
.film-row{display:flex;gap:10px;width:max-content;flex-shrink:0}
.film-row.rl{animation:scrollL 200s linear infinite}
.film-row.rr{animation:scrollR 240s linear infinite}
.fc{flex-shrink:0;width:360px;height:230px;border-radius:8px;background:#1a1010;background-size:cover;background-position:center}
.c1{background-image:url("images/home-film-strip-1.jpg");background-size:cover;background-position:center}.c2{background-image:url("images/home-film-strip-2.jpg");background-size:cover;background-position:center}.c3{background-image:url("images/home-film-strip-3.jpg");background-size:cover;background-position:center}.c4{background-image:url("images/home-film-strip-4.jpg");background-size:cover;background-position:center}.c5{background-image:url("images/home-film-strip-5.jpg");background-size:cover;background-position:center}.c6{background-image:url("images/home-film-strip-6.jpg");background-size:cover;background-position:center}.c7{background-image:url("images/home-film-strip-7.jpg");background-size:cover;background-position:center}.c8{background-image:url("images/home-film-strip-8.jpg");background-size:cover;background-position:center}.c9{background-image:url("images/home-film-strip-9.jpg");background-size:cover;background-position:center}.c10{background-image:url("images/home-film-strip-10.jpg");background-size:cover;background-position:center}.c11{background-image:url("images/home-film-strip-11.jpg");background-size:cover;background-position:center}.c12{background-image:url("images/home-film-strip-12.jpg");background-size:cover;background-position:center}.c13{background-image:url("images/home-film-strip-13.jpg");background-size:cover;background-position:center}.c14{background-image:url("images/home-film-strip-14.jpg");background-size:cover;background-position:center}.c15{background-image:url("images/home-film-strip-15.jpg");background-size:cover;background-position:center}.c16{background-image:url("images/home-film-strip-16.jpg");background-size:cover;background-position:center}.c17{background-image:url("images/home-film-strip-17.jpg");background-size:cover;background-position:center}.c18{background-image:url("images/home-film-strip-18.jpg");background-size:cover;background-position:center}
@keyframes scrollL{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes scrollR{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
</style>
<style>
/* ── Sponsor Strip ─────────────────────────────────────────────────────── */
.sponsor-strip{
  border-top:1px solid var(--border);
  background:var(--black);
  padding:2.25rem 0;
  position:relative;
  overflow:hidden;
}
.sponsor-strip::before{
  content:'';
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse 60% 300% at 50% 50%, rgba(200,16,46,.035) 0%, transparent 70%);
  pointer-events:none;
}
.sponsor-strip-label{
  font-family:'IBM Plex Mono',monospace;
  font-size:.47rem;
  letter-spacing:.28em;
  text-transform:uppercase;
  color:rgba(245,243,239,.16);
  text-align:center;
  margin-bottom:1.4rem;
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:1.4rem;
}
.sponsor-strip-label::before,
.sponsor-strip-label::after{
  content:'';
  width:48px;
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(245,243,239,.12));
}
.sponsor-strip-label::after{
  background:linear-gradient(270deg, transparent, rgba(245,243,239,.12));
}
.sponsor-track-outer{
  overflow:hidden;
  position:relative;
  z-index:1;
}
.sponsor-track-outer::before,
.sponsor-track-outer::after{
  content:'';
  position:absolute;
  top:0;bottom:0;
  width:140px;
  z-index:10;
  pointer-events:none;
}
.sponsor-track-outer::before{
  left:0;
  background:linear-gradient(90deg, var(--black) 30%, transparent);
}
.sponsor-track-outer::after{
  right:0;
  background:linear-gradient(270deg, var(--black) 30%, transparent);
}
.sponsor-track{
  display:flex;
  gap:14px;
  width:max-content;
  padding:6px 0;
  animation:sponsorScroll 26s linear infinite;
}
.sponsor-track.paused{ animation-play-state:paused; }
@keyframes sponsorScroll{
  0%  { transform:translateX(0); }
  100%{ transform:translateX(-50%); }
}
.sponsor-logo{
  flex-shrink:0;
  width:164px;
  height:74px;
  background:#111;
  border:1px solid rgba(245,243,239,.06);
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  position:relative;
  overflow:hidden;
  transition:border-color .4s, transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s;
  transform-origin:center;
}
/* top rim shimmer */
.sponsor-logo::before{
  content:'';
  position:absolute;
  top:0; left:12%; right:12%; height:1px;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,.07), transparent);
  pointer-events:none;
}
/* radial bloom (active only) */
.sponsor-logo::after{
  content:'';
  position:absolute;
  inset:0;
  background:radial-gradient(circle at 50% 0%, rgba(255,255,255,.08), transparent 65%);
  opacity:0;
  transition:opacity .4s;
  pointer-events:none;
}
.sponsor-logo:hover{ border-color:rgba(245,243,239,.2); }
.sponsor-logo.active{
  border-color:rgba(255,255,255,.78);
  transform:scale(1.13);
  z-index:20;
  background:#161616;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.22),
    0 0 12px 3px rgba(255,255,255,.13),
    0 0 32px 8px rgba(255,255,255,.07),
    0 0 64px 18px rgba(255,255,255,.025);
}
.sponsor-logo.active::after{ opacity:1; }
/* logo image */
.sponsor-logo img{
  max-width:96px;
  max-height:42px;
  object-fit:contain;
  filter:brightness(0) invert(.5);
  transition:filter .35s, transform .35s;
  position:relative;
  z-index:1;
  display:block;
}
.sponsor-logo:hover img{ filter:brightness(0) invert(.72); }
.sponsor-logo.active img{ filter:brightness(0) invert(1); transform:scale(1.04); }
/* fallback text */
.sponsor-logo-name{
  font-family:'Bebas Neue',sans-serif;
  font-size:1.05rem;
  color:rgba(245,243,239,.38);
  letter-spacing:.08em;
  text-align:center;
  padding:0 12px;
  line-height:1.3;
  transition:color .3s;
  position:relative;
  z-index:1;
  user-select:none;
}
.sponsor-logo:hover .sponsor-logo-name{ color:rgba(245,243,239,.68); }
.sponsor-logo.active .sponsor-logo-name{ color:#f5f3ef; }
/* tooltip above active card */
.sponsor-tooltip{
  position:absolute;
  bottom:calc(100% + 10px);
  left:50%;
  transform:translateX(-50%) translateY(6px);
  background:#181818;
  border:1px solid rgba(255,255,255,.14);
  border-radius:4px;
  padding:.55rem 1rem;
  white-space:nowrap;
  pointer-events:none;
  z-index:30;
  opacity:0;
  transition:opacity .22s, transform .22s;
  box-shadow:0 0 0 1px rgba(255,255,255,.05), 0 8px 28px rgba(0,0,0,.7);
}
.sponsor-logo.active .sponsor-tooltip{
  opacity:1;
  transform:translateX(-50%) translateY(0);
}
.sponsor-tooltip-name{
  font-family:'Bebas Neue',sans-serif;
  font-size:1rem;
  color:#f5f3ef;
  letter-spacing:.05em;
  line-height:1.2;
  margin-bottom:.2rem;
}
.sponsor-tooltip-type{
  font-family:'IBM Plex Mono',monospace;
  font-size:.42rem;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:#c8102e;
}
.sponsor-tooltip::after{
  content:'';
  position:absolute;
  top:100%; left:50%;
  transform:translateX(-50%);
  border:5px solid transparent;
  border-top-color:#181818;
}
</style>
</head>
<body>
<div class="cur" id="cur"></div>
<div class="cur-ring" id="ring"></div>

<!-- MOBILE OVERLAY -->
<div class="mob-overlay" id="mob">
  <button class="mob-close" onclick="closeMob()">Close ×</button>
  <ul class="mob-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="leadership.html">Leadership</a></li>
    <li><a href="events.html">Events</a></li>
    <li><a href="accolades.html">Accolades</a></li>
    <li><a href="alumni.html">Alumni</a></li>
    <li><a href="polaris.html">Polaris</a></li>
    <li><a href="consulting.html">Consulting</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="mob-meta">De Anza College · Cupertino, CA</div>
</div>

<!-- NAV -->
<nav id="nav">
  <div class="nav-left">
    <a href="index.html" style="background:none;border:none;cursor:pointer;padding:0;display:flex;align-items:center;text-decoration:none">
      <span style="font-family:'Playfair Display',serif;font-size:1.8rem;color:rgba(245,243,239,0.88);line-height:1;user-select:none">Φ</span>
    </a>
    <div class="nav-wordmark" style="border-left:1px solid var(--border);padding-left:1rem">Phi Beta Lambda<br>De Anza Chapter</div>
  </div>
  <div class="nav-right" style="display:flex;align-items:center;gap:2.5rem">
    <ul class="nav-links">
      <li><a id="nl-home" href="index.html">Home</a></li>
      <li><a id="nl-leadership" href="leadership.html">Leadership</a></li>
      <li><a id="nl-events" href="events.html">Events</a></li>
      <li><a id="nl-accolades" href="accolades.html">Accolades</a></li>
      <li><a id="nl-alumni" href="alumni.html">Alumni</a></li>
      <li><a id="nl-polaris" href="polaris.html">Polaris</a></li>
      <li><a id="nl-consulting" href="consulting.html">Consulting</a></li>
    </ul>
    <a href="https://forms.gle/2zixWcFPcGG6sCBF7" target="_blank" class="nav-apply" style="flex-shrink:0">Apply</a>
    <button class="hamburger" onclick="openMob()"><span></span><span></span><span></span></button>
  </div>
</nav>

<div class="page active">

<!-- ── HERO ─────────────────────────────────────────────────────────────── -->
<div class="sep-home">
  <div class="film-bg">
    <div class="film-row rl"><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div></div>
    <div class="film-row rr"><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div></div>
    <div class="film-row rl"><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div></div>
    <div class="film-row rr"><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div></div>
    <div class="film-row rl"><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div><div class="fc c10"></div><div class="fc c11"></div><div class="fc c12"></div><div class="fc c13"></div><div class="fc c14"></div><div class="fc c15"></div><div class="fc c16"></div><div class="fc c17"></div><div class="fc c18"></div><div class="fc c1"></div><div class="fc c2"></div><div class="fc c3"></div><div class="fc c4"></div><div class="fc c5"></div><div class="fc c6"></div><div class="fc c7"></div><div class="fc c8"></div><div class="fc c9"></div></div>
  </div>
  <div class="sep-overlay"></div>
  <div style="position:absolute;inset:0;pointer-events:none;z-index:2;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(200,16,46,0.12) 0%,rgba(60,0,5,0.45) 50%,rgba(0,0,0,0.78) 100%)"></div>
  <div class="sep-center">
    <div style="font-family:'Playfair Display',serif;font-size:7rem;color:rgba(245,243,239,0.92);line-height:1;user-select:none">Φ</div>
    <div style="font-family:'Playfair Display',serif;font-weight:400;font-size:clamp(1.4rem,2.8vw,2.6rem);letter-spacing:.18em;color:rgba(245,243,239,.92);text-align:center;line-height:1.1;margin-top:.25rem">PHI BETA LAMBDA</div>
    <div style="font-family:'Playfair Display',serif;font-weight:400;font-style:italic;font-size:clamp(.7rem,1.1vw,1rem);letter-spacing:.12em;color:rgba(245,243,239,.45);text-align:center">De Anza Chapter</div>
  </div>
  <div class="sep-bottom">
    <div class="sep-wordmark-txt">De Anza's Premier<br>Business Organization</div>
    <div class="sep-stats">
      <div style="text-align:right"><div class="sep-stat-n">100+</div><div class="sep-stat-l">1st Place Awards</div></div>
      <div style="text-align:right"><div class="sep-stat-n">4</div><div class="sep-stat-l">Sponsors</div></div>
      <div style="text-align:right"><div class="sep-stat-n">∞</div><div class="sep-stat-l">Ambition</div></div>
    </div>
  </div>
  <div style="position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);z-index:10;opacity:.4;text-align:center">
    <div class="sep-scroll-dot"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:.45rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(245,243,239,.5);margin-top:4px">Scroll</div>
  </div>
</div>

<!-- ── ABOUT ──────────────────────────────────────────────────────────────── -->
<div class="about-band">
  <div class="about-left">
    <div class="sec-tag">About PBL</div>
    <h2 class="sec-h">The Group<br>For Growth.</h2>
    <div class="sec-body">
      <p>As De Anza's chapter of Phi Beta Lambda, we strive to create a constructively critical environment that facilitates exploration, ethical decision-making, and professional development for all De Anza students.</p>
      <p style="margin-top:1.25rem">We empower aspiring business leaders through professional development, innovation, and collaboration — offering case competitions, community service projects, professional workshops, and networking events. Open to all majors.</p>
    </div>
  </div>
  <div class="about-right">
    <blockquote class="about-quote">"A place where cohorts convene, careers begin, and professional identity is forged."</blockquote>
    <div>
      <div class="sec-tag">What we offer</div>
      <div class="pill-row">
        <span class="pill">FBLA Nationals</span><span class="pill">Consulting</span><span class="pill">Polaris Research</span>
        <span class="pill">Shark Tank</span><span class="pill">Business Olympics</span><span class="pill">Speaker Series</span>
        <span class="pill">Interview Prep</span><span class="pill">Networking</span><span class="pill">Alumni Network</span>
      </div>
    </div>
  </div>
</div>

<!-- ── SPONSOR STRIP ──────────────────────────────────────────────────────── -->
<div class="sponsor-strip">
  <div class="sponsor-strip-label">Our Sponsors &amp; Partners</div>
  <div class="sponsor-track-outer">
    <div class="sponsor-track" id="sponsorTrack">

      <div class="sponsor-logo" data-name="KPMG" data-type="Accounting &amp; Consulting">
        <img src="images/consulting-kpmg.jpg" alt="KPMG">
        <span class="sponsor-logo-name">KPMG</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">KPMG</div><div class="sponsor-tooltip-type">Accounting &amp; Consulting</div></div>
      </div>

      <div class="sponsor-logo" data-name="Star One Credit Union" data-type="Financial Services">
        <img src="images/consulting-star-one.jpg" alt="Star One Credit Union">
        <span class="sponsor-logo-name">Star One</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">Star One Credit Union</div><div class="sponsor-tooltip-type">Financial Services</div></div>
      </div>

      <div class="sponsor-logo" data-name="Foundation for Economic Education" data-type="Economics Education">
        <img src="images/consulting-fee.jpg" alt="FEE">
        <span class="sponsor-logo-name">FEE</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">Foundation for Economic Education</div><div class="sponsor-tooltip-type">Economics Education</div></div>
      </div>

      <div class="sponsor-logo" data-name="KeyPoint Credit Union" data-type="Financial Services">
        <img src="images/consulting-keypoint.jpg" alt="KeyPoint Credit Union">
        <span class="sponsor-logo-name">KeyPoint CU</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">KeyPoint Credit Union</div><div class="sponsor-tooltip-type">Financial Services</div></div>
      </div>

      <!-- duplicates for seamless loop -->
      <div class="sponsor-logo" data-name="KPMG" data-type="Accounting &amp; Consulting">
        <img src="images/consulting-kpmg.jpg" alt="KPMG">
        <span class="sponsor-logo-name">KPMG</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">KPMG</div><div class="sponsor-tooltip-type">Accounting &amp; Consulting</div></div>
      </div>

      <div class="sponsor-logo" data-name="Star One Credit Union" data-type="Financial Services">
        <img src="images/consulting-star-one.jpg" alt="Star One Credit Union">
        <span class="sponsor-logo-name">Star One</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">Star One Credit Union</div><div class="sponsor-tooltip-type">Financial Services</div></div>
      </div>

      <div class="sponsor-logo" data-name="Foundation for Economic Education" data-type="Economics Education">
        <img src="images/consulting-fee.jpg" alt="FEE">
        <span class="sponsor-logo-name">FEE</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">Foundation for Economic Education</div><div class="sponsor-tooltip-type">Economics Education</div></div>
      </div>

      <div class="sponsor-logo" data-name="KeyPoint Credit Union" data-type="Financial Services">
        <img src="images/consulting-keypoint.jpg" alt="KeyPoint Credit Union">
        <span class="sponsor-logo-name">KeyPoint CU</span>
        <div class="sponsor-tooltip"><div class="sponsor-tooltip-name">KeyPoint Credit Union</div><div class="sponsor-tooltip-type">Financial Services</div></div>
      </div>

    </div>
  </div>
</div>

</div><!-- end .page -->

<!-- FOOTER -->
<footer>
  <span class="foot-logo">ΦΒΛ</span>
  <span class="foot-copy">© 2025 Phi Beta Lambda · De Anza College</span>
  <ul class="foot-links">
    <li><a href="https://instagram.com/deanzapbl" target="_blank">Instagram</a></li>
    <li><a href="https://discord.gg/w7zap3SfUm" target="_blank">Discord</a></li>
    <li><a href="https://linktr.ee/deanzapbl" target="_blank">Linktree</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</footer>

<script src="main.js"></script>
<script>
(function(){
  var activeCard = null;
  var track = document.getElementById('sponsorTrack');

  document.querySelectorAll('.sponsor-logo').forEach(function(card){
    var img = card.querySelector('img');
    var fallback = card.querySelector('.sponsor-logo-name');

    if(img && fallback){
      img.addEventListener('load', function(){
        fallback.style.display = 'none';
      });
      img.addEventListener('error', function(){
        img.style.display = 'none';
        fallback.style.display = '';
      });
      if(img.complete && img.naturalWidth > 0){
        fallback.style.display = 'none';
      } else if(img.complete){
        img.style.display = 'none';
        fallback.style.display = '';
      }
    }

    card.addEventListener('click', function(){
      if(activeCard === card){
        card.classList.remove('active');
        if(track) track.classList.remove('paused');
        activeCard = null;
        return;
      }
      if(activeCard) activeCard.classList.remove('active');
      card.classList.add('active');
      if(track) track.classList.add('paused');
      activeCard = card;
    });

    card.addEventListener('mouseenter', function(){
      var cur = document.getElementById('cur');
      var ring = document.getElementById('ring');
      if(cur){ cur.style.width='14px'; cur.style.height='14px'; }
      if(ring){ ring.style.width='52px'; ring.style.height='52px'; ring.style.borderColor='rgba(200,16,46,.8)'; }
    });
    card.addEventListener('mouseleave', function(){
      var cur = document.getElementById('cur');
      var ring = document.getElementById('ring');
      if(cur){ cur.style.width='8px'; cur.style.height='8px'; }
      if(ring){ ring.style.width='36px'; ring.style.height='36px'; ring.style.borderColor='rgba(200,16,46,.5)'; }
    });
  });
})();
</script>
</body>
</html>
