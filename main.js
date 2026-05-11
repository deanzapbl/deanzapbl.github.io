
// ── CURSOR ────────────────────────────────────────────────────────────────────
const cur=document.getElementById('cur'),ring=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function tick(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(tick)})();
document.querySelectorAll('a,button,.pill,.btn,.person-card,.ev-row,.nav-card').forEach(el=>{
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