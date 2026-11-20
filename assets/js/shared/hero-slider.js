// Slider ponuky cez celú šírku: prelínanie snímok, tlačidlá, bodky, šípky na klávesnici.
// Automaticky každých 6 s; zastaví sa pri myši alebo fokuse, na skrytej karte a pri obmedzenom pohybe.
(() => {
document.querySelectorAll('[data-hero-slider]').forEach(root=>{
 const slides=[...root.querySelectorAll('.sp-hs-slide')];
 const dots=[...root.querySelectorAll('.sp-hs-dots button')];
 if(slides.length<2)return;
 let index=0;
 function show(i){
  index=(i+slides.length)%slides.length;
  slides.forEach((s,k)=>{const on=k===index;s.classList.toggle('is-active',on);s.inert=!on;s.setAttribute('aria-hidden',String(!on))});
  dots.forEach((d,k)=>{const on=k===index;d.classList.toggle('is-active',on);on?d.setAttribute('aria-current','true'):d.removeAttribute('aria-current')});
 }
 show(0);
 root.querySelector('.sp-slider-next').addEventListener('click',()=>{show(index+1);start()});
 root.querySelector('.sp-slider-prev').addEventListener('click',()=>{show(index-1);start()});
 dots.forEach((d,k)=>d.addEventListener('click',()=>{show(k);start()}));
 root.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1)});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let timer=0,paused=false,visible=true;
 function stop(){clearInterval(timer);timer=0}
 function start(){stop();if(!reduced.matches&&!paused&&visible&&!document.hidden)timer=setInterval(()=>show(index+1),6000)}
 root.addEventListener('pointerenter',()=>{paused=true;stop()});
 root.addEventListener('pointerleave',()=>{paused=false;start()});
 root.addEventListener('focusin',()=>{paused=true;stop()});
 root.addEventListener('focusout',()=>{paused=false;start()});
 document.addEventListener('visibilitychange',start);
 reduced.addEventListener('change',start);
 if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{visible=e.isIntersecting;start()}),{threshold:.3}).observe(root);
 else start();
});
})();
