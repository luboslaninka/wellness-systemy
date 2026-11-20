// Typy sáun: fotka vľavo sa drží pri scrollovaní a mení sa podľa kapitoly, ktorá je práve v strede obrazovky.
(() => {
const stage=document.querySelector('.sp-stage');
const chapters=[...document.querySelectorAll('.sp-chapters .sp-type')];
if(!stage||!chapters.length||!('IntersectionObserver' in window))return;
const photos=[...stage.querySelectorAll('.sp-stage-photo')];
const dots=[...stage.querySelectorAll('.sp-stage-dot')];
const name=stage.querySelector('.sp-stage-name');
function show(id){
 photos.forEach(img=>img.classList.toggle('is-active',img.dataset.for===id));
 dots.forEach(dot=>dot.classList.toggle('is-active',dot.dataset.for===id));
 const heading=document.getElementById(id)?.querySelector('h3');
 if(heading&&name)name.textContent=heading.textContent;
}
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting)show(entry.target.id)});
},{rootMargin:'-45% 0px -45% 0px'});
chapters.forEach(chapter=>observer.observe(chapter));
})();
