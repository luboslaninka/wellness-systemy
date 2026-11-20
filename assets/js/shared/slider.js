// Slider realizácií: tlačidlá posúvajú o jednu fotografiu, na konci sa vracia na začiatok.
// Automatický posun každých 5 s; zastaví sa pri myši, fokuse, skrytej karte a pri obmedzenom pohybe.
(() => {
document.querySelectorAll('[data-slider]').forEach(slider=>{
 const track=slider.querySelector('.sp-slider-track');
 const slides=[...track.children];
 if(!slides.length)return;
 const step=()=>slides[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||0);
 const atEnd=()=>track.scrollLeft+track.clientWidth>=track.scrollWidth-4;
 const atStart=()=>track.scrollLeft<=4;
 function next(){track.scrollBy({left:atEnd()?-track.scrollWidth:step()})}
 function prev(){track.scrollBy({left:atStart()?track.scrollWidth:-step()})}
 slider.querySelector('.sp-slider-next').addEventListener('click',next);
 slider.querySelector('.sp-slider-prev').addEventListener('click',prev);
 track.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'){event.preventDefault();next()}
  if(event.key==='ArrowLeft'){event.preventDefault();prev()}
 });
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let timer=0,paused=false;
 function start(){stop();if(!reduced.matches&&!paused&&!document.hidden)timer=setInterval(next,5000)}
 function stop(){clearInterval(timer);timer=0}
 slider.addEventListener('pointerenter',()=>{paused=true;stop()});
 slider.addEventListener('pointerleave',()=>{paused=false;start()});
 slider.addEventListener('focusin',()=>{paused=true;stop()});
 slider.addEventListener('focusout',()=>{paused=false;start()});
 document.addEventListener('visibilitychange',start);
 reduced.addEventListener('change',start);
 if('IntersectionObserver' in window){
  new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting?start():stop()),{threshold:.3}).observe(slider);
 }else start();
});
})();
