// Pozastaví animáciu svetelných zábleskov v úvode, keď úvod nie je na obrazovke (plynulejší scroll).
(() => {
const hero=document.querySelector('.split-hero');
if(!hero||!('IntersectionObserver' in window))return;
new IntersectionObserver(([entry])=>hero.classList.toggle('is-offscreen',!entry.isIntersecting),{rootMargin:'0px 0px -35% 0px'}).observe(hero);
})();
