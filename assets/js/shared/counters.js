// Čísla hovoria za nás (spoločný vzor podstránok): hodnoty sa narátajú od nuly, keď sa sekcia objaví na obrazovke.
(() => {
const counters=[...document.querySelectorAll('.sp-count[data-to]')];
if(!counters.length||!('IntersectionObserver' in window))return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const duration=1800;
const ease=t=>1-Math.pow(1-t,3);
function run(el){
 const to=Number(el.dataset.to),start=performance.now();
 function frame(now){
  const p=Math.min((now-start)/duration,1);
  el.textContent=String(Math.round(to*ease(p)));
  if(p<1)requestAnimationFrame(frame);
 }
 requestAnimationFrame(frame);
}
counters.forEach(el=>{el.textContent='0'});
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  observer.unobserve(entry.target);
  run(entry.target);
 });
},{threshold:.6});
counters.forEach(el=>observer.observe(el));
})();
