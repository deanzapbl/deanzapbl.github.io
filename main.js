// ── CURSOR ────────────────────────────────────────────────────────────────────
const cur=document.getElementById('cur'),ring=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function tick(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(tick)})();
// Register all interactive elements for cursor enlargement — including sponsor logos
document.querySelectorAll('a,button,.pill,.btn,.person-card,.ev-row,.nav-card,.sponsor-logo').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='14px';cur.style.height='14px';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='rgba(200,16,46,.8)'});
  el.addEventListener('mouseleave',()=>{cur.style.width='8px';cur.style.height='8px';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(200,16,46,.5)'});
});

// ── NAV SCROLL ────────────────────────────────────────────────────────────────
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60),{passive:true});

// ── MOBILE MENU ───────────────────────────────────────────────────────────────
function openMob(){document.getElementById('mob').classList.add('open');document.body.style.overflow='hidden'}
function closeMob(){document.getElementById('mob').classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMob()});

// ── ACTIVE NAV ────────────────────────────────────────────────────────────────
(function(){
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var map = {
    'index.html':'home', '':'home',
    'leadership.html':'leadership',
    'events.html':'events',
    'accolades.html':'accolades',
    'alumni.html':'alumni',
    'polaris.html':'polaris',
    'consulting.html':'consulting',
    'contact.html':'contact'
  };
  var id = map[page] || '';
  if(id==='home') document.getElementById('nav').classList.add('on-home');
  var nl = document.getElementById('nl-'+id);
  if(nl) nl.classList.add('active');
  var b = document.getElementById('groupBanner');
  if(b) setTimeout(function(){ b.classList.add('visible'); }, 50);
})();

// ── SPONSOR STRIP ─────────────────────────────────────────────────────────────
(function(){
  var activeCard = null;
  var track = document.getElementById('sponsorTrack');
  if(!track) return;

  // Image load/error fallback
  document.querySelectorAll('.sponsor-logo').forEach(function(card){
    var img = card.querySelector('img');
    var fallback = card.querySelector('.sponsor-logo-name');
    if(img && fallback){
      // Initially hide fallback; show if image fails
      fallback.style.display = 'none';
      img.addEventListener('load', function(){
        fallback.style.display = 'none';
      });
      img.addEventListener('error', function(){
        img.style.display = 'none';
        fallback.style.display = '';
      });
      // Handle already-cached images
      if(img.complete){
        if(img.naturalWidth > 0){
          fallback.style.display = 'none';
        } else {
          img.style.display = 'none';
          fallback.style.display = '';
        }
      }
    }

    // Click to freeze / unfreeze
    card.addEventListener('click', function(){
      if(activeCard === card){
        card.classList.remove('active');
        track.classList.remove('paused');
        activeCard = null;
        return;
      }
      if(activeCard) activeCard.classList.remove('active');
      card.classList.add('active');
      track.classList.add('paused');
      activeCard = card;
    });
  });
})();
